$(window).load(function () {

	alert("hello");
    var _wikiBodyTop = $('#wiki-body').offset().top;
    var _wikiHeader = $('#head');
    var _wikiNavBar = $('#wiki-rightbar');
    var _wikiBody = $('#wiki-body');

    $(window).scroll(function() {
		var scrollNavTo = Math.max(_wikiBodyTop, $(this).scrollTop());
		_wikiNavBar.css('top', scrollNavTo + "px");
	});
});