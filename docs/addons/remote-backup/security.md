---
title: "Remote Backup | Security"
sidebar_label: "Security"
---

# Security

## Known hosts
For SSH and rsync operation it is recommend to add the public key of the remote host to the file `/ssl/known_hosts`. If you see a warning `Missing known_hosts file!` then you have not done so and the add-on automatically does it for you each time it is called. **Note that this is a security risk** which can be fixed by executing `ssh-keyscan -t rsa <remote host> >> /ssl/known_hosts` from a terminal, e.g. [SSH & Web Terminal](https://github.com/hassio-addons/addon-ssh).

## Key-based authentication
It's recommended that you provide a private key in the `ssl` directory that can be used for authentication with the `remote_host` instead of using a `remote_password`. The public key is automatically generated.

