# Blog and Personal Website of Nancy Wang

## Overview
This project is built using [Jekyll](https://jekyllrb.com) and [SCSS](https://sass-lang.com/).

## Build Instructions
First install a full Ruby development environment, then install Jekyll and bundler gems:
```sh
$ gem install jekyll bundler
```
Before serving the site locally, check that you have added the Ruby binary directory to your
path. Now you may serve the website locally using the command:
```sh
$ bundle exec jekyll serve
```

## Post Instructions
To add a new blog post or article, create a new markdown file and name it with the format:
`YEAR-MONTH-DAT-title.MARKUP`. For example: `2018-12-18-new-chapter-of-my-life.md`. Put this file
in the `_posts` directory in the repository. An example of a post may look like this:
```markdown
---
layout: post
title:  "New Chapter of My Life"
---

# Welcome

**Hello World!** Let's create history!
```
For more information on creating posts, visit the documentation webpage
[here](https://jekyllrb.com/docs/posts/).