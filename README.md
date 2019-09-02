# Blog and Personal Website of Nancy Wang

## Overview
This project is built using [Jekyll](https://jekyllrb.com) and [SCSS](https://sass-lang.com/).

## Build Instructions
First install a full Ruby development environment. Make sure that your Ruby version is greater
than or equal to 2.4 since this is required for Bundle to be installed. You may check your Ruby
version using the command `ruby -v`.
Now you may install Jekyll and bundler gems:
```sh
$ gem install jekyll bundler
```
Once you have installed this without errors, you need to install the required `gems` for the
project:
```sh
$ bundle install
```
Now we may serve the site locally:
```sh
$ bundle exec jekyll serve
```
Note that the site will update as you make changes.
You may push your changes to Github, and the site will automatically update.

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