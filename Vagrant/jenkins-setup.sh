#!/bin/bash

# Install Java
sudo apt-get update
sudo apt-get install -y openjdk-7-jdk

# Install Jenkins
wget -q -O - https://jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install -y jenkins

# Install Git
sudo apt-get install -y git

# Install Maven
sudo apt-get install -y maven