## Usage
Instalar

``` bash
$ yarn
```

- `yarn dev`
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `yarn build`
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.

## Other tools ##
For quickly scaffolding components, pages, layouts and more, install the [Vueture CLI tool](https://github.com/vueture/vueture-cli).
``` bash
$ npm install -g vueture-cli
```

### main.js ###
This file will load your single page application.
It is also the entry point which will be loaded and compiled using webpack.

### app/index.vue ###
The main Vue file.
This file will load the page inside the `router-view`-component.
It will check if the user is authenticated and load the resources accordingly.

## Structure ##
Inside the `src/app`-directory, are a couple directories that needs to be addressed:

### Components ###
Your components will be placed inside this directory.
As you can see, this boilerplate already comes shipped with an pre-made panel component.

### Layouts ###
Your layout files will be placed inside this directory.
When you are building a large single page application, you will be using different layouts.
For instance, your login-page or register-page will have a different layout than your account-page.

The boilerplate comes out of the box with two layouts included.
A minimal layout, used for the login and register page, and a default layout.
Used for the home and account page.

### Mixins ###
The mixins you want to use with Vue will be placed inside this directory.

Inside the mixins directory is a `slot`-mixin.
This mixin will add the `hasSlot()`-method to all the components it is used in.

### Pages ###
The pages/views are placed inside this directory.
By default it comes with an `account/index`, `home/index`, `login/index` and a `register/index` page,
but feel free to add more.

### Services ###
You can compare services with controllers.
They connect with external services, like an API, and call actions on the store.
Normally you would perform AJAX-requests from the services, but to get the example working, the data is hardcoded.

### Store ###
As mentioned before, Vuex is used as a single point of truth.
To learn more about Vuex, visit the [documentation](http://vuex.vuejs.org)

### Transformers ###
Transformers are used to transform the incoming and outgoing requests.
If you have an API where you can retrieve posts from, a post wil look something like this:
``` JSON
{
  "id" : 1,
  "title" : "Hello World!",
  "content" : "Lorem Ipsum",
  "created_at" : "today"
}
```
However, it feels weird to use snake_cased variables inside your camelCased application.
This is where transformers come in.
So given the previous example, using a transformer, it will look something like this:
``` JSON
{
  "id" : 1,
  "title" : "Hello World!",
  "content" : "Lorem Ipsum",
  "createdAt" : "today"
}
```

### Utils ###
Last but not least we get an `utils`-directory.
Here you can place handy utils you want to use inside your application.
Out of the box it comes with a `loader`-util which will prevent the relative directory hell.

## TODO

 - Form Validation
 - Notify
 - Moment
 - Bootstrap
