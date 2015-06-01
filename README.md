Balihoo Style Library
=============

View the style library here: http://balihoo.github.io/style-library

### Compiled Styles

The compiled style sheets are available in the _build_ directory.

You can build your own version by cloning the repo, installing npm modules, and then running the gulp build command.

```
git clone https://github.com/balihoo/style-library.git
npm install
gulp build
```

### Running the documentation site locally

This site is build using [Jekyll](http://jekyllrb.com)

You can view this locally by installing Jekyll...

`gem install jekyll`

Then running the Jekyll server...

`jekyll serve --baseurl ''`

The --baseurl flag is necessary to for local testing.

The site will be available at 0.0.0.0:4000
