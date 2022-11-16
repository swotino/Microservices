Vagrant.configure("2") do |config|

    ### Jenkins VM ###
    config.vm.define "jenkins" do |j|
        #j.vm.box = "bytesguy/ubuntu-server-20.04-arm64"
        #j.vm.box_version = "1.0.0"
        j.vm.box = "jharoian3/ubuntu-22.04-arm64"
        j.vm.hostname = "jenkins"
        j.vm.network "private_network", ip: "192.168.10.100"
        j.vm.provider :parallels do |vmw|
            vmw.memory = "2048"
        end
    end
end