$(window).load(function () {

	var _wikiWrapper = $('#wiki-wrapper');
    var _wikiHeader = $('#head');
    var _wikiNavBar = $('#wiki-rightbar');
    var _wikiBody = $('#wiki-body');
    var _wikiBodyTop = _wikiBody.offset().top;
    var _navMargin = 10;
    var _sectionHeader = $('h1');
    var _sectionName = $(_sectionHeader).text();
    var _navOffsetX = _wikiNavBar.offset().left;
    var _sectionAnchor = _wikiNavBar.find('a:contains(\''+_sectionName+'\')');
    var _currentSubSection = null;

    // Add class to all section anchors.
    _wikiNavBar.find('a').addClass('section');

    // Add class to current anchor.
    _sectionAnchor.addClass('current');

    // Add main title.
    $(_sectionHeader).after('<h1>Burstly Documentation</h1>');
    // Add section header to body.
    _wikiBody.prepend(_sectionHeader);

    // Add a div after the nav bar that we will use for sizing the nav bar when it is in a fixed position.
    _wikiNavBar.after('<div id="wiki-rightbar-sizer" style="width: 25%;"></div>');
    var _wikiNavBarSizer = $('#wiki-rightbar-sizer');

    // Create nav content.
	var _navHtml = '<ul>';
	$('#wiki-body h2').each(function() {
		var subSectionName = $(this).text();
		var link = $(this).find('a:first').attr('href');
		_navHtml += '<li><a href="'+link+'">'+subSectionName+'</a></li>';
	});
	_navHtml += '</ul>';
	_sectionAnchor.after(_navHtml);

    // Create list of sub section elements.
    // These will be used to determine which nav links should highlight based on scroll position.
    var _subSectionHeaders = _wikiBody.find('h2');

    // Handle updates on scrolling.
    onWindowScroll();
    $(window).scroll(function() {
    	onWindowScroll();
	});

	$(window).resize(function() {
		// Determine if we need to manually set the width of the nav bar.
		resizeFixedNav();
	});


	function resizeFixedNav()
	{
		_wikiNavBar.width(_wikiNavBarSizer.width());
	}

	function onWindowScroll()
	{
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
				if (posInWindow + $(subSectionHeader).height() > -1)
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
	}
});