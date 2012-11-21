$(window).load(function () {

    var _wikiHeader = $('#head');
    var _wikiNavBar = $('#wiki-rightbar');
    var _wikiBody = $('#wiki-body');
    var _wikiBodyTop = _wikiBody.offset().top;
    var _navMargin = 10;
    var _sectionName = $('h1').text();
    var _navOffsetX = _wikiNavBar.offset().left;

    $(window).scroll(function() {
    	var bodyTop = _wikiBodyTop - $(this).scrollTop();
    	if (bodyTop < 10)
    	{
    		// Make sure fix position is applied for nav bar.
    		_wikiNavBar.addClass('fixed');
    	}
    	else
    	{
    		// Make sure relative position is applied for nav bar.
    		_wikiNavBar.removeClass('fixed');
    	}
		//var scrollNavTo = Math.max(_wikiBodyTop, $(this).scrollTop() + _navMargin);
		//_wikiNavBar.offset({left: _navOffsetX, top: scrollNavTo});
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