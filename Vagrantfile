$jenkinsScript = <<-SCRIPT
apt update
apt install openjdk-8-jdk maven git wget -y
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
apt update
apt install jenkins -y
SCRIPT

Vagrant.configure("2") do |config|

    ### Jenkins VM ###
    config.vm.define "jenkins" do |j|
        j.vm.box = "jharoian3/ubuntu-22.04-arm64"
        j.vm.hostname = "jenkins"
        j.vm.network "private_network", ip: "192.168.10.100"
        j.vm.provider :parallels do |vmw|
            vmw.memory = "2048"
        end
    end

    ### SonarQuebe VM ###
    config.vm.define "sonarqube" do |j|
        j.vm.box = "jharoian3/ubuntu-22.04-arm64"
        j.vm.hostname = "sonarqube"
        j.vm.network "private_network", ip: "192.168.10.101"
        j.vm.provider :parallels do |vmw|
            vmw.memory = "2048"
        end
    end

    ### Nexus VM ###
    config.vm.define "nexus" do |j|
        j.vm.box = "jharoian3/ubuntu-22.04-arm64"
        j.vm.hostname = "nexus"
        j.vm.network "private_network", ip: "192.168.10.102"
        j.vm.provider :parallels do |vmw|
            vmw.memory = "2048"
        end
    end

    ### Jenkins2 VM ###
    #config.vm.define "jen" do |j|
    #    j.vm.box = "jharoian3/ubuntu-22.04-arm64"
    #    j.vm.hostname = "jen"
    #    j.vm.network "private_network", ip: "192.168.10.110"
    #    j.vm.provider :parallels do |vmw|
    #        vmw.memory = "2048"
    #    end
    #    j.vm.provision "shell", inline: $jenkinsScript 
    #end
end