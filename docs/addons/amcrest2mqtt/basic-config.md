---
title: "amcrest2mqtt: Configuration"
sidebar_label: "Basic Configuration"
---
# Basic Configuration

Use the button below to access the addon configuration page:

[![Open your Home Assistant instance and show the dashboard of a Supervisor add-on.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=3490a758_amcrest2mqtt-addon)

*If the above link does not work ensure you have completed the [Installation](/docs/installation)*

### Example Configuration

```yaml
amcrest_host: '192.168.0.x'
amcrest_port: '80'
amcrest_username: 'admin'
amcrest_password: 'my_super_secure_passw0rd'
storage_poll_interval: '3600'
device_name: ''
mqtt_host: ''
mqtt_qos: '0'
mqtt_port: '1883'
mqtt_username: ''
mqtt_password: ''
mqtt_tls_enabled: false
mqtt_tls_ca_cert: ''
mqtt_tls_cert: ''
mqtt_tls_key: ''
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
|`mqtt_username`|No|Username used by your MQTT broker (automatically configured if the MQTT addon is being used)|
|`mqtt_password`|No|Password used by your MQTT broker (automatically configured if the MQTT addon is being used)|
|`mqtt_host`|No|Hostname or IP address of your MQTT broker (automatically configured if the MQTT addon is being used)|
|`mqtt_qos`|No|Quality of service used by your MQTT broker (defaults to 0)|
|`mqtt_port`|No|Port used by your MQTT broker (defaults to 1883)|
|`mqtt_tls_enabled`|Yes|Set to true to enable TLS (defaults to false)|
|`mqtt_tls_ca_cert`|Required if using TLS|Path to the ca certs|
|`mqtt_tls_cert`|Required if using TLS|Path to the private cert|
|`mqtt_tls_key`|Required if using TLS|Path to the private key|
|`home_assistant`|No|Set to true to enable Home Assistant integration (defaults to true)|
|`home_assistant_prefix`|No|Prefix used by Home Assistant (defaults to 'homeassistant')|
|`storage_poll_interval`|No|How often to fetch storage data (in seconds) (defaults to 3600)|
|`device_name`|No|Override the default device name used in the Amcrest app|

For additional information please refer to the [amcrest2mqtt documentation](https://github.com/dchesterton/amcrest2mqtt).