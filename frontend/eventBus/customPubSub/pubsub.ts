import { v4 as uuid, validate as validateUUID } from "uuid";

type Topic = string;
type Message = Record<string, unknown>;
type ID = string;
type OnMessageFn = (message: Message) => void;

export type Subscribe = (topic: Topic, onMessage: OnMessageFn) => ID;
export type Publish = (topic: Topic, message: Record<string, unknown>) => void;
export type UnSusbscribe = (id: ID) => void;

export class PubSub {

    private topics: Record<Topic, ID[]> = {};
    private subscriberTopics: Record<ID, Topic> = {};
    private persistedMessages: Record<Topic, Message> = {};
    private subscriberOnMsg: Record<ID, OnMessageFn> = {};

    constructor({ persistedTopics }: { persistedTopics?: Topic[] } = {}) {
        if (persistedTopics && !Array.isArray(persistedTopics)) {
          throw new Error("Persisted topics must be an array of topics.");
        }
        if (persistedTopics) {
          this.persistedMessages = persistedTopics.reduce(
            (acc: Record<Topic, Message>, cur: Topic) => {
              acc[cur] = {};
              return acc;
            },
            {}
          );
        }
        this.subscribe.bind(this);
        this.publish.bind(this);
    }
    /**
     * Subscribe to messages being published in the given topic.
     * @param topic Name of the channel/topic where messages are published.
     * @param onMessage Function called whenever new messages on the topic are published.
     * @returns ID of this subscription.
     */
    public subscribe(topic,onMessage) {
        // Validate inputs
        if (typeof topic !== "string") throw new Error("Topic must be a string.");
        if (typeof onMessage !== "function")
        throw new Error("onMessage must be a function.");

        const subID = uuid();

        if (!(topic in this.topics)) {
            this.topics[topic] = [subID];
          } else {
            this.topics[topic].push(subID);
        }

        // Store onMessage and topic separately for faster lookup
        this.subscriberOnMsg[subID] = onMessage;
        this.subscriberTopics[subID] = topic;
        // If the topic is persisted and there are existing messages, trigger the onMessage handler immediately
        if (topic in this.persistedMessages) {
            onMessage(this.persistedMessages[topic]);
        }
        return subID;
    }
    /**
     * Publish messages on a topic for all subscribers to receive.
     * @param topic The topic where the message is sent.
     * @param message The message to send. Only object format is supported.
     */
    public publish(topic: Topic, message: Record<string, unknown>) {
        if (typeof topic !== "string") throw new Error("Topic must be a string.");
        if (typeof message !== "object") {
          throw new Error("Message must be an object.");
        }
        // If topic exists post messages
        if (topic in this.topics) {
          const subIDs = this.topics[topic];
          subIDs.forEach((id) => {
            if (id in this.subscriberOnMsg) {
              this.subscriberOnMsg[id](message);
            }
          });
        }
        if (topic in this.persistedMessages) {
          this.persistedMessages[topic] = message;
        }
    }

      /**
   * Unsusbscribe for a given subscription id.
   * @param id Subscription id
   */
  public unsubscribe(id: ID): void {
    // Validate inputs
    if (typeof id !== "string" || !validateUUID(id)) {
      throw new Error("ID must be a valid UUID.");
    }
    // If the id exists in our subscriptions then clear it.
    if (id in this.subscriberOnMsg && id in this.subscriberTopics) {
      // Delete message listener
      delete this.subscriberOnMsg[id];
      // Remove id from the topics tracker
      const topic = this.subscriberTopics[id];
      // Cleanup topics
      if (topic && topic in this.topics) {
        const idx = this.topics[topic].findIndex((tID) => tID === id);
        if (idx > -1) {
          this.topics[topic].splice(idx, 1);
        }
        // If there are no more listeners clean up the topic as well
        if (this.topics[topic].length === 0) {
          delete this.topics[topic];
        }
      }
      // Delete the topic for this id
      delete this.subscriberTopics[id];
    }
  }

}

export default PubSub;