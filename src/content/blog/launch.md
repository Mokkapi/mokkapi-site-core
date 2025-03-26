---
title: Launch
category: announcement
date: 2025-03-31
author: Phil Heijkoop
authorImage: /profile-phil.jpg
excerpt: Announcing Mokkapi to the world!
---

# Hello World!

Introducing Mokkapi. A simple backend with no business logic inherent, just a simple path and JSON response. Using our demo environment, you can see that in the app you can create an endpoint (which extends the base URL, in this case demo.mokkapi.com), and the JSON response you want to see that endpoint return. That's it!

The goal is to make development and testing easier. Whether you're working off a third party system or dependent on one that is still in development, this allows you work on all your application logic without relying on the other endpoint to be stable, updated, or even available. This is especially useful if you want to work off of an endpoint that has rate limits or prototyping against extra payload data. 

## Installation

Getting set up is easy. The entire application is dockerized and open source. See our Github repository. We have a core version in the main branch and we intend to release a few other versions with tags as their demand becomes apparent. 

## License

Our license is inspired by the Jira Server perpetual license, with maintenance and support as part of the ongoing yearly renewals. Read more on our ![pricing](pricing page). We are launching just ahead of Q2 of calendar 2025 (no, not an April fool's joke!) and for the first quarter we are going to be gathering customer feedback, adjusting our roadmap, and offering 50% off for life to any people who purchase a commercial license in that period.

## Use Cases and Limitations

We wanted to make the tool as simple as possible, so a core value proposition is about rapidly putting together any backend you may want to develop off of. We will be expanding the tool's capabilities according to our roadmap and publishing use cases as we document them. The tool is quite flexible so we are open to PRs, user customization, and unique use cases. 

Mokkapi is a Django project, and for predictability reasons the main release will be updating only the core, user-management, and analytics apps. 

Our database is PostgreSQL v16, and takes advantage of the JSONField. So we assume the limit per JSON is roughly 255MB. Given the use cases of Mokkapi, we currently don't expect that to be a reaosnable limit anyone will bump into, but if you have a use case that does please let us know!