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
      if (!input.checked)
        dynamicTwitterPost.removeAttribute(var2attr(input.name));
      else
        dynamicTwitterPost.setAttribute(var2attr(input.name), input.checked);
    } else {
      dynamicTwitterPost.setAttribute(var2attr(input.name), input.value);
    }
    
    dynamicTwitterPost.fetchTweets();

    updateUrl();
    updateDynamicTweetCode();
  }, true);

  // initial config
  fillFormFromQueryString();

  window.addEventListener('HTMLImportsLoaded', function(e) {
    dynamicTwitterPost.setWidgetId(dynamicTweetConfig.widgetId.value);
    dynamicTwitterPost.setMaxTweets(dynamicTweetConfig.maxTweets.value);
    dynamicTwitterPost.setHideLinks(dynamicTweetConfig.noLink.checked);
    dynamicTwitterPost.setHideUser(dynamicTweetConfig.hideUser.checked);
    dynamicTwitterPost.setHideTime(dynamicTweetConfig.hideTime.checked);
    dynamicTwitterPost.setHideRetweets(dynamicTweetConfig.hideRetweets.checked);
    dynamicTwitterPost.setHideInteraction(dynamicTweetConfig.hideInteraction.checked);
    dynamicTwitterPost.setShowImages(dynamicTweetConfig.images.checked);
    dynamicTwitterPost.setOpenLinksLocally(dynamicTweetConfig.openLinksLocally.checked);
    dynamicTwitterPost.setLanguage(dynamicTweetConfig.lang.value);
    dynamicTwitterPost.setHidePermalink(dynamicTweetConfig.noPermalink.checked);
    dynamicTwitterPost.fetchTweets();

    updateDynamicTweetCode();
  });
})(window, window.document);