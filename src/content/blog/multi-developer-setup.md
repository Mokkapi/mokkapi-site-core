---
title: Multi Developer Setup
category: Tips & Tricks
date: 2025-03-31
author: Phil Heijkoop
authorImage: /profile-phil.jpg
excerpt: Discover how to use Mokkapi to expand and standardize your development team's efficiency.
---

# Multi Developer Setup

Mokkapi is a dockerized tool and with a single license, you can provision as many Mokkapi instances for your developers as you'd like. This can be for individuals, as well as by team.

We know many developers have a whole host of tools available to them, and internal platform teams can make it easy to deploy multiple copies of these tools. Mokkapi is no exception. It is possible to update the deployment of a single Mokkapi instance to work off any base url (whether mokkapi.acme.com/ or something like devtools.acme.com/other/mokkapi/<user>), use a SQLite backend and load it with useful data.

## Loading extra data

One thing that is particularly helpful for junior developers, but this applies to any new developer to a team, is to know what microservices the team builds with. Creating a Mokkapi library that comes preloaded can help with this by making it all accessible in one place. Similary, any developer can work locally without affecting production instances. 

## Best Practices For Path organization

While there is no required way to organize your paths and data, if you use the tool extensibly, you will likely want to follow a few conventions.

1. Copy as much of the third party path as possible. For example, if you use a series of endpoints that all live in `/api/v2/producty/servicex/library/option`, use all those path breaks. 
2. Prefix any paths with logical and consistent names. For example `prime.mokkapi.com/external/license/validation/userid/<id>` is where most commercial instances will check their license status. Similarly, you could use `mokkapi.acme.com/internal/productY/v1/` as a prefix for all endpoints you would use internally for product Y. 
3. Document your path logic somewhere. Even if you aren't sharing a mokkapi instance with others, you will want to have a predictable structure so you don't need to reference the endpoints page more than needed. 