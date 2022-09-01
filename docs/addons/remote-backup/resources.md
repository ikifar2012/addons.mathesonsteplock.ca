---
title: "Remote Backup | Helpful Resources"
sidebar_label: "Helpful Resources"
---

# Resources

Here you will find some helpful resources for the Remote Backup addon 

### Videos 
SirGoodEnough has made a great video demonstrating the addon
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0C4h3Bv75J4?start=860" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# FAQ

## Why is no backup is created?
This can happen if the add-on is restarted before it has finished creating the last backup. Unfortunately, the HA supervisor API does not report that a backup creation process is still running. Thus it just fails.

## Why is SFTP/SCP not working?
The addon automatically first probes SFTP to copy files. In case that fails, SCP is used as fallback. Please see [this discussion](https://github.com/ikifar2012/remote-backup-addon/issues/50#issuecomment-1221932737) for details. In short, the main reason is that SCP was deprecated due to security issues.

### Synology
Note that are some specialities for theses type of NAS:
- Since about DSM 6.2.x you need to have the user has part of the `adminstrator` group. [see reference](https://www.sindastra.de/p/2187/synology-ssh-security-fail)
- The path is different depending on the protocol. While SCP is usually like `/volume1/my_path/` SFTP uses a different start directory, thus `my_path/` is the equivalent.

