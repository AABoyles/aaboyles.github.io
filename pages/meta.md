# Meta

## Inspiration

This site is largely inspired by [gwern.net](https://gwern.net/), though it doesn't share any code with it.[I considered forking it, but I would take awhile to get up to speed in Haskell and <a href="https://github.com/gwern/gwern.net">Gwern's repository is enormous</a>](sidenote) Instead, it's based on an original markdown site generator called [`uncompiled`](/uncompiled/).[I created it essentially just to make this site.](sidenote)

I've also taken some inspiration from [jefftk.com](https://www.jefftk.com/), [Daring Fireball](https://daringfireball.net/), [coding horror](https://blog.codinghorror.com/), though I struggle to point to any specific feature in any of them I'm attempting to replicate.

Besides Edward Tufte, I've also been heavily influenced by [Butterick's Practical Typography](https://practicaltypography.com/).

## Design

The idea behind `uncompiled` was to be able to write markdown and see it as a Tufte-CSS compatible HTML document without compiling it. This seemed reasonable, given how easy it is to transform markdown into html on the browser. To accomplish this, I started by [extending the showdown markdown compiler](https://github.com/showdownjs/showdown/wiki/extensions) to add the extra tags expected by Tufte-CSS for a well-formatted document. Then I added more extensions to enable a syntax for side- and margin- notes. Around this point, I realized that these should be organized as a single showdown extension for Tufte-CSS, and [showdown-tufte](https://www.npmjs.com/package/showdown-tufte) was born.

So, the `uncomiled` workflow is:

1. Figure out which markdown page to load. It checks the `q` GET parameter, and defaults to loading `README.md`.
2. Download that markdown file as a Fetch request.
3. Transform the Markdown to Tufte-CSS compatible HTML.
4. Append that HTML to the page's `article` tag.
5. Scrape the HTML for headers, set the page title, and assemble the table of contents.

## Layout

The layout is adapted from [Tufte-CSS](https://edwardtufte.github.io/tufte-css/), a CSS library designed to enable websites to leverage Edward Tufte's iconic sidenote handout format.

It leverages [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for cross-browser consistency and certain features:

* the [navbar](https://getbootstrap.com/docs/5.0/components/navbar/) at the top of each page, which collapses to a button in mobile browsers.
* the table of contents floating on the left side of the screen, which is a [Scrollspy](https://getbootstrap.com/docs/5.0/components/scrollspy/).

## Analytics

The site leverages [Clicky for web analytics](http://clicky.com/101295571).

## Expenses

This is freely hosted by Github Pages. As in most static site generators, that's a big part of the point.

I pay $20 per year for the `boyles.cc` domain name, but wherever possible I write canonical links as [aaboyles.github.io](https://aaboyles.github.io/) instead of [anthony.boyles.cc](https://anthony.boyles.cc/) in case I ever decide not to renew my ownership. [Google Domains](https://domains.google/) is the registrar.

## Income

This is not a recommendation blog, or anything approximating it. If I'm describing a commodity, it's because I'm familiar enough with it to have an opinion about it, not because I want to drive monetized traffic. That said, I may occasionally post affiliate links *without noting that they are affiliate links*. In the exceedingly unlikely case that you spend some money as a direct result of something I say here, I may receive a very small portion of that money. My apologies if this offends you.
