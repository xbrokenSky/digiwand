/* JS Document 
Version: 1.2
CreatData:2018/7/6
Author: MingShined
Statement:转载请注明出处,祝大家使用愉快.有什么问题欢迎交流，个人QQ:996578843
		  增加新参数hover 优化代码
*/
$.fn.myscroll=function(opations){var defaults={picEl:this.find("div").first(),ctrlEl:this.find("div").last(),libs:true,arrows:true,autoPlay:true,time:2000,effect:"left",speed:400,hover:true};var settings=$.extend(defaults,opations);var _this=this;return function(){var $timer=null;var $index=0;var $over=true;var $moveWrap=settings.picEl.find("ul");var $moveWrapChild=$moveWrap.children("li");var $moveVal=0;var $maxNum=$moveWrap.children("li").length;var $oCtrl=settings.ctrlEl;var $libsHtml="";var $arrowsHtml="";var $oLibs={};var $effect=settings.effect;var $moveArgs1={};var $moveArgs2={};var $moveArgs3={};var $autoPlay=settings.autoPlay;var $playTime=settings.time;var $playSpeed=settings.speed;var $isLibs=settings.libs;var $isArrows=settings.arrows;var $hover=settings.hover;(function(){$isLibs&&creatLibs();$isArrows&&creatArrows();$autoPlay&&autoPlay();handleEffect()})();function handleEffect(){if($effect=="left"){handleEffectEvent("width",true)}else{if($effect=="top"){handleEffectEvent("height",false)}else{$moveArgs1={"opacity":0};$moveArgs2={"opacity":1};initAllLi();picFadeChange()}}}function creatLibs(){for(var i=0;i<$maxNum;i++){$libsHtml+='<span class="libs lib'+(i+1)+'" data-value="'+i+'"></span>'}$oCtrl.append($libsHtml);$oLibs=$oCtrl.children(".libs");$oLibs.first().addClass("active")}function creatArrows(){var $arrowsHtml='<span class="arrow prev"><</span><span class="arrow next">></span>';$oCtrl.append($arrowsHtml);$hover&&_this.find(".arrow").css("display","none")}function handleEffectEvent(attr,moveAttr){$moveVal=attr==="width"?$moveWrap.children("li").find("img").width():$moveWrap.children("li").find("img").height();if(moveAttr){$moveArgs1={left:$moveVal};$moveArgs2={left:-$moveVal};$moveArgs3={left:0}}else{$moveArgs1={top:$moveVal};$moveArgs2={top:-$moveVal};$moveArgs3={top:0}}initAllLi();picMoveChange()}function initAllLi(){$moveWrapChild.each(function(index,el){if(index>0){$(el).css($moveArgs1)}})}function picMoveChange(){$oCtrl.on("click","span",function(){if($(this).attr("class")=="arrow prev"){if($over){$moveWrapChild.eq($index).stop().animate($moveArgs1,$playSpeed);--$index;$index<0?$index=$maxNum-1:$index;$moveWrapChild.eq($index).css($moveArgs2).stop().animate($moveArgs3,$playSpeed,function(){overFunc(true)});if($isLibs){libsChange($index)}}overFunc(false)}else{if($(this).attr("class")=="arrow next"){if($over){moveNext()}overFunc(false)}else{if($over){var $that=$(this).attr("data-value");if($that>$index){$moveWrapChild.eq($index).stop().animate($moveArgs2,$playSpeed);$moveWrapChild.eq($that).css($moveArgs1)}else{if($that<$index){$moveWrapChild.eq($index).stop().animate($moveArgs1,$playSpeed);$moveWrapChild.eq($that).css($moveArgs2)}}$index=$that;$moveWrapChild.eq($index).stop().animate($moveArgs3,$playSpeed,function(){overFunc(true)});if($isLibs){libsChange($index)}}overFunc(false)}}})}function picFadeChange(){$oCtrl.on("click","span",function(event){if($(this).attr("class")=="arrow prev"){if($over){$moveWrapChild.eq($index).stop().animate($moveArgs1,$playSpeed);--$index;$index<0?$index=$maxNum-1:$index;$moveWrapChild.eq($index).stop().animate($moveArgs2,$playSpeed,function(){overFunc(true)});if($isLibs){libsChange($index)}}overFunc(false)}else{if($(this).attr("class")=="arrow next"){if($over){fadeNext()}overFunc(false)}else{if($over){var $that=$(this).attr("data-value");if($that>$index){$moveWrapChild.eq($index).stop().animate($moveArgs1,$playSpeed)}else{if($that<$index){$moveWrapChild.eq($index).stop().animate($moveArgs1,$playSpeed)}}$index=$that;$moveWrapChild.eq($index).stop().animate($moveArgs2,$playSpeed,function(){overFunc(true)});if($isLibs){libsChange($index)}}overFunc(false)}}})}function autoPlay(){clearInterval($timer);$timer=setInterval(function(){if($effect=="fade"){fadeNext()}else{moveNext()}},$playTime)}_this.hover(function(){clearInterval($timer);$hover&&_this.find(".arrow").show()},function(){clearInterval($timer);if($autoPlay){autoPlay()}$hover&&_this.find(".arrow").hide()});function moveNext(){$moveWrapChild.eq($index).stop().animate($moveArgs2,$playSpeed);++$index;$index%=$maxNum;$moveWrapChild.eq($index).css($moveArgs1).stop().animate($moveArgs3,$playSpeed,function(){overFunc(true)});if($isLibs){libsChange($index)}}function fadeNext(){$moveWrapChild.eq($index).stop().animate($moveArgs1,$playSpeed);++$index;$index%=$maxNum;$moveWrapChild.eq($index).stop().animate($moveArgs2,$playSpeed,function(){overFunc(true)});if($isLibs){libsChange($index)}}function libsChange(val){$oLibs.removeClass("active").eq(val).addClass("active")}function overFunc(val){$over=val}}(jQuery)};
!(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], function($) {
      return factory(root, $);
    });
  } else if (typeof exports === 'object') {
    factory(root, require('jquery'));
  } else {
    factory(root, root.jQuery || root.Zepto);
  }
})(this, function(global, $) {

  'use strict';

  /**
   * Name of the plugin
   * @private
   * @const
   * @type {String}
   */
  var PLUGIN_NAME = 'remodal';

  /**
   * Namespace for CSS and events
   * @private
   * @const
   * @type {String}
   */
  var NAMESPACE = global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.NAMESPACE || PLUGIN_NAME;

  /**
   * Animationstart event with vendor prefixes
   * @private
   * @const
   * @type {String}
   */
  var ANIMATIONSTART_EVENTS = $.map(
    ['animationstart', 'webkitAnimationStart', 'MSAnimationStart', 'oAnimationStart'],

    function(eventName) {
      return eventName + '.' + NAMESPACE;
    }

  ).join(' ');

  /**
   * Animationend event with vendor prefixes
   * @private
   * @const
   * @type {String}
   */
  var ANIMATIONEND_EVENTS = $.map(
    ['animationend', 'webkitAnimationEnd', 'MSAnimationEnd', 'oAnimationEnd'],

    function(eventName) {
      return eventName + '.' + NAMESPACE;
    }

  ).join(' ');

  /**
   * Default settings
   * @private
   * @const
   * @type {Object}
   */
  var DEFAULTS = $.extend({
    hashTracking: true,
    closeOnConfirm: true,
    closeOnCancel: true,
    closeOnEscape: true,
    closeOnOutsideClick: true,
    modifier: '',
    appendTo: null
  }, global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.DEFAULTS);

  /**
   * States of the Remodal
   * @private
   * @const
   * @enum {String}
   */
  var STATES = {
    CLOSING: 'closing',
    CLOSED: 'closed',
    OPENING: 'opening',
    OPENED: 'opened'
  };

  /**
   * Reasons of the state change.
   * @private
   * @const
   * @enum {String}
   */
  var STATE_CHANGE_REASONS = {
    CONFIRMATION: 'confirmation',
    CANCELLATION: 'cancellation'
  };

  /**
   * Is animation supported?
   * @private
   * @const
   * @type {Boolean}
   */
  var IS_ANIMATION = (function() {
    var style = document.createElement('div').style;

    return style.animationName !== undefined ||
      style.WebkitAnimationName !== undefined ||
      style.MozAnimationName !== undefined ||
      style.msAnimationName !== undefined ||
      style.OAnimationName !== undefined;
  })();

  /**
   * Is iOS?
   * @private
   * @const
   * @type {Boolean}
   */
  var IS_IOS = /iPad|iPhone|iPod/.test(navigator.platform);

  /**
   * Current modal
   * @private
   * @type {Remodal}
   */
  var current;

  /**
   * Scrollbar position
   * @private
   * @type {Number}
   */
  var scrollTop;

  /**
   * Returns an animation duration
   * @private
   * @param {jQuery} $elem
   * @returns {Number}
   */
  function getAnimationDuration($elem) {
    if (
      IS_ANIMATION &&
      $elem.css('animation-name') === 'none' &&
      $elem.css('-webkit-animation-name') === 'none' &&
      $elem.css('-moz-animation-name') === 'none' &&
      $elem.css('-o-animation-name') === 'none' &&
      $elem.css('-ms-animation-name') === 'none'
    ) {
      return 0;
    }

    var duration = $elem.css('animation-duration') ||
      $elem.css('-webkit-animation-duration') ||
      $elem.css('-moz-animation-duration') ||
      $elem.css('-o-animation-duration') ||
      $elem.css('-ms-animation-duration') ||
      '0s';

    var delay = $elem.css('animation-delay') ||
      $elem.css('-webkit-animation-delay') ||
      $elem.css('-moz-animation-delay') ||
      $elem.css('-o-animation-delay') ||
      $elem.css('-ms-animation-delay') ||
      '0s';

    var iterationCount = $elem.css('animation-iteration-count') ||
      $elem.css('-webkit-animation-iteration-count') ||
      $elem.css('-moz-animation-iteration-count') ||
      $elem.css('-o-animation-iteration-count') ||
      $elem.css('-ms-animation-iteration-count') ||
      '1';

    var max;
    var len;
    var num;
    var i;

    duration = duration.split(', ');
    delay = delay.split(', ');
    iterationCount = iterationCount.split(', ');

    // The 'duration' size is the same as the 'delay' size
    for (i = 0, len = duration.length, max = Number.NEGATIVE_INFINITY; i < len; i++) {
      num = parseFloat(duration[i]) * parseInt(iterationCount[i], 10) + parseFloat(delay[i]);

      if (num > max) {
        max = num;
      }
    }

    return max;
  }

  /**
   * Returns a scrollbar width
   * @private
   * @returns {Number}
   */
  function getScrollbarWidth() {
    if ($(document).height() <= $(window).height()) {
      return 0;
    }

    var outer = document.createElement('div');
    var inner = document.createElement('div');
    var widthNoScroll;
    var widthWithScroll;

    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    document.body.appendChild(outer);

    widthNoScroll = outer.offsetWidth;

    // Force scrollbars
    outer.style.overflow = 'scroll';

    // Add inner div
    inner.style.width = '100%';
    outer.appendChild(inner);

    widthWithScroll = inner.offsetWidth;

    // Remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }

  /**
   * Locks the screen
   * @private
   */
  function lockScreen() {
    if (IS_IOS) {
      return;
    }

    var $html = $('html');
    var lockedClass = namespacify('is-locked');
    var paddingRight;
    var $body;

    if (!$html.hasClass(lockedClass)) {
      $body = $(document.body);

      // Zepto does not support '-=', '+=' in the `css` method
      paddingRight = parseInt($body.css('padding-right'), 10) + getScrollbarWidth();

      $body.css('padding-right', paddingRight + 'px');
      $html.addClass(lockedClass);
    }
  }

  /**
   * Unlocks the screen
   * @private
   */
  function unlockScreen() {
    if (IS_IOS) {
      return;
    }

    var $html = $('html');
    var lockedClass = namespacify('is-locked');
    var paddingRight;
    var $body;

    if ($html.hasClass(lockedClass)) {
      $body = $(document.body);

      // Zepto does not support '-=', '+=' in the `css` method
      paddingRight = parseInt($body.css('padding-right'), 10) - getScrollbarWidth();

      $body.css('padding-right', paddingRight + 'px');
      $html.removeClass(lockedClass);
    }
  }

  /**
   * Sets a state for an instance
   * @private
   * @param {Remodal} instance
   * @param {STATES} state
   * @param {Boolean} isSilent If true, Remodal does not trigger events
   * @param {String} Reason of a state change.
   */
  function setState(instance, state, isSilent, reason) {

    var newState = namespacify('is', state);
    var allStates = [namespacify('is', STATES.CLOSING),
                     namespacify('is', STATES.OPENING),
                     namespacify('is', STATES.CLOSED),
                     namespacify('is', STATES.OPENED)].join(' ');

    instance.$bg
      .removeClass(allStates)
      .addClass(newState);

    instance.$overlay
      .removeClass(allStates)
      .addClass(newState);

    instance.$wrapper
      .removeClass(allStates)
      .addClass(newState);

    instance.$modal
      .removeClass(allStates)
      .addClass(newState);

    instance.state = state;
    !isSilent && instance.$modal.trigger({
      type: state,
      reason: reason
    }, [{ reason: reason }]);
  }

  /**
   * Synchronizes with the animation
   * @param {Function} doBeforeAnimation
   * @param {Function} doAfterAnimation
   * @param {Remodal} instance
   */
  function syncWithAnimation(doBeforeAnimation, doAfterAnimation, instance) {
    var runningAnimationsCount = 0;

    var handleAnimationStart = function(e) {
      if (e.target !== this) {
        return;
      }

      runningAnimationsCount++;
    };

    var handleAnimationEnd = function(e) {
      if (e.target !== this) {
        return;
      }

      if (--runningAnimationsCount === 0) {

        // Remove event listeners
        $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
          instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
        });

        doAfterAnimation();
      }
    };

    $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
      instance[elemName]
        .on(ANIMATIONSTART_EVENTS, handleAnimationStart)
        .on(ANIMATIONEND_EVENTS, handleAnimationEnd);
    });

    doBeforeAnimation();

    // If the animation is not supported by a browser or its duration is 0
    if (
      getAnimationDuration(instance.$bg) === 0 &&
      getAnimationDuration(instance.$overlay) === 0 &&
      getAnimationDuration(instance.$wrapper) === 0 &&
      getAnimationDuration(instance.$modal) === 0
    ) {

      // Remove event listeners
      $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
        instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
      });

      doAfterAnimation();
    }
  }

  /**
   * Closes immediately
   * @private
   * @param {Remodal} instance
   */
  function halt(instance) {
    if (instance.state === STATES.CLOSED) {
      return;
    }

    $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
      instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
    });

    instance.$bg.removeClass(instance.settings.modifier);
    instance.$overlay.removeClass(instance.settings.modifier).hide();
    instance.$wrapper.hide();
    unlockScreen();
    setState(instance, STATES.CLOSED, true);
  }

  /**
   * Parses a string with options
   * @private
   * @param str
   * @returns {Object}
   */
  function parseOptions(str) {
    var obj = {};
    var arr;
    var len;
    var val;
    var i;

    // Remove spaces before and after delimiters
    str = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',');

    // Parse a string
    arr = str.split(',');
    for (i = 0, len = arr.length; i < len; i++) {
      arr[i] = arr[i].split(':');
      val = arr[i][1];

      // Convert a string value if it is like a boolean
      if (typeof val === 'string' || val instanceof String) {
        val = val === 'true' || (val === 'false' ? false : val);
      }

      // Convert a string value if it is like a number
      if (typeof val === 'string' || val instanceof String) {
        val = !isNaN(val) ? +val : val;
      }

      obj[arr[i][0]] = val;
    }

    return obj;
  }

  /**
   * Generates a string separated by dashes and prefixed with NAMESPACE
   * @private
   * @param {...String}
   * @returns {String}
   */
  function namespacify() {
    var result = NAMESPACE;

    for (var i = 0; i < arguments.length; ++i) {
      result += '-' + arguments[i];
    }

    return result;
  }

  /**
   * Handles the hashchange event
   * @private
   * @listens hashchange
   */
  function handleHashChangeEvent() {
    var id = location.hash.replace('#', '');
    var instance;
    var $elem;

    if (!id) {

      // Check if we have currently opened modal and animation was completed
      if (current && current.state === STATES.OPENED && current.settings.hashTracking) {
        current.close();
      }
    } else {

      // Catch syntax error if your hash is bad
      try {
        $elem = $(
          '[data-' + PLUGIN_NAME + '-id="' + id + '"]'
        );
      } catch (err) {}

      if ($elem && $elem.length) {
        instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)];

        if (instance && instance.settings.hashTracking) {
          instance.open();
        }
      }

    }
  }

  /**
   * Remodal constructor
   * @constructor
   * @param {jQuery} $modal
   * @param {Object} options
   */
  function Remodal($modal, options) {
    var $body = $(document.body);
    var $appendTo = $body;
    var remodal = this;

    remodal.settings = $.extend({}, DEFAULTS, options);
    remodal.index = $[PLUGIN_NAME].lookup.push(remodal) - 1;
    remodal.state = STATES.CLOSED;

    remodal.$overlay = $('.' + namespacify('overlay'));

    if (remodal.settings.appendTo !== null && remodal.settings.appendTo.length) {
      $appendTo = $(remodal.settings.appendTo);
    }

    if (!remodal.$overlay.length) {
      remodal.$overlay = $('<div>').addClass(namespacify('overlay') + ' ' + namespacify('is', STATES.CLOSED)).hide();
      $appendTo.append(remodal.$overlay);
    }

    remodal.$bg = $('.' + namespacify('bg')).addClass(namespacify('is', STATES.CLOSED));

    remodal.$modal = $modal
      .addClass(
        NAMESPACE + ' ' +
        namespacify('is-initialized') + ' ' +
        remodal.settings.modifier + ' ' +
        namespacify('is', STATES.CLOSED))
      .attr('tabindex', '-1');

    remodal.$wrapper = $('<div>')
      .addClass(
        namespacify('wrapper') + ' ' +
        remodal.settings.modifier + ' ' +
        namespacify('is', STATES.CLOSED))
      .hide()
      .append(remodal.$modal);
    $appendTo.append(remodal.$wrapper);

    // Add the event listener for the close button
    remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="close"]', function(e) {
      e.preventDefault();

      remodal.close();
    });

    // Add the event listener for the cancel button
    remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="cancel"]', function(e) {
      e.preventDefault();

      remodal.$modal.trigger(STATE_CHANGE_REASONS.CANCELLATION);

      if (remodal.settings.closeOnCancel) {
        remodal.close(STATE_CHANGE_REASONS.CANCELLATION);
      }
    });

    // Add the event listener for the confirm button
    remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="confirm"]', function(e) {
      e.preventDefault();

      remodal.$modal.trigger(STATE_CHANGE_REASONS.CONFIRMATION);

      if (remodal.settings.closeOnConfirm) {
        remodal.close(STATE_CHANGE_REASONS.CONFIRMATION);
      }
    });

    // Add the event listener for the overlay
    remodal.$wrapper.on('click.' + NAMESPACE, function(e) {
      var $target = $(e.target);

      if (!$target.hasClass(namespacify('wrapper'))) {
        return;
      }

      if (remodal.settings.closeOnOutsideClick) {
        remodal.close();
      }
    });
  }

  /**
   * Opens a modal window
   * @public
   */
  Remodal.prototype.open = function() {
    var remodal = this;
    var id;

    // Check if the animation was completed
    if (remodal.state === STATES.OPENING || remodal.state === STATES.CLOSING) {
      return;
    }

    id = remodal.$modal.attr('data-' + PLUGIN_NAME + '-id');

    if (id && remodal.settings.hashTracking) {
      scrollTop = $(window).scrollTop();
      location.hash = id;
    }

    if (current && current !== remodal) {
      halt(current);
    }

    current = remodal;
    lockScreen();
    remodal.$bg.addClass(remodal.settings.modifier);
    remodal.$overlay.addClass(remodal.settings.modifier).show();
    remodal.$wrapper.show().scrollTop(0);
    remodal.$modal.focus();

    syncWithAnimation(
      function() {
        setState(remodal, STATES.OPENING);
      },

      function() {
        setState(remodal, STATES.OPENED);
      },

      remodal);
  };

  /**
   * Closes a modal window
   * @public
   * @param {String} reason
   */
  Remodal.prototype.close = function(reason) {
    var remodal = this;

    // Check if the animation was completed
    if (remodal.state === STATES.OPENING || remodal.state === STATES.CLOSING || remodal.state === STATES.CLOSED) {
      return;
    }

    if (
      remodal.settings.hashTracking &&
      remodal.$modal.attr('data-' + PLUGIN_NAME + '-id') === location.hash.substr(1)
    ) {
      location.hash = '';
      $(window).scrollTop(scrollTop);
    }

    syncWithAnimation(
      function() {
        setState(remodal, STATES.CLOSING, false, reason);
      },

      function() {
        remodal.$bg.removeClass(remodal.settings.modifier);
        remodal.$overlay.removeClass(remodal.settings.modifier).hide();
        remodal.$wrapper.hide();
        unlockScreen();

        setState(remodal, STATES.CLOSED, false, reason);
      },

      remodal);
  };

  /**
   * Returns a current state of a modal
   * @public
   * @returns {STATES}
   */
  Remodal.prototype.getState = function() {
    return this.state;
  };

  /**
   * Destroys a modal
   * @public
   */
  Remodal.prototype.destroy = function() {
    var lookup = $[PLUGIN_NAME].lookup;
    var instanceCount;

    halt(this);
    this.$wrapper.remove();

    delete lookup[this.index];
    instanceCount = $.grep(lookup, function(instance) {
      return !!instance;
    }).length;

    if (instanceCount === 0) {
      this.$overlay.remove();
      this.$bg.removeClass(
        namespacify('is', STATES.CLOSING) + ' ' +
        namespacify('is', STATES.OPENING) + ' ' +
        namespacify('is', STATES.CLOSED) + ' ' +
        namespacify('is', STATES.OPENED));
    }
  };

  /**
   * Special plugin object for instances
   * @public
   * @type {Object}
   */
  $[PLUGIN_NAME] = {
    lookup: []
  };

  /**
   * Plugin constructor
   * @constructor
   * @param {Object} options
   * @returns {JQuery}
   */
  $.fn[PLUGIN_NAME] = function(opts) {
    var instance;
    var $elem;

    this.each(function(index, elem) {
      $elem = $(elem);

      if ($elem.data(PLUGIN_NAME) == null) {
        instance = new Remodal($elem, opts);
        $elem.data(PLUGIN_NAME, instance.index);

        if (
          instance.settings.hashTracking &&
          $elem.attr('data-' + PLUGIN_NAME + '-id') === location.hash.substr(1)
        ) {
          instance.open();
        }
      } else {
        instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)];
      }
    });

    return instance;
  };

  $(document).ready(function() {

    // data-remodal-target opens a modal window with the special Id
    $(document).on('click', '[data-' + PLUGIN_NAME + '-target]', function(e) {
      e.preventDefault();

      var elem = e.currentTarget;
      var id = elem.getAttribute('data-' + PLUGIN_NAME + '-target');
      var $target = $('[data-' + PLUGIN_NAME + '-id="' + id + '"]');

      $[PLUGIN_NAME].lookup[$target.data(PLUGIN_NAME)].open();
    });

    // Auto initialization of modal windows
    // They should have the 'remodal' class attribute
    // Also you can write the `data-remodal-options` attribute to pass params into the modal
    $(document).find('.' + NAMESPACE).each(function(i, container) {
      var $container = $(container);
      var options = $container.data(PLUGIN_NAME + '-options');

      if (!options) {
        options = {};
      } else if (typeof options === 'string' || options instanceof String) {
        options = parseOptions(options);
      }

      $container[PLUGIN_NAME](options);
    });

    // Handles the keydown event
    $(document).on('keydown.' + NAMESPACE, function(e) {
      if (current && current.settings.closeOnEscape && current.state === STATES.OPENED && e.keyCode === 27) {
        current.close();
      }
    });

    // Handles the hashchange event
    $(window).on('hashchange.' + NAMESPACE, handleHashChangeEvent);
  });
});

$(function() {
    $('#banner-m').myscroll({
        picEl: $('#move-m'),
        ctrlEl: $('#ctrl-m'),
        libs: false,
        arrows: true,
        autoPlay: false,
        time: 1000,
        speed: 400,
        effect: '',
        hover: false
    });
})
$(function() {
    $('#banner-d').myscroll({
        picEl: $('#move-d'),
        ctrlEl: $('#ctrl-d'),
        libs: false,
        arrows: true,
        autoPlay: false,
        time: 1000,
        speed: 400,
        effect: '',
        hover: false
    });
})
var tabFButtonDesktop = o('main-top__tab-button-f-desktop');
var tabFDropBlockDesktop = o('drop-wrap__tab-drob-block-f-desktop');
var tabFDropStateDesktop = true;
var tabSButtonDesktop = o('main-top__tab-button-s-desktop');
var tabSDropBlockDesktop = o('drop-wrap__tab-drob-block-s-desktop');
var tabSDropStateDesktop = false;
var tabTButtonDesktop = o('main-top__tab-button-t-desktop');
var tabTDropBlockDesktop = o('drop-wrap__tab-drob-block-t-desktop');
var tabTDropStateDesktop = false;

tabFButtonDesktop.onclick = function(e) {
    e.stopPropagation();
    if (!tabFDropStateDesktop) {
        tabFButtonDesktop.classList.add('active-tab-button');
        tabFDropBlockDesktop.style.display = 'block';
        tabFDropStateDesktop = true;
        tabSButtonDesktop.classList.remove('active-tab-button');
        tabSDropBlockDesktop.style.display = 'none';
        tabSDropStateDesktop = false;
        tabTButtonDesktop.classList.remove('active-tab-button');
        tabTDropBlockDesktop.style.display = 'none';
        tabTDropStateDesktop = false;
    } else {
        return false;
    }
};

tabSButtonDesktop.onclick = function(e) {
    e.stopPropagation();
    if (!tabSDropStateDesktop) {
        tabSButtonDesktop.classList.add('active-tab-button');
        tabSDropBlockDesktop.style.display = 'block';
        tabSDropStateDesktop = true;
        tabFButtonDesktop.classList.remove('active-tab-button');
        tabFDropBlockDesktop.style.display = 'none';
        tabFDropStateDesktop = false;
        tabTButtonDesktop.classList.remove('active-tab-button');
        tabTDropBlockDesktop.style.display = 'none';
        tabTDropStateDesktop = false;
    } else {
        tabSButtonDesktop.classList.remove('active-tab-button');
        tabSDropBlockDesktop.style.display = 'none';
        tabSDropStateDesktop = false;
        tabFButtonDesktop.classList.add('active-tab-button');
        tabFDropBlockDesktop.style.display = 'block';
        tabFDropStateDesktop = true;
    }
    return false;
};

tabTButtonDesktop.onclick = function(e) {
    e.stopPropagation();
    if (!tabTDropStateDesktop) {
        tabTButtonDesktop.classList.add('active-tab-button');
        tabTDropBlockDesktop.style.display = 'block';
        tabTDropStateDesktop = true;
        tabFButtonDesktop.classList.remove('active-tab-button');
        tabFDropBlockDesktop.style.display = 'none';
        tabFDropStateDesktop = false;
        tabSButtonDesktop.classList.remove('active-tab-button');
        tabSDropBlockDesktop.style.display = 'none';
        tabSDropStateDesktop = false;
    } else {
        tabTButtonDesktop.classList.remove('active-tab-button');
        tabTDropBlockDesktop.style.display = 'none';
        tabTDropStateDesktop = false;
        tabFButtonDesktop.classList.add('active-tab-button');
        tabFDropBlockDesktop.style.display = 'block';
        tabFDropStateDesktop = true;
    }
    return false;
};
var tabFButtonMobile = o('main-top__tab-button-f-mobile');
var tabFDropBlockMobile = o('drop-wrap__tab-drob-block-f-mobile');
var tabFDropStateMobile = true;
var tabSButtonMobile = o('main-top__tab-button-s-mobile');
var tabSDropBlockMobile = o('drop-wrap__tab-drob-block-s-mobile');
var tabSDropStateMobile = false;
var tabTButtonMobile = o('main-top__tab-button-t-mobile');
var tabTDropBlockMobile = o('drop-wrap__tab-drob-block-t-mobile');
var tabTDropStateMobile = false;

tabFButtonMobile.onclick = function(e) {
    e.stopPropagation();
    if (!tabFDropStateMobile) {
        tabFButtonMobile.classList.add('active-tab-button');
        tabFDropBlockMobile.style.display = 'block';
        tabFDropStateMobile = true;
        tabSButtonMobile.classList.remove('active-tab-button');
        tabSDropBlockMobile.style.display = 'none';
        tabSDropStateMobile = false;
        tabTButtonMobile.classList.remove('active-tab-button');
        tabTDropBlockMobile.style.display = 'none';
        tabTDropStateMobile = false;
    } else {
        return false;
    }
};

tabSButtonMobile.onclick = function(e) {
    e.stopPropagation();
    if (!tabSDropStateMobile) {
        tabSButtonMobile.classList.add('active-tab-button');
        tabSDropBlockMobile.style.display = 'block';
        tabSDropStateMobile = true;
        tabFButtonMobile.classList.remove('active-tab-button');
        tabFDropBlockMobile.style.display = 'none';
        tabFDropStateMobile = false;
        tabTButtonMobile.classList.remove('active-tab-button');
        tabTDropBlockMobile.style.display = 'none';
        tabTDropStateMobile = false;
    } else {
        tabSButtonMobile.classList.remove('active-tab-button');
        tabSDropBlockMobile.style.display = 'none';
        tabSDropStateMobile = false;
        tabFButtonMobile.classList.add('active-tab-button');
        tabFDropBlockMobile.style.display = 'block';
        tabFDropStateMobile = true;
    }
    return false;
};

tabTButtonMobile.onclick = function(e) {
    e.stopPropagation();
    if (!tabTDropStateMobile) {
        tabTButtonMobile.classList.add('active-tab-button');
        tabTDropBlockMobile.style.display = 'block';
        tabTDropStateMobile = true;
        tabFButtonMobile.classList.remove('active-tab-button');
        tabFDropBlockMobile.style.display = 'none';
        tabFDropStateMobile = false;
        tabSButtonMobile.classList.remove('active-tab-button');
        tabSDropBlockMobile.style.display = 'none';
        tabSDropStateMobile = false;
    } else {
        tabTButtonMobile.classList.remove('active-tab-button');
        tabTDropBlockMobile.style.display = 'none';
        tabTDropStateMobile = false;
        tabFButtonMobile.classList.add('active-tab-button');
        tabFDropBlockMobile.style.display = 'block';
        tabFDropStateMobile = true;
    }
    return false;
};
var regButtonDesktop = o('header__reg-button-desktop');
var regDropBlockDesktop = o('header__reg-drop-block-desktop');
var regDropStateDesktop = false;
var regConfirmBtnDesktop = o('header__reg-confirm-desktop');

$(regButtonDesktop).click(function() {
    $('[data-remodal-id=modal]').remodal().open();
});

$(regConfirmBtnDesktop).click(function() {
    $('#header__reg-form-desktop').validate({
        rules: {
            mail: {
                required: true,
                minlength: 5,
                maxlength: 16,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 16,
            }
        },
        messages: {
            mail: {
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 5 символов",
                maxlength: "Максимальное число символов - 16",
                email: "Введите корректный адрес электронной почты"
            },
            password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 8 символов",
                maxlength: "Максимальное число символов - 16",
            }
        }
    });
});
function o(id) {
    return document.getElementById(id);
}

var regButtonMobile = o('header__reg-button-mobile');
var regDropBlockMobile = o('header__reg-drop-block-mobile');
var regDropStateMobile = false;
var regConfirmBtnMobile = o('header__reg-confirm-mobile');

$(regButtonMobile).click(function() {
    $('[data-remodal-id=modal]').remodal().open();
});

$(regConfirmBtnMobile).click(function() {
    $('#header__reg-form-mobile').validate({
        rules: {
            mail: {
                required: true,
                minlength: 5,
                maxlength: 16,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 16,
            }
        },
        messages: {
            mail: {
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 5 символов",
                maxlength: "Максимальное число символов - 16",
                email: "Введите корректный адрес электронной почты"
            },
            password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 8 символов",
                maxlength: "Максимальное число символов - 16",
            }
        }
    });
});