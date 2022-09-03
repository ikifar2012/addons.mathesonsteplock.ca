---
title: "Remote Backup | Basic Configuration"
sidebar_label: "Basic Configuration"
---

# Basic Configuration

Use the button below to access the add-on configuration page:

[![Open your Home Assistant instance and show the dashboard of a Supervisor add-on.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=3490a758_remote_backup)

*If the above link does not work ensure you have completed the [Installation](/docs/installation)*

## Example Configuration

```yaml
remote_host: my.remotehost.local
remote_port: 22
remote_user: username
remote_key: keyfile
backup_friendly_name: true
backup_custom_prefix: Automated backup
backup_exclude_folders:
  - media
  - share
backup_exclude_addons:
  - core_mariadb
  - core_ssh
  - core_mosquitto
backup_keep_local: "7"
ssh_enabled: true
ssh_remote_directory: /path/to/your/backup/dir
rsync_enabled: false
```

## Options

|Parameter|Required|Description|
|---------|--------|-----------|
|`debug`|No|Allows you to disable or enable debug mode|
|`remote_host`|Yes|The hostname or IP address of the file server for `ssh` and `rsync` or the name of the remote specified in `rclone.conf`, example: `backblaze`|
|`remote_port`|Yes|The port used for `SFTP` (`SSH`) and `rsync`|
|`remote_user`|Yes|The username used for authentication with the `remote_host`|
|`remote_password`|No|The password used for authentication with the `remote_host`|
|`remote_key`|No|The filename of the SSH key used for authentication with the `remote_host`. This file must be located in the `ssl` directory of Home Assistant which can be accessed through SAMBA under the share name `ssl`|
|`remote_host_key_algorithms`|No|Used for enabling legacy algorithms|
|`backup_friendly_name`|No|Allows the snapshot to be renamed on the destination server to match the name in the Home Assistant UI|
|`backup_custom_prefix`|No|Allows you to change the name prefixing the date of the snapshot, by default this is set to `Automated backup`|
|`backup_exclude_folders`|No|A list of folders to exclude from the backup. Valid folders include: `addons/local, homeassistant, media, share, ssl`|
|`backup_exclude_addons`|No|A list of add-ons to exclude from the backup, based on add-on slug, which is the hostname with `-` replaced by `_`, e.g. `core_mariadb`|
|`backup_keep_local`|No|Controls how many local backups you want to preserve on the Home Assistant host. The default (`all`) is to keep all local backups. To keep no local backups set this to `null` then all backups created will be removed after remote transfer. This can also be set with to a number to preserve only the specified amount|
|`backup_password`|No|If set then the backup will be contained encrypted using the provided password|
|`ssh_enabled`|No|Allows you to disable or enable the SSH function|
|`ssh_remote_directory`|No*|The destination directory where the snapshots will be placed|
|`rsync_enabled`|No|Allows you to enable or disable the rsync function|
|`rsync_rootfolder`|No*|The root folder of the rsync server|
|`rsync_exclude`|No|A comma separated list of files or folders to exclude from the rsync transfer|
(*) option is only required if the respective protocol is enabled.

## Rclone (Experimental)

To use simply place your rclone.conf file in the `/ssl/` share, these can be generated using the `rclone config` command on any computer running rclone, example shown below:

```ini
[backblaze]
type = b2
account = xxxxxxxxxx
key = xxxxxxxxxxx
```

### Options

|Parameter|Required|Description|
|---------|--------|-----------|
|`rclone_enabled`|Yes|Allows you to disable or enable the rclone function|
|`rclone_remote_host`|No*|The name of the remote specified in rsync.conf, example: `backblaze`|
|`rclone_copy`|No|Enables rclone copy mode|
|`rclone_sync`|No|Enables rclone sync mode|
|`rclone_restore`|No|Restores files in remote to a date stamped folder in `/backup/`|
|`rclone_remote_directory`|No*|The path of the remote directory which the add-on will save to, including bucket name if using a service like backblaze|
(*) option is only required if the respective protocol is enabled.

# Persistent Notification

In case of an error, a persistent notification with the error message is created. Please see the logs to find out what happend (you might also want to enable debugging in the configuration).

# Events

The add-on creates an event each time it is has been executed.

| Field        | Description                                  |
| ------------ | -------------------------------------------- |
| `event_type` | `remote_backup_status`                       |
| `result`     | Backup result status, can be `ok` or `error` |
| `message`    | Human readable message for the notification  |

See the [example automation](/docs/addons/remote-backup/blueprints-automations) on how to use.

