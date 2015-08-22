---
layout: post
title: Up and Running with Jekyll, and Open Source
tagline: v0.0.9
description: Journey log on how this baby was constructed with custom theme, and the damn thing is responsive too!
photo_url: "http://farm8.staticflickr.com/7451/9254559408_c34e7b9304_c.jpg"
date: '2015-07-19 22:57'
tags:
  - Jekyll
  - GitHub
categories:
  - tut
---

# Why?
### Or the purpose.

//TODO: Explain there are two of them.

Static blog engine vs a server-client kind of stuff, where the client here is you (not the reader by the way), then you will be screwed the moment your connection, or cache is gone. Or, you just want jot stuffs down real quick.


```
  - For fun
  - Learnning experience
  - Future reference
```

For the past year I've been struggled with setting up a blog. The main reason, I'm a traveler. I'm on a bus 12/24. There is no connection whatsoever, but the crave to record what happened to me was tremendous.

I used to carry a big note pad to jot stuffs down, but eventually, it became too clunky to bring with me. Furthermore, sharing it with friends, is a pain.

Do I want a bloated engine like Wordpress? I chose not, because I know from my observation, there are way better alternative that has no string attached, which is always hidden under the label, "open source."

```
  Mine the open source for sauces
```

I've been a github user for some year (not yet a good community member tho...), and I've been tried to make my own blog engine using bash, which make me a new post everyday (a practice that stopped by the end of last year, due to some change in the structure). Also, I realized working on an HTML file... is a no-no. And I have been using markdown on Trello and other platform for quite sometime now...

Then Jekyll came to play.

# How?

### Or the process

Well, Jekyll was promoted by Github as the recommended blog engine, so there really isn't any story behidn how I met it.

Install Jekyll following github's guide:

```

```

Add the Jekyll Bootstrap (JB) layer

```

```

At first I thought I might just use one of the theme that JB offer. After fifteen minutes however, I decided to cook it up. The process:

+ Trace all the path to styles and templates (Using my eyes of course)
+ Tweak the config file
+ Realized that site is the pointer to the config file object, which allowing access to variables.
+ Looking for more example of blogs, and ~~steal their styles~~ get some inspiration.

Make sure the `\` matches. Else, nothing will come up.

By the way, one the same day a guy posted on HN a tutorial on how to setup a Jekyll blog, god bless the guy for being on the same day as me. I learned about Hugo. Thanks, HN

IMO, before one make a blog, think first **content**. What are you gonna put there? What do you want to share? If you've got nothing to write about, go out and experience life, tech, whatever, jot some note down, be wiser. Then, start a blog to show people how wise you are now would make the process more natural.

Now we got the engine, it runs and show the index with the archive template, bang, done! Now goes the content.

```
  Focus on the _drafts and the _posts
```

Having to locate those folder just to jot down a note into a draft, is a pain. That's why you should switch to Atom, and get the markdown writer from this guy:

Config it with the draft and post folder, and now sitdown and enjoy the power of automation.

```
  Make sure the dashes match.
```

Search for other people's blog using Jekyll. Tons of opensource documents are made with Jekyll as well! Shout out to Ionic and PouchDB


# Wut?
### Or the product

Fully customized jekyll blog

Current state of the blog is pretty cool. It is "licensed" under GPL, which, yes you are free to read, adapt, ~~or steal~~ the code, just make sure to make it open to other, so the knowledge does not get stuck under just a monkey brain.

One month from now, I'm probably gonna try Hugo. Haven't been using go for quite some month...
