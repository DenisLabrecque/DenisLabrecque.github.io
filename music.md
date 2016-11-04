---
layout: default
title: Music

permalink: /music
ref: bibletalk
lang: en
date:   2016-11-04
lastmod: 2016-11-04
tags: music
---
<div class="page-feed">
<h1>Music</h1>

    <ul class="post-stream-container no-span">
      {% assign posts = site.posts | where:"lang", page.lang %}
      {% for post in site.categories.music %}
      <li>
        <a href="{{ post.url | prepend: site.baseurl }}" class="post-stream-card">
          <div class="music-article-thumbnail"
               style="background-image: url( {{ post.hero-image }} )">
          </div><div class="hero-article-headline music">
            <h4>{{ post.title }}</h4>
            <h5>{{ post.subtitle }}</h5>
          </div>
          <!--<div class="music-movements">
              
          </div>-->
        </a>
      </li>
      {% endfor %}
    </ul>
</div>
