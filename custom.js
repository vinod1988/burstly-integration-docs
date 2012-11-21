$(window).load(function () {

    var _wikiHeader = $('#head');
    var _wikiNavBar = $('#wiki-rightbar');
    var _wikiBody = $('#wiki-body');
    var _wikiBodyTop = _wikiBody.offset().top;
    var _navMargin = 10;
    var _sectionName = $('h1').text();

    $(window).scroll(function() {
		var scrollNavTo = Math.max(_wikiBodyTop, $(this).scrollTop() + _navMargin);
		var navOffset = _wikiNavBar.offset();
		_wikiNavBar.offset({left: navOffset.left, top: scrollNavTo});
	});

	// Get page name

	// Create nav content.
	var _navHtml = '<ul>';
	$('#wiki-body h2').each(function() {
		var subSectionName = $(this).text();
		var link = $(this).find('a:first').attr('href');
		_navHtml += '<li><a href="'+link+'">'+subSectionName+'</a></li>';
	});
	_navHtml += '</ul>';
	_wikiNavBar.find('a:contains(\''+_sectionName+'\')').after(_navHtml);

});