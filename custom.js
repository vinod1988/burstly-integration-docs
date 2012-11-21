$(window).load(function () {

	var _wikiWrapper = $('#wiki-wrapper');
    var _wikiHeader = $('#head');
    var _wikiNavBar = $('#wiki-rightbar');
    var _wikiBody = $('#wiki-body');
    var _wikiBodyTop = _wikiBody.offset().top;
    var _navMargin = 10;
    var _sectionName = $('h1').text();
    var _navOffsetX = _wikiNavBar.offset().left;
    var _sectionAnchor = _wikiNavBar.find('a:contains(\''+_sectionName+'\')');

    // Add class to all section anchors.
    _wikiNavBar.find('a').addClass('section');

    // Add class to current anchor.
    _sectionAnchor.addClass('current');

    // Add a div after the nav bar that we will use for sizing the nav bar when it is in a fixed position.
    _wikiNavBar.after('<div id="wiki-rightbar-sizer" style="width: 25%;"></div>');
    var _wikiNavBarSizer = $('#wiki-rightbar-sizer');

    $(window).scroll(function() {
    	var bodyTop = _wikiBodyTop - $(this).scrollTop();
    	if (bodyTop < 10)
    	{
    		// Make sure fix position is applied for nav bar.
    		if (!_wikiNavBar.hasClass('fixed'))
			{
				_wikiNavBar.addClass('fixed');
				resizeFixedNav();
			}
    	}
    	else
    	{
    		// Make sure relative position is applied for nav bar.
    		_wikiNavBar.removeClass('fixed');
    	}
	});

	$(window).resize(function() {
		// Determine if we need to manually set the width of the nav bar.
		resizeFixedNav();
	});

	// Create nav content.
	var _navHtml = '<ul>';
	$('#wiki-body h2').each(function() {
		var subSectionName = $(this).text();
		var link = $(this).find('a:first').attr('href');
		_navHtml += '<li><a href="'+link+'">'+subSectionName+'</a></li>';
	});
	_navHtml += '</ul>';
	_sectionAnchor.after(_navHtml);

	// Load waypoints plugin.
	$.getScript('res/js/waypoints.min.js', function(data, textStatus, jqxhr) {
		// Setup waypoints.
		$('#wiki-body h2').each(function() {
			var subSectionName = $(this).text();
			$(this).waypoint(function() {
				// Remove "current" class from all sub section links.
				$(_wikiNavBar).find('li').each(function() {
					$(this).removeClass('current');
				});
				// Add "current" class to corresponding sub section link.
				_wikiNavBar.find('li:contains(\''+subSectionName+'\')').addClass('current');
			});
		});
	});


	function resizeFixedNav()
	{
		_wikiNavBar.width(_wikiNavBarSizer.width());
	}
});