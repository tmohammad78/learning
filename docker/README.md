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

## Docker swarm 
Swarm mode for Docker is the official solution from Docker Inc. to treat a cluster
of hosts as a single Docker daemon and deploy services to them . A Docker swarm consists of a number of nodes. Each node may be a manager or a worker, and these roles are flexible and can be changed in the swarm at any time.

## Containers in Detail
Container is a single entity but in fact they are implemented through several separate mechanisms built into the Linux kernel that all work together: control groups (cgroups), namespaces, and SELinux or AppArmor. <br />
Each container that you launch is an individual room with one or more guests.When running Docker, your computer is the hotel. Without Docker, it’s more like a hostel with open bunk rooms .
 
### NameSpace
Inside each container, you see a filesystem, network interfaces, disks, and other resources that
all appear to be unique to the container despite sharing the kernel with all the other processes on
the system.
container has a namespace for each type of resources.
Six type of resources : mounts, UTS, IPC, PID, network, and user namespaces.
1) Mount namespace : We see when we ```exec``` contianer , and then ```ls``` , we'll see a filesystem that it's not actual root of system. <br />
2) UTS namespaces
give container different hostname and domain name<br />
3) PID namespaces
A process has a unique PID in each namespace to which it belongs.<br />
4) Network namespaces
This is what allows your container to have its own network devices, ports, and so on. When you run docker ps and see the bound ports for your container, you are seeing ports from both namespaces <br />
```Exp:```Namespaces make up the walls of the room, and ensure that processes cannot interact withneighboring processes in any ways that they are not specifically allowed to
### cgroups 
Control groups, or cgroups for short, allow you to set limits on resources for processes and their children. This is the mechanism that Docker uses to control limits on memory, swap, CPU, and storage and network I/O resources.
Docker uses cgroups not just to limit resources but also to report on them. These are many of the metrics you see, for example, in the output of docker stats
```exp:```Control groups are like the floor and ceiling of the room, trying to ensure that the inhabitants have the resources they need to enjoy their stay, without allowing them to use resources or space reserved forothers.
### SELinux and AppArmor 
These provides strong security isolation.<br />
```exp:```They are a bit like hotel security, ensuring that even if something unexpected or untoward happens, it is unlikely to cause much more than the headache of filling out paperwork and filing an incident report.

### Tips
[Read tips document](https://github.com/tmohammad78/learning/blob/main/docker/tips.md)