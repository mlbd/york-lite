!function(a){"use strict";function b(){var b=["500px","bandsintown","behance","codepen","dribbble","dropbox","email","facebook","flickr","foursquare","github","googleplay","google","houzz","instagram","itunes","linkedin","medium","meetup","pinterest","rdio","reddit","rss","smugmug","soundcloud","spotify","squarespace","stumbleupon","tumblr","twitch","twitter","vevo","vimeo","vine","vsco","yelp","youtube"];b.forEach(function(b){a('a[href*="'+b+'"] svg use').each(function(){a(this).attr("xlink:href",a(this).attr("xlink:href")+"#"+b+"-mask")})})}function c(){var b=a(window),c=a(window).height(),d=a(".sidebar--section"),e="js--scroll";b.width()>768&&d.children().each(function(){c<a(this).innerHeight()?a(this).parent().addClass(e):a(this).parent().removeClass(e)})}var d=a("body");a(".projects"),a(".site-header"),a(".formContainer"),a(".projects"),a("#site-search");a("body").fitVids(),NProgress.configure({minimum:.7,showSpinner:!1}),document.onreadystatechange=function(){"interactive"==document.readyState&&NProgress.start()};var e=setInterval(function(){/loaded|complete/.test(document.readyState)&&(clearInterval(e),setTimeout(function(){NProgress.done()},1e3))},10);a(document).ready(function(){function e(){a(".video").fitVids()}function f(){m=!0,d.addClass("modal-open"),n.animate({scrollTop:0},300),n.addClass("modal--show"),p.addClass("loading--show"),o.addClass("modal-content--show")}function g(){m=!1,setTimeout(function(){o.html(""),l.removeClass("button--close--show"),o.removeClass("modal-content--show"),d.removeClass("modal-open"),n.css("-webkit-overflow-scrolling","auto"),n.removeClass("modal--show")},400)}function h(){p.removeClass("loading--show"),o.find(".type-portfolio").addClass("project--show"),l.addClass("button--close--show"),setTimeout(function(){n.css("-webkit-overflow-scrolling","touch")},300)}function i(b){a.get(b,function(b){a(b).find(".project");setTimeout(function(){h()},200)})}c(),b(),e();var j=a(".projects"),k=document.getElementById("close-button"),l=a(k),m=!1,n=(a(".project"),a("#modal")),o=a("#modal-content"),p=a("#loading");a(".post-edit-link");a("#modal-close").on("click",function(){g()}),a("#close-button").on("click",function(){g()}),d.hasClass("modal-active")&&j.on("click",".project a",function(b){a(this).hasClass("project--link_external")||(b.preventDefault(),history.pushState(null,null,this.href),f(),i(a(this).attr("href")))}),d.hasClass("modal-active")&&a(".project a").click(function(b){if(!a(this).hasClass("project--link_external")){b.preventDefault(),a("#loading-body").show();var c=a(this).data("id"),d=site.ajaxurl;a.ajax({type:"POST",url:d,data:{action:"load-content",post_id:c},success:function(b){return a("#modal-content").html(b),a("#loading-body").hide(),!1}})}}),a(".mobile-menu-toggle").on("click",function(){d.toggleClass("nav-open")}),a("#nav-close").on("click",function(){d.toggleClass("nav-open")})}),a(window).resize(function(){c()})}(jQuery);