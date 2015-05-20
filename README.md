# &lt;twitter-post&gt;

## Demo

[Check it live!](http://danguilherme.github.io/twitter-post) _(Coming soon!)_

## Install

_Will be available on [Bower](http://bower.io/) soon._

[Download as ZIP](https://github.com/danguilherme/twitter-post/archive/vanilla.zip).

## Usage

1. Import polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import custom element:

    ```html
    <link rel="import" href="bower_components/danguilherme/twitter-post.html">
    ```

3. Start using it!

    ```html
    <twitter-post></twitter-post>
    ```

## Options

Attribute   	| Options	| Default   	| Description
---------------	| ---------	| -------------	| -----------
`widget-id` 	| *Number*	| `null`    	| The ID of the Twitter widget you wish to grab data from (check explanation on `master` branch on how to generate this number).
`max-tweets`	| *Number*	| `20`       	| The maximum number of tweets you want to show. Must be a number between `1` and `20`.
`no-link`     	| *Boolean*	| `false`    	| If this attribute is present, urls and hashtags will not be hyperlinked.
`hide-user` 	| *Boolean*	| `false`   	| If this attribute is present, user photo / name for tweet will not be shown.
`hide-time` 	| *Boolean*	| `false`   	| If this attribute is present, time of tweet will not be shown.
`show-retweets`	| *Boolean*	| `true`    	| If `false`, retweets will not be shown.
`no-interaction`| *Boolean*	| `true`    	| If this attribute is present, buttons for reply, retweet and favourite will not be available.
`images`    	| *Boolean*	| `false`    	| If this attribute is present, images from tweet will be loaded and shown.
`lang`      	| *String*	| `"en"`    	| The code of the language that text like "posted on" or "time ago" must be shown.


## Methods

Method      	| Parameters    	| Returns   	| Description
---------------	| -----------------	| -------------	| -----------

## Events

Event       	| Description
---------------	| -----------
`ontweetload`	| Triggers when tweet is loaded.
`ontweetrender`	| Triggers when tweet is rendered.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1. Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve):

    ```sh
    $ npm install -g bower polyserve
    ```

2. Install local dependencies:

    ```sh
    $ bower install
    ```

3. Start development server and open `http://localhost:8080/components/my-repo/`.

    ```sh
    $ polyserve
    ```

## License

[MIT License](http://opensource.org/licenses/MIT)
