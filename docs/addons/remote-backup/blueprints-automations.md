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

**Example by [@Lockszmith-GH](https://github.com/Lockszmith-GH)**

### Create persistent notification if backup fails

```yaml
alias: Backup check
description: This automation creates an persistent notification in case the backup fails.
trigger:
  - platform: event
    event_type: remote_backup_status
    event_data:
      result: error
action:
  - service: persistent_notification.create
    data:
      message: Backup failed
mode: single
```

