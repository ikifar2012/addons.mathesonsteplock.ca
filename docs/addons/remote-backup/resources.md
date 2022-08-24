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

## Why is SCP not working?
Please see [this discussion](https://github.com/ikifar2012/remote-backup-addon/issues/50#issuecomment-1221932737) for details. Main reason is that SCP was deprecated due to security issues. You should move over to using SFTP.

