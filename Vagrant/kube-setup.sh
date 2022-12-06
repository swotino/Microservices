#!/bin/bash

# Install Microk8s and Kubernetes  
apt update
snap install microk8s --classic

curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/$(dpkg --print-architecture)/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectll

# Config kubectl
mkdir -p $HOME/.kube
microk8s config > $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config