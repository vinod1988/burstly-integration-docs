$(window).load(function () {

    var _wikiHeader = $('#head');
    var _wikiNavBar = $('#wiki-rightbar');
    var _wikiBody = $('#wiki-body');
    var _wikiBodyTop = _wikiBody.offset().top;

    $(window).scroll(function() {
		var scrollNavTo = Math.max(_wikiBodyTop, $(this).scrollTop());
		var navOffset = _wikiNavBar.offset();
		_wikiNavBar.offset({left: navOffset.left, top: scrollNavTo});
		//_wikiNavBar.css('top', scrollNavTo + "px");
	});
});