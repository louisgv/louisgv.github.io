---
layout: post
title: 'In the lab: install LMDE'
tagline: v0.0.9
date: '2015-08-16 17:35'
tags:
  - lmde
  - tutorial
categories:
  - linux
---

After my love letter to LMDE, here comes a tutorial which tell the world my way to install LMDE, which in my opinion, the way we've done it in the lab.

# Preparation

+ A laptop, desktop, pc or a vm. If you wanna try this with vm, have your virtual box up and make a simple linux vdi with 1 to 2GB of RAM and 10GB of memory.
+ LMDE iso which can be found [here](LMDE link). If using VM google for a tutorial on how to use the iso directly. If you do it with a real machine, your best bet is to make a bootable USB. For a bootable USB to install, on Windows use Universal Boot something. On Linux, dd.

# Partition

+ In the lab we have tons of data that need to be separated from the system, such that whenever the system broke down, the data still remain safe. Thus, knowing how to partition your drive in order to setup that schema is extremely important.

+ The way partition in a linux system work is by mounting it into the right path. Following are the important path that you should know:

```
  '/' : The root path. This should contains all the system stuff, such that the path be short and easy for the system to use.
  '/home' : The path where all your data should reside.
  '/tmp' : All the temporary files reside here.
  ---
  '/boot' : The boot path comprise your boot images (vid and img)
  '/boot/efi' : The efi software that take care of booting your system, call it the middle layer, boot layer.
  ---
  '/usr' : Any configuration and packages installed for the user reside here
  '/bin' : Most system program that the system depend on to bootup resides here
  '/usr/sbin' : Most program that only sudo user can use resides here
  '/usr/bin' : Programs that regular user can use is here
  '/etc' : system-wise setting for devices, programs, and so on resides here.

```

+ For performance in the web era, make your home directory double or at least equal to the size of your root partition. Installing outside library in your '/' only when it's related to the system, and you would be safe and sound. The best thing about this setup, is that all your work-related software are safe and sound even if the main system suddenly die because you tried to install glib and it outright kill your system right infront of your eye.

+ Installing rEFInd

# Customization

#
