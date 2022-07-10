# Docker Tips

## Docker Client
### communication between containers for internal purpose
Containers could has communication for some reason , for this action , we should create a local network.<br/>
You can use this technique to set up any number of containers in a cluster on their
own private network, only requiring that the containers have some way of discovering
each other’s names.<br/>
All containers are connected to the Docker bridge network by default, so when we
asked for it to join my_network , it did so in addition to the network it was already on. 
1) we have a up container , for example a wordpress
```
docker start myContainer
```
2) After this , we create a isolate network
```
docker network create my_network
```
3) Now , we should append this network to our container
```
docker network connect my_network myContainer
```
4) We create another container , and we append that network to it ,
```
docker run -it --network my_network ubuntu:16.04 bash
```
5) Now you can curl that container and we see the connections
```
curl -sSL myContainer | head -n5
```

## Docker & Development
#### Each Service per container
The primary reason for using one service per container is the easier separation of concerns through the single-responsibility principle . The primary reason for using one service per container is the easier separation of concerns through the single-responsibility principle.
**It does create management overhead, though, so it’s good to consider whether it’s worth it for your use case.**

## Caching
It's important that how prioritize our command in the docker file , because this commands get cached,
In order to take advantage of Layer Caching in Docker you should structure your Dockerfile in a way that frequently changing steps such as COPY are located near the end of the Dockerfile file. 
- Copy :
 If the contents of all external files on the first COPY command are the same, the layer cache will be used and all subsequent commands until the next ADD or COPY command will use the layer cache.
- Add: Same above
**note:** Copy and Add command are same but the difference is , with add we can download from the url and we can extract the files .
Forexample:
```
FROM ubuntu:14.04
RUN apt-get update && apt-get install nodejs npm
WORKDIR /opt
COPY app /opt/app
RUN cd app && npm install
RUN cd app && ./minify_static.sh
```
You can convert the above code to the following sample : 
```
FROM ubuntu:14.04
RUN apt-get update && apt-get install nodejs npm
WORKDIR /opt
COPY app/package.json /opt/app/package.json
RUN cd app && npm install
COPY app /opt/app
RUN cd app && ./minify_static.sh
```
The main difference is that in the second one we are caching `npm installing` , and this command doesn't 


## Make smaller Image
We should reduce our image size , small size is valuable
#### These steps
1) Run the image.
2) Enter the container.
3) Remove unnecessary files.
4) Commit the container as a new image.
5) Flatten the image.

#### Use small image


