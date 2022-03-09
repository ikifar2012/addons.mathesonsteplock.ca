---
title: "amcrest2mqtt | Basic Configuration"
sidebar_label: "Basic Configuration"
---
# Basic Configuration

Use the button below to access the addon configuration page:

[![Open your Home Assistant instance and show the dashboard of a Supervisor add-on.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=3490a758_amcrest2mqtt-addon)

*If the above link does not work ensure you have completed the [Installation](/docs/installation)*

### Example Configuration

Please note the amcrest2mqtt add-on requires the MQTT broker add-on to be installed.

```yaml
amcrest_host: '192.168.0.x'
amcrest_port: '80'
amcrest_username: 'admin'
amcrest_password: 'my_super_secure_passw0rd'
storage_poll_interval: '3600'
device_name: ''
home_assistant: true
home_assistant_prefix: ''
```

### Options

|Parameter|Required|Description|
|---------|--------|-----------|
|`amcrest_host`|Yes|IP address of your Amcrest device|
|`amcrest_port`|No|Port used by your Amcrest device (defaults to 80)|
|`amcrest_username`|No|Username used by your Amcrest device (defaults to admin)|
|`amcrest_password`|Yes|Password used by your Amcrest device|
|`home_assistant`|No|Set to true to enable Home Assistant integration (defaults to true)|
|`home_assistant_prefix`|No|Prefix used by Home Assistant (defaults to 'homeassistant')|
|`storage_poll_interval`|No|How often to fetch storage data (in seconds) (defaults to 3600)|
|`device_name`|No|Override the default device name used in the Amcrest app|

For additional information please refer to the [amcrest2mqtt documentation](https://github.com/dchesterton/amcrest2mqtt).