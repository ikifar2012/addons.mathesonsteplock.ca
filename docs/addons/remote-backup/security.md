---
title: "Remote Backup | Security"
sidebar_label: "Security"
---

# Security

## Known hosts
For SSH and rsync operation it is recommend to add the public key of the remote host to the file `/addon_configs/3490a758_remote_backup/known_hosts`. If you see a warning `Missing known_hosts file!` then you have not done so and the add-on automatically does it for you each time it is called. **Note that this is a security risk** which can be fixed by executing `ssh-keyscan -t rsa <remote host> >> /addon_configs/3490a758_remote_backup/known_hosts` from a terminal, e.g. [SSH & Web Terminal](https://github.com/hassio-addons/addon-ssh).

## Key-based authentication
It's recommended that you provide a private key in the `ssl` directory that can be used for authentication with the `remote_host` instead of using a `remote_password`. The public key is automatically generated.

# One suggested way to install ssh encryption for this addon

## Generate a key
Open a terminal in HA using one of the terminal addons, the Code Server (VSCode) addon, or from the  front end of HA pi, etc.  Note Home Assistant OS and Supervised mode use the folder /ssl to store the encryption files in.  This replaces the ~/.ssh folder many Linux distro's use.

At the terminal prompt:

```cd ~/ssl```

```ssh-keygen -f ~/addon_configs/3490a758_remote_backup/something-unique-ed25519 -t ed25519```

Change ```something-unique-ed25519``` to something else but the letters ed25519 might help you in future troubleshooting.

Answer the questions.  It is not recommended to add a passphrase for this application.

* Reference: https://www.ssh.com/academy/ssh/keygen

## Copy the key
At the terminal prompt:

```ssh-copy-id -i ~/addon_configs/3490a758_remote_backup/something-unique-ed25519 user@host```

where ```something-unique-ed25519``` matches the filename you generated above and ```user@host``` matches the username and host where you are remote storing the data.

The name ```something-unique-ed25519``` will also be loaded in the addon configuration in the ```SSH private key``` box. ```user``` will match the ```username``` box. ```host``` will match the ```remote host``` box.

* Reference https://www.ssh.com/academy/ssh/copy-id

## Setup known_hosts
At the terminal prompt:

```ssh-keyscan -H 192.168.x.x >> ~/addon_configs/3490a758_remote_backup/known_hosts```

where the IP address matches the IP address of the remote host you are sending the file to. ```host``` value can also be used here.

* Reference: https://www.techrepublic.com/article/how-to-easily-add-an-ssh-fingerprint-to-your-knownhosts-file-in-linux/
