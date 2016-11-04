---
layout: default
title: Artwork
subtitle: My artwork portfolio
hero-image: https://s-media-cache-ak0.pinimg.com/originals/10/21/2a/10212a15e3e139cad2071895224818da.jpg
headline: Here are my best pieces of artwork.
permalink: /artwork
ref: artwork
lang: en
date:   2016-11-04
lastmod: 2016-11-04
tags: artwork
---
<ul class="post-stream-container no-span">
      {% assign posts=site.posts | where:"lang", page.lang %}
      {% for post in site.categories.artwork %}
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
