---
title: "Remote Backup | Basic Configuration"
sidebar_label: "Basic Configuration"
---

# Basic Configuration

Use the button below to access the addon configuration page:

[![Open your Home Assistant instance and show the dashboard of a Supervisor add-on.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=3490a758_remote_backup)

*If the above link does not work ensure you have completed the [Installation](/docs/installation)*

### Example Configuration

```yaml
debug: false
ssh_enabled: true
friendly_name: true
custom_prefix: Automated backup
ssh_host: ip address
ssh_port: 22
ssh_user: username
ssh_key: keyfile
ssh_host_key_algorithms: ''
exclude_folders: 'media, backup'
exclude_addons: 'core_ssh, core_mosquitto'
remote_directory: /path/to/your/backup/dir
zip_password: ''
keep_local_backup: '3'
rsync_enabled: false
rsync_verbose: false
rsync_host: ''
rsync_rootfolder: hassio-sync
rsync_exclude: keyfile, .tdm, .cache, *.tar, home-assistant*.*, .mozilla, .vnc
rsync_user: ''
rsync_password: ''
```

### Options

|Parameter|Required|Description|
|---------|--------|-----------|
|`debug`|No|Allows you to disable or enable debug mode|
|`ssh_enabled`|No|Allows you to disable or enable the SSH function|
|`friendly_name`|Yes|Allows the snapshot to be renamed on the destination server to match the name in the Home Assistant UI|
|`custom_prefix`|Yes|Allows you to change the name prefixing the date of the snapshot, by default this is set to `Automated backup`|
|`ssh_host`|Yes|The hostname or IP address of the file server|
|`ssh_port`|Yes|The port used for `SCP`|
|`ssh_user`|Yes|The username used for `SCP`|
|`ssh_key`|Yes|The filename of the SSH key, this must be located in the `ssl` directory of Home Assistant which can be accessed through SAMBA under the share name `ssl`|
|`ssh_host_key_algorithms`|No|Used for enabling legacy algorithms|
|`exclude_folders`|No|A comma separated list of folders to exclude from the backup. Valid folders include: `addons/local homeassistant media share ssl`|
|`exclude_addons`|No|A comma separated list of addons to exclude from the backup, based on addon slug|
|`remote_directory`|Yes|The destination directory where the snapshots will be placed|
|`zip_password`|No|If set then the backup will be contained in a password protected zip file|
|`keep_local_backup`|No|Control how many local backups you want to preserve on the Home Assistant host. The default (`""`) is to keep no local backups created from this addon. To keep all backups set this to `all` then all local backups will be preserved. This can also be set with a number to preserve only the specified amount|
|`rsync_enabled`|No|Allows you to enable or disable the rsync function|
|`rsync_verbose`|No|Allows you to enable or disable the verbose output of the rsync function|
|`rsync_host`|No|The hostname or IP address of the file server|
|`rsync_rootfolder`|No|The root folder of the rsync server|
|`rsync_exclude`|No|A comma separated list of files or folders to exclude from the rsync transfer|
|`rsync_user`|No|The username used for `rsync`|
|`rsync_password`|No|The password used for `rsync`|

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
|`rclone_enabled`|No|Allows you to disable or enable the rclone function|
|`rclone_copy`|No|Enables rclone copy mode|
|`rclone_sync`|No|Enables rclone sync mode|
|`rclone_restore`|No|Restores files in remote to a date stamped folder in `/backup/`|
|`rclone_remote`|Yes|The name of the remote specified in rsync.conf, example: `backblaze`|
|`rclone_remote_directory`|Yes|The path of the remote directory which the addon will save to, including bucket name if using a service like backblaze|