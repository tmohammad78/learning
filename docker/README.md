# Docker
For start these images helps that why we use docker
<div style="display:flex; justify-content:space-between">
<img src="https://github.com/tmohammad78/learning/blob/main/docker/images/before after docker.png">
<img src="https://github.com/tmohammad78/learning/blob/main/docker/images/before,after docker.png" />
</div>
The core of Docker 
<img src="https://github.com/tmohammad78/learning/blob/main/docker/images/Core Docker Concepts.png" />

<img src="https://github.com/tmohammad78/learning/blob/main/docker/images/docker_images_containers.png" />

### Docker Layering
Docker layering helps you manage a big problem that arises when you use containers
at scale. Imagine what would happen if you started up hundreds—or even thousands—
of the to-do app, and each of those required a copy of the files to be stored somewhere.
As you can imagine, disk space would run out pretty quickly! By default, Docker
internally uses a copy-on-write mechanism to reduce the amount of disk space required
<img src="https://github.com/tmohammad78/learning/blob/main/docker/images/filesystem.png" />

### Differences between VMs and Docker containers
These are a few of the differences between VMs and Docker containers:
 Docker is application-oriented, whereas VMs are operating-system oriented.
 Docker containers share an operating system with other Docker containers. In
contrast, VMs each have their own operating system managed by a hypervisor.
 Docker containers are designed to run one principal process, not manage mul-
tiple sets of processes.


## Docker’s architecture
Docker on host machine split into two parts : A daemon with a Restful API and client that talks to the daemon.
<img src="https://github.com/tmohammad78/learning/blob/main/docker/images/Docker Overview.png" />

## The Docker daemon
The daemon is a server that receives requests and returns responses from the
client using the HTTP protocol.It controls access to Docker on your machine, manages the state of your containers and images, and brokers interactions with the outside world .
**Although by default your Docker daemon is accessible only on your host**

## Docker Client
It’s what you run when you type Docker daemon commands like docker run or docker pull on your machine. Its job is to communicate with the Docker daemon via

## Docker Registry
Docker registry is a place for store the images , we can have a private docker registry.
A Docker registry allows multiple users to push and pull images from a central store
using a RESTful API.

## Docker Hub
The Docker Hub (see figure 2.10) is a registry maintained by Docker Inc. It has tens
of thousands of images on it ready to download and run

## volume
Container is stateless it means it has not scence about files that exist and after we shut it down and start again , all files gone . so for solve this problem we create a volume for our files . Another reason is we don't want to store data and big files in the container and maybe it's distributed and it's share storage with other container in different data center . so we use volume . we can create a volume seperatly and after that bind that volume to the container.

<img src="https://github.com/tmohammad78/learning/blob/main/docker/images/volumes.png" />

```
docker run -v /var/db/tables:/var/data1 -it debian bash
```