---
title: Extensibility
category: product info
date: 2025-03-31
author: Phil Heijkoop
authorImage: /profile-phil.jpg
excerpt: Explaining the extensibility of Mokkapi
---

# Extensibility by Design

Mokkapi was built with extensibility in mind. There are three ways we allowed for. 

Building on top of Django means we can offer a series of officially supported optional apps that can be imported as desired. We would love to see community versions pop up as well! 

We release the source code, with documentation, so any of our end users can customize elements of the core experience as they like. While this may make updating in future potentially a bit more cumbersome, it is entirely up to our users if they want to do this.

Finally, we believe the current format of Mokkapi allows for a slightly modified architecture for building upon. With the thinnest possible backend, you have a more flexible backend to use across projects as desired. So while it isn't intended for production use in large-scale applications, there are many ways to use it as a production backend (as you'll see in our examples section).