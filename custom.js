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
    var _currentSubSection = null;

    // Add class to all section anchors.
    _wikiNavBar.find('a').addClass('section');

    // Add class to current anchor.
    _sectionAnchor.addClass('current');

    // Add a div after the nav bar that we will use for sizing the nav bar when it is in a fixed position.
    _wikiNavBar.after('<div id="wiki-rightbar-sizer" style="width: 25%;"></div>');
    var _wikiNavBarSizer = $('#wiki-rightbar-sizer');

    // Create list of sub section elements.
    // These will be used to determine which nav links should highlight based on scroll position.
    var _subSectionHeaders = _wikiBody.find('h2');

    $(window).scroll(function() {
    	var windowScrollTop = $(this).scrollTop();
    	var windowHeight = $(this).height();
    	var bodyTop = _wikiBodyTop - windowScrollTop;
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

    	// Determine which subsection we are scrolled to.
    	var i = 0;
    	var len = _subSectionHeaders.length;
    	var currentSubSectionHeader = null;
    	while (i < len)
    	{
    		var subSectionHeader = _subSectionHeaders[i];
    		var posInWindow = $(subSectionHeader).offset().top - windowScrollTop;
    		// Determine if the sub-section header is above the bottom third of the window.
			if (posInWindow < windowHeight * 0.66)
			{
				currentSubSectionHeader = subSectionHeader;
				if (posInWindow > 0)
				{
					i = len;
				}
			}
			else
			{
				i = len;
			}

    		i++;
    	}

    	// Set new sub-section header.
    	// Determine if the value has changed.
    	if (currentSubSectionHeader != _currentSubSection)
    	{
    		_currentSubSection = currentSubSectionHeader;
    		var subSectionName = $(_currentSubSection).text();

    		// Remove "current" class from all sub section links.
			$(_wikiNavBar).find('li').each(function() {
				$(this).removeClass('current');
			});
			// Add "current" class to corresponding sub section link.
			_wikiNavBar.find('li:contains(\''+subSectionName+'\')').addClass('current');
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
	/*$.getScript('res/js/waypoints.min.js', function(data, textStatus, jqxhr) {
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
	});*/


	function resizeFixedNav()
	{
		_wikiNavBar.width(_wikiNavBarSizer.width());
	}
});