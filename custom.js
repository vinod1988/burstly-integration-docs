$(window).load(function () {

    var _wikiHeader = $('#head');
    var _wikiNavBar = $('#wiki-rightbar');
    var _wikiBody = $('#wiki-body');
    var _wikiBodyTop = _wikiBody.offset().top;
    var _navMargin = 10;
    var _sectionName = $('h1').html();

    $(window).scroll(function() {
		var scrollNavTo = Math.max(_wikiBodyTop, $(this).scrollTop() + _navMargin);
		var navOffset = _wikiNavBar.offset();
		_wikiNavBar.offset({left: navOffset.left, top: scrollNavTo});
	});

	// Get page name

	// Create nav content.
	var _navHtml = '<ul>';
	$('#wiki-body h2').each(function() {
		_navHtml += '<li>'+$(this).html()+'</li>';
	});
	_navHtml += '</ul>';
	_wikiNavBar.append(_navHtml);

});