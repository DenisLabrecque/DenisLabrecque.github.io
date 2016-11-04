---
layout: default
title: Blog

permalink: /blog
ref: blog
lang: en
date:   2016-11-04
lastmod: 2016-11-04
tags: blog
---
<div class="page-feed">
<h1>Blog</h1>
      <ul class="post-stream-container no-span">
            {% assign posts=site.posts | where:"lang", page.lang %}
            {% for post in site.categories.blog %}
            <li>
              <a href="{{ post.url | prepend: site.baseurl }}" class="post-stream-card">
                <img src=" {{ post.hero-image }}" />
                <div class="hero-article-headline">
                  <h4>{{ post.title }}</h4>
                  <h5>{{ post.subtitle }}</h5>
                  {{ post.headline }}
                </div>
              </a>
            </li>
            {% endfor %}
      </ul>
</div>
