Vagrant.configure("2") do |config|

    # Jenkins
    config.vm.define "jenkins" do |jenkins|
        jenkins.vm.box = "jharoian3/ubuntu-22.04-arm64"
        jenkins.vm.hostname = "jenkins"
        jenkins.vm.network "private_network", ip: "192.168.10.100"
        jenkins.vm.provision "shell", path: "Vagrant/jenkins-setup.sh"
        jenkins.vm.provider :parallels do |prov|
            prov.memory = "2048"  # 2GB   
        end
    end

    ### SonarQuebe VM ###
    config.vm.define "sonarqube" do |sonar|
        sonar.vm.box = "jharoian3/ubuntu-22.04-arm64"
        sonar.vm.hostname = "sonarqube"
        sonar.vm.network "private_network", ip: "192.168.10.101"
        sonar.vm.provision "shell", path: "Vagrant/sonar-setup.sh"
        sonar.vm.provider :parallels do |prov|
            prov.memory = "2048"
        end
    end

    ### Nexus VM ###
    config.vm.define "nexus" do |nexus|
        nexus.vm.box = "jharoian3/ubuntu-22.04-arm64"
        nexus.vm.hostname = "nexus"
        nexus.vm.network "private_network", ip: "192.168.10.102"
        nexus.vm.provision "shell", path: "Vagrant/nexus-setup.sh"
        nexus.vm.provider :parallels do |prov|
            prov.memory = "2048"
        end
    end

    ### Docker VM ###
    config.vm.define "docker" do |docker|
        docker.vm.box = "jharoian3/ubuntu-22.04-arm64"
        docker.vm.hostname = "docker"
        docker.vm.network "private_network", ip: "192.168.10.110"
        docker.vm.provision "shell", path: "Vagrant/docker-setup.sh"
        docker.vm.provider :parallels do |prov|
            prov.memory = "2048"
        end
    end

    ### Kubernetes VM ###
    config.vm.define "kube" do |kube|
        kube.vm.box = "jharoian3/ubuntu-22.04-arm64"
        kube.vm.hostname = "kube"
        kube.vm.network "private_network", ip: "192.168.10.200"
        kube.vm.provision "shell", path: "Vagrant/kube-setup.sh"
        kube.vm.provider :parallels do |prov|
            prov.memory = "2048"
        end
    end

end