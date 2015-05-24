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
`widget-id` 	| *Number*	| `null`    	| **[required]** The ID of the Twitter widget data will be retrieved from (follow [this guide](https://github.com/danguilherme/twitter-post/tree/master#how-to-create-a-widget-id) for how to generate this number).
`max-tweets`	| *Number*	| `20`       	| The maximum number of tweets that must be shown. Must be a number between `1` and `20`.
`no-link`     	| *Boolean*	| `false`    	| If this attribute is present, urls and hashtags will not be hyperlinked.
`hide-user` 	| *Boolean*	| `false`   	| If this attribute is present, user photo / name for tweet will not be shown.
`hide-time` 	| *Boolean*	| `false`   	| If this attribute is present, time of tweet will not be shown.
`hide-retweets`	| *Boolean*	| `false`    	| If this attribute is present, retweets will not be shown.
`hide-interaction`| *Boolean*	| `false`    	| If this attribute is present, buttons for reply, retweet and favourite will not be available.
`images`        | *Boolean* | `false`       | If this attribute is present, images from tweet will be loaded and shown.
`open-links-locally`| *Boolean* | `false`       | If this attribute is present, links' target will be the current tab.
`lang`      	| *String*	| `"en"`    	| The code of the language that text like "posted on" or "time ago" must be shown.
`no-permalink`        | *Boolean* | `false`       | If this attribute is present, permalink will not be added on tweet time. Note that removing tweet time (with `hide-time` attribute) the permalink will also be removed.


## Methods

Method      	| Parameters    	| Returns   	| Description
---------------	| -----------------	| -------------	| -----------

## Events

Event       	| Description
---------------	| -----------
`ontweetload`	| Triggers when tweet is loaded.
`ontweetrender`	| Triggers when tweet is rendered.

## License

[MIT License](http://opensource.org/licenses/MIT)
