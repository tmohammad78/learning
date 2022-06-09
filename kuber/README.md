# Kubernetes

#### To create simple pod (declerative)
To create basic pod kuber start with these commands:
1) minikube start
2)kubectl apply -f pod1.yml    --> To Create Pod
3) kubectl describe pods firstpod --> See descriptions of pod
4) kubectl delete -f pod1.yml
5) kubectl logs pod1 --> To see logs of pod
6) kubectl exec -it firstpod -- bash

#### To Create impretive
1) "kubectl run podName --image=imageName"