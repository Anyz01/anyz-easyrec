/**
 * 
 */
var easyrecApiUrl="http://192.168.2.141:8080/easyrec-web/api/1.0/json/";
var apiKey = '6491d97a8a0c3f7d07b1df5d83a83521', tenantId = 'SMARTOU';

;(function($){
	var random = function(baseNum){
		return Math.floor((Math.random() * baseNum) + 1);
	};
	
	var action = easyrec_sendAction;
	
	$('.buy').click(function(e){
		var itemUrl = 'img/drag.png';//相对路径，如：img/drag.png
		var itemDescription = $(this).text();
		var itemImageUrl = "img/blank.png";//相对路径， 如：img/blank.gif
		action("buy", {userId:random(100), itemId: random(200), itemUrl: itemUrl, itemDescription: itemDescription, itemImageUrl: itemImageUrl});
	});
	
	$('.view').click(function(e){
		var itemUrl = 'img/drag.png';//相对路径，如：img/drag.png
		var itemDescription = $(this).text();
		var itemImageUrl = "img/blank.png";//相对路径， 如：img/blank.gif
		action("view", {userId:random(100), itemId: random(200), itemUrl: itemUrl, itemDescription: itemDescription, itemImageUrl: itemImageUrl});
	});
	
	$('.rate').click(function(e){
		var itemUrl = 'img/drag.png';//相对路径，如：img/drag.png
		var itemDescription = $(this).text();
		var itemImageUrl = "img/blank.png";//相对路径， 如：img/blank.gif
		action("rate", {userId:random(100), itemId: random(200), itemUrl: itemUrl, itemDescription: itemDescription, itemImageUrl: itemImageUrl, ratingValue: random(10)});
	});
})(jQuery);