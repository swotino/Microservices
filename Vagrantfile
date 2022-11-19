$dockerScript = <<-SCRIPT
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

    ### Docker VM ###
    config.vm.define "docker" do |d|
        d.vm.box = "jharoian3/ubuntu-22.04-arm64"
        d.vm.hostname = "docker"
        d.vm.network "private_network", ip: "192.168.10.110"
        d.vm.provider :parallels do |vmw|
            vmw.memory = "2048"
        end
        d.vm.provision "shell", inline: $dockerScript
    end
end