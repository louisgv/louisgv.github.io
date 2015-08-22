---
layout: post
title: 'Sears Retail Hackathon Log'
tagline: 'revolutiono...'
date: '2015-08-22 10:59'
tags:
  - hack-a-thon
  - api-taste-test
categories:
  - logging
---

# Product

[final build][47e18354]

  [47e18354]: http://jabsquared.github.io/sears-hack

```
  http://jabsquared.github.io/sears-hack
```

# Team

![jabSquared](/www/img/2015/08/jabSquared.png)

# Brainstorms

+ Up-sale per support
+ Upgrade tracker, new product
+ webRTC for appliance, support and retails
+ Social network between client and technicians

# Hack

+ In charge of webRTC module and its integration on Cordova/Ionic.
+ After a brief chat with [Apptentive](http://apptentive.com/), seems like it does not support video.
+ Defined two route: direct camera or webRTC. Will experiment on the first route due to prior webRTC experience. Hack == Learn.

#### 2PM
+ [Cordova Camera Plugin](https://github.com/apache/cordova-plugin-camera)
```  
  |---> Need to implement streaming service.
    \---> Doc was scarce
      \---> Drop.
```

#### 4PM
+ [ngCordova Camera Plugin](http://ngcordova.com/docs/plugins/camera/)
```  
  |---> Easy to plug into Ionic
    \---> Still need to implement streaming service
      \---> Drop.
```

#### 6PM
+ [Camera Server plugin from Moonshot](https://github.com/Moonware/cordova-cameraserver)
```  
  |---> Worked
    \---> Slow
      \---> Streaming is complicated to configure
        \---> Drop.
```

#### 8PM
+ Walk

#### 9PM
+ Decision: full force with webRTC
+ [SimpleRTC][2c2eac65]
```
  |---> Easy Doc
    \---> Success with browser-to-browser
      \---> Needed Chrome power (Using its webRTC component)
        |---> Using Crosswalk
        |---> For a Hackathon?
      /---> Decided to run `ionic address` and expose the app. The demo will be run on mobile's browser.
      |---> Using Chrome on android, webRTC worked.
        \---> Issue: Switching between camera
          \---> Device list got
          /---> Device does not apply on device?
        /---> Tried the desparate approach of using directID
        \---> Worked somehow, but the startup is slow.
          \---> Merge back to master
```

#### 6AM
+ Walk

#### 8AM
+ Help teammates with front-end

```
  |---> Added responsive to some elements.
    \---> Use `vw` and `vh`
  |---> Added standard usage of ionic classes on all pages
```

#### 9AM
+ Merge projects and publish final build
+ Prepare the pitch with eagle

#### 12PM
+ Presentation...

  [2c2eac65]: http://simplewebrtc.com/ "SimpleRTC"
