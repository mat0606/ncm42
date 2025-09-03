#cloud-config
disable_root: False
ssh_enabled: True
ssh_pwauth: True
users:
  - name: nutanix
    passwd: @@{ROCKY 2 Credential.secret}@@
    chpasswd: { expire: False }
    ssh-authorized-keys:
      - @@{ROCKY.public_key}@@
    sudo: ['ALL=(ALL) NOPASSWD:ALL']

#cloud-config
fqdn: @@{name}@@.@@{domain_name}@@
manage_etc_hosts: true
hostname: @@{name}@@
