---
title: "Remote Backup | Blueprints and Automation's"
sidebar_label: "Blueprints and Automation's"
---

# Blueprints and Automation's

<!-- ## Blueprints -->

## Automation's

### Backup at sunrise

```yaml
alias: Automatic Remote Backup
description: 'Upon sunrise, create a remote backup'
trigger:
  - platform: sun
    event: sunrise
    offset: '0'
condition: []
action:
  - service: hassio.addon_start
    data:
      addon: 3490a758_remote_backup
mode: single
```
**example by [@Lockszmith-GH](https://github.com/Lockszmith-GH)**