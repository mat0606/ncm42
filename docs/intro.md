---
description: Create a doc page with rich content.
---
# Getting Started {#getting_started}

Welcome to the NCM Self Service Workshop.


## Agenda

- NCM Self Service 101

## Initial Setup

- Take note of the *Passwords* being used from you RX reservation details
- Log into your virtual desktops (connection info below)
- Login to Global Protect VPN if you have access

## Cluster Assignment

The instructor will inform the attendees their assigned clusters.

## Environment Details

Nutanix Workshops are intended to be run in the Nutanix Hosted POC environment. Your cluster will be provisioned with all necessary images,networks, and VMs required to complete the exercises.

#### Three/Four node HPOC clusters

Three or four node Hosted POC clusters follow a standard naming convention depending on where it is based. 

For example for PHX based clusters

- **Cluster Name** - PHX-POC024
- **Subnet** - 10.42.24.0
- **Cluster IP** - 10.42.24.37 for the VIP of the Cluster

For example for DM3 based clusters

- **Cluster Name** - DM3-POC024
- **Subnet** - 10.55.24.0
- **Cluster IP** - 10.55.24.37 for the VIP of the Cluster

Each cluster is configured with 2 VLANs which can be used for VMs:


|Network Name        | Address             | VLAN    | DHCP Scope |
|------------------- | ------------------- |-------- | -----------|
|Primary_xx          | 10.*ABC*.*XYZ*.1/25    | 0       | 10.*ABC*.*XYZ*.40-10.*ABC*.*XYZ*.99|
|Secondary_xx        | 10.*ABC*.*XYZ*.129/25  | *XYZ1*  | 10.*ABC*.*XYZ*.140-10.*ABC*.*XYZ*.250|

### Credentials

:::note

The *Cluster Password* is unique to each cluster and will be provided by the leader of the Workshop.

:::

### Active Directory

The AD services for the **NTNXLAB1.local** domain. The domain is populated with the following Users and Groups.  Replace XYZ with the username and password provided by the leader of the workshop


| Group                 | Role                   | Username(s)         |
|-----------------------| ---------------------------------------------|
| SSPAdmin              | Self-Service Admin     | sspXYZadmin         | 
| SSPProjectAdmin       | Project Admin          | tenantXYZprojadmin  | 
| SSPDeveloper          | Consumer               | tenantXYZdeveloper  | 
| SSPBPDeveloper        | Developer              | tenantXYZBPdeveloper|


## Access Instructions

The Nutanix Hosted POC environment can be accessed a number of different ways:

### Lab Access User Credentials

PHX Based Clusters: 

- **Username:** PHX-POCxxx-User01 (up to PHX-POCxxx-User20), 
- **Password:** *Provided by Instructor*

DM3 Based Clusters: 

- **Username:** DM3-POCxxx-User01 (up to DM3-POCxxx-User20), 
- **Password:** *Provided by Instructor*

### Parallels VDI

PHX Based Clusters Login to: https://xld-uswest1.nutanix.com

DM3 Based Clusters Login to: https://dm3-ras.xlabs.nutanix.com

**Nutanix Employees** - Use your **NUTANIXDC** credentials
**Non-Employees** - Use **Lab Access User** Credentials
