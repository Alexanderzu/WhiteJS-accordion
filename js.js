(function() {
	var doc = document.documentElement,
		accordeonItem = doc.querySelectorAll('.accordeon__item'),
		accordeonItemTrigger = doc.querySelectorAll('.accordeon__item_trigger'),
		accordeonItemContent = doc.querySelectorAll('.accordeon__item_content');
	for (var i = 0; i < accordeonItemTrigger.length; i++) {
	    // console.log(accordeonItemTrigger[i]);
		accordeonItemTrigger[i].onclick = function(e) {
			var parElem = this.parentNode;
	    	parElem.classList.toggle("open");
	    	// console.log("test");
	    };
	};
})();

