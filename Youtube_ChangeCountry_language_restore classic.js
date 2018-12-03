// ==UserScript==
// @name         Youtube - Change Country + language + restore classic
// @version      1.0.0
// @description  replaces youtube cookie , so it doesnt change its country/language/whaterver automatically
// @author       Ulf3000
// @match        https://www.youtube.com/*
// @exclude      https://www.youtube.com/tv*
// @exclude      https://www.youtube.com/embed/*
// @exclude      https://www.youtube.com/live_chat*
// @run-at       document-start
// @noframes
// ==/UserScript==




// youtube restores the cookies to your real country after some time so lets just check everytime 
// ive set this script to  gl=PH&hl=en  which changes the language and location
// &f6=8  sets the classic youtube ui 

function restoreClassicYoutube() {
	// Cookies are enabled?
	if (navigator.cookieEnabled) {
		if (document.cookie) {
			var cookie = getCookie("PREF");
			if (cookie) {
				console.log("current PREF cookie: " + cookie);
				if (cookie.search(/gl=PH/) === -1) {
					document.cookie = "PREF=" + "gl=PH&hl=en&al=de&f1=50000000&f5=30&f6=8" + ";path=/;domain=.youtube.com";
					location.reload();
				}
			}
		}
	}
}

function getCookie(name) {
	var cookie = document.cookie.match(new RegExp(name + '=([^;]+)'));
	if (cookie && cookie[1]) {
		return cookie[1];
	}
	return null;
}

restoreClassicYoutube();