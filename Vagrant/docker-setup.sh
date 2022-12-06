#!/bin/bash

# Install Docker
apt update
apt install ca-certificates curl gnupg lsb-release -y
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
chmod a+r /etc/apt/keyrings/docker.gpg
apt update
apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y

# Configure docker
# docker network create --subnet=192.168.100.0/24 mynet

# Get CPU Architecture
#ARCH=$(dpkg --print-architecture)

# Install Kubernetes
#curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/${ARCH}/kubectl"
#sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Install Minikube
#curl -LO "https://storage.googleapis.com/minikube/releases/latest/minikube-linux-${ARCH}"
#sudo install "minikube-linux-${ARCH}" /usr/local/bin/minikube