;(function(window, document, undefined) {
  function var2attr(attributeName) {
    var UPPER_CASE_LETTERS_REGEXP = /([A-Z])/g;

    return attributeName.
      replace(UPPER_CASE_LETTERS_REGEXP, function (_, letter, offset) {
        return offset ? '-' + letter.toLowerCase() : letter;
      });
  }

  function fillFormFromQueryString() {
    //grab the entire query string
    var query = document.location.search.replace('?', '');
    if (!query) return;

    //extract each field/value pair
    query = query.split('&');

    //run through each pair
    for (var i = 0; i < query.length; i++) {
      //split up the field/value pair into an array
      var field = query[i].split("=");

      //target the field and assign its value
      var input = document.querySelector("input[name='" + field[0] + "']");
      if (input.type === 'checkbox')
        input.checked = field[1] === 'true';
      else
        input.value = field[1];
    }
  }

  var form = document.querySelector('form');
  var dynamicTwitterPost = document.querySelector('#dynamic');

  function updateUrl() {
    var url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?';
    var query = '';

    var formFields = document.querySelectorAll('input[name]') ;

    //run through each pair
    for (var i = 0; i < formFields.length; i++) {
      var input = formFields[i];
      if (!!query)
        query += '&';

      query += input.name + '=' + (input.type === 'checkbox' ? input.checked : input.value);
    }

    history.pushState(null, '', url + query);

    return false;
  }

  function updateDynamicTweetCode() {
    var code = document.getElementById('dynamic-twitter-post-code');
    code.innerText = dynamicTwitterPost.outerHTML;
  }

  form.addEventListener('change', function(e) {
    var input = e.target;
    var value = input.value;

    if (input.type === 'checkbox') {
        dynamicTwitterPost[input.name] = input.checked;
    } else {
      dynamicTwitterPost[input.name] = input.value;
    }

    dynamicTwitterPost.fetchTweets();

    updateUrl();
    updateDynamicTweetCode();
  }, true);

  // initial config
  fillFormFromQueryString();

  window.addEventListener('HTMLImportsLoaded', function(e) {
    dynamicTwitterPost.widgetId = dynamicTweetConfig.widgetId.value;
    dynamicTwitterPost.maxTweets = dynamicTweetConfig.maxTweets.value;
    dynamicTwitterPost.noPermalinks = dynamicTweetConfig.noLink.checked;
    dynamicTwitterPost.hideUser = dynamicTweetConfig.hideUser.checked;
    dynamicTwitterPost.hideTime = dynamicTweetConfig.hideTime.checked;
    dynamicTwitterPost.hideRetweets = dynamicTweetConfig.hideRetweets.checked;
    dynamicTwitterPost.hideInteraction = dynamicTweetConfig.hideInteraction.checked;
    dynamicTwitterPost.images = dynamicTweetConfig.images.checked;
    dynamicTwitterPost.openLinksLocally = dynamicTweetConfig.openLinksLocally.checked;
    dynamicTwitterPost.lang = dynamicTweetConfig.lang.value;
    dynamicTwitterPost.noPermalink = dynamicTweetConfig.noPermalink.checked;

    dynamicTwitterPost.fetchTweets();

    updateDynamicTweetCode();
  });
})(window, window.document);
