## Create 1 cluster and 3 node
In this example I created a one cluster and 3 node, with swarm mode of docker .
I used Arvan Cloud. <br />
In Cluster we have one manager and left nodes are worker

### Instrcution
1) We create a 3 server (Abrak in the Arvan) , after that we should select on server to create
a manager. 
2) We select server 1 and we run these commands:
```
1) ssh ubuntu@172.17.4.1 (username@ipAddress)
2) apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```
**note:**I got an error when i wanted to install docker , I installed with this command:
```
sudo apt-get install -y docker.io
```
```
3) sudo docker swarm init --­­advertise-­addr 172.17.4.1
```
**note:**After running that , we get an token , token is important for us , we should use that for creating worker node.
```
4) ssh ubuntu@172.17.4.2 (server 2)
5) apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
6) docker swarm join --token tokenGenerated 188.121.108.109:2377 
```
**note:**I faced to this issue and I solved this with this :
```
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/swarm/join": dial unix /var/run/docker.sock: connect: permission denied
```
solution is : 
```
sudo chmod 666 /var/run/docker.sock
```
```
7) ssh ubnutu@172.17.4.3 (server 3)
8) apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
9) docker swarm join --token tokenGenerated 188.121.108.109:2377 
```

Now for see status we can run this command on manager:
```
docker node ls
```
we see result like this:
```
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
9i6rqsbuf5rgt9woc2yvf7j4p *   server1    Ready     Active         Leader           20.10.12
zrrw6zpka440zewo9oa5fnygs     server2    Ready     Active                          20.10.12
vxzz81gyzaslc0ifsded70wmz     server3    Ready     Active                          20.10.12
```