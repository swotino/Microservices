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
end