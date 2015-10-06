box      = "ubuntu/trusty64"
hostname = "craftdev"
domain   = "craft.dev"
ip       = "10.101.194.198"
ram      = "2048"

Vagrant.configure(2) do |config|
  config.vm.box = box
  config.vm.network "private_network", ip: ip
  # config.vm.network :hostonly, ip
  config.vm.host_name = hostname + '.' + domain

  config.vm.provider "virtualbox" do |v|
    v.memory = ram
  end

  config.vm.synced_folder "", "/dev/vagrant"
  # ,
  #   :nfs => true,
  #   :mount_options => ["dmode=775","fmode=664"]

  config.vm.provision :shell, path: "bin/bootstrap_server.sh"

end
