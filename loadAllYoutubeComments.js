// ==UserScript==
// @name          Load All Youtube Comments
// @include       https://www.youtube.com/*
// @description   loads all comments instead of just 8 when clicking "show replies" und a comment
// @version       1.0.0
// @author        ULF3000
// @run-at        document-start
// ==/UserScript==

window.addEventListener('DOMContentLoaded', processPage);
//window.addEventListener('spfdone', processPage);

function processPage() {
	document.onclick = function (e) {

		if (e.target.classList.contains("comment-replies-renderer-expander-down")) { // && e.target.classList.contains("load-more-button")  ???
			console.log("click");
			let xxx = e.target.parentNode.parentNode;
			setTimeout(function () {
				clickMore(xxx)
			}, 200);
		}
	}
}
function clickMore(el) {
	try {
		el.querySelector('.load-more-button').click();

	} catch (e) {
		console.log("NO MORE COMMENTS");
		return;
	}
	setTimeout(function () {
		clickMore(el)
	}, 500);  //play with this depending on how fast your connection and browser is... lower values use more power higher values are slower 
}
