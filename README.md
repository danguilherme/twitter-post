# twitter-post
Implementation of Jason Mayes' [Twitter-Post-Fetcher][1] as a web component, in [Vanilla JavaScript][2] and helper libraries ([X-Tags][3], [Polymer][4], [Bosonic][5]).
 
Check each implementation following the links bellow:
* [Vanilla](https://github.com/danguilherme/twitter-post/tree/vanilla)
* [X-Tags](https://github.com/danguilherme/twitter-post/tree/x-tags)
* [Polymer](https://github.com/danguilherme/twitter-post/tree/polymer)
* [Bosonic](https://github.com/danguilherme/twitter-post/tree/bosonic)

## How to create a `widget-id`
All elements will request an `widget-id`, used to retrieve the desired tweet(s) from Twitter. Here is a guide on how to generate this information:
1. Go to [Twitter][6] and sign in as normal.
2. Go to your settings page.
3. Go to "Widgets" on the left hand side.
4. Create a new widget for what you need (eg. "user time line", "search", etc).
    - Feel free to check "exclude replies" if you don't want replies in results.
5. Go back to settings page, and then go back to widgets page and you should see the widget you just created. Click edit.
6. Look at the URL in your web browser, you will see a long, such as `345735908357048478` - this is your `widget-id`!

[1]: https://github.com/jasonmayes/Twitter-Post-Fetcher
[2]: http://vanilla-js.com/
[3]: http://www.x-tags.org/
[4]: https://www.polymer-project.org/
[5]: http://bosonic.github.io/
[6]: https://twitter.com/ "Twitter"