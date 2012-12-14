#iOS Release Notes

Current SDK Version: 1.35.0.30428

Important: 
Please set Base SDK to iOS 6.0 and Deployment target to whatever your lower support OS version is (4.3+ recommended).

##3rd Party SDK Versions

	Admob - Version: 6.2.1
	Flurry Link - Version: 3.1.2
	Greystripe - Version: 3.2.1
	iAD - N/A
	InMobi -  Version: 3.6.3
	JumpTap - Version: 2.0.16.0
	Millennial Media - Version: 4.6.1

##1.35

1.35.0.30428 - The following bugs & features were resolved:
- Updated InMobi to version 3.6.3
- Updated AdMob to version 6.2.1

1.35.0.30129 - The following bugs & features were resolved:
- Fixed a crash when AdManager is released from adNetworkControllerDismissFullScreen callback
- Added JumpTap SDK no-thumbs

1.35.0.28950 - The following bugs & features were resolved:
- Removed usage of ALL Flurry classes besides FlurryLink
- Fixed long delay before failedToLoad() is called for iAd

1.35.0.28781 - The following bugs & features were resolved:
- Updated AdMob SDK to version 6.2.0 (iOS6 compatible, ARMv7S arch)
- Updated FlurryLink to version 3.1.2 (iOS6 compatible, compatible with newest Flurry SDKs, ARMv7S arch)
- Updated GreyStripe SDK to version 3.2.1 (ARMv7S arch added)
- Updated Jumptap SDK to version 2.0.16.0 (iOS6 compatible, ARMv7S arch)
- Fixed issue with MRAID expanded banner displayed incorrectly after rotated
- Fixed issue of going from text ad to RewardsWall as a click destination
- Fixed issue with Flurry banner incorrect alignment in landscape mode (wasn't centered)
- Fixed issue with iAd medium rectangle banner incorrect alignment
- Added possibility to show close button with delay for MRAID expanded state
- Added possibility to show close button with delay for Burstly interstitial container

1.35.0.28251 - The following bugs & features were resolved:
- Reviewed and updated SDK for iOS6 compatibility
- Implemented version 1 of Burstly Rewards API
- Implemented version 1 of MRAID API
- Updated Millennial SDK to v4.6.1 (iOS6/iPhone5 ready build)
- Updated InMobi SDK to v3.6.0 (iOS6/iPhone5 ready build)
- Added support of new iAd ad sizes introduced in iOS6
- Changed JSON serialization to exclude all NSObject-level properties by default
- Unified ORMMA/MRAID ads destination processing with the rest of the ad types
- Added support for "advertisingIdentifier" and "isAdvertisingTrackingEnabled" properties from new AdSupport.framework
- Added the possibility to override destination type at the link level for HTML-based ads
- Added "User-Agent" string from WebView to all external HTTP requests
- Fixed ORMMA video being played incorrectly on iPad 3.2.1
- Fixed invalid click behavior for ads with no destination
- Fixed incorrect order of callbacks for InMobi interstitial caching functionality
- Fixed 'Visit Site' button being displayed when video is opened
- Fixed occasional background sound from ORMMA ads problem
- Fixed click tracking for Flurry, GS, InMobi and iAD banner ads being displayed in the interstitial container
- Adjusted click tracking for ORMMA ads
- Fixed click tracking for AdMob ads
- Fixed incorrect behavior for ORMMA ads on resize
- Dropped client-side support for TapJoy SDK
- Dropped client-side support for Medialets SDK
- Dropped client-side support for AdColony SDK
- Removed support for ARMv6 architecture (may be reintroduced later)

##1.34

1.34.0.25524 - The following bugs & features were resolved:
- Updated Millennial SDK to version 4.6

1.34.0.23370 - The following bugs & features were resolved:
- Fixed track impression called twice on prefetched offer walls
- Fixed ORMMA: iframes causing multiple stateChange events when loaded in expanded view
- Fixed ORMMA: HTML 5 container loads underneath the ORMMA view
- Fixed ORMMA: ORMMA/MRAID creative collapse animation should not resize
- Fixed ORMMA: precached ORMMA creative should start animation only after being presented
- Fixed MRAID: implemented missing function mraid.getPlacementType()
- Fixed ORMMA: occasional crash after ORMMA.open call
- Fixed incorrect sequence of callbacks when Burstly interstitial is loaded
- Fixed incorrect sequence of callbacks when Jumtap interstitial is loaded
- Fixed incorrect sequence of callbacks when AdColony is loaded
- Fixed incorrect order of callbacks for ORMMA ads
- Added support for cookies for 3rd-party websites
- Added interstitials auto dismiss based on timeout value
- Added support for rewards pages to be served as interstitials
- Reduced deceleration rate of Offerwall scrolling
- Updated JumpTap SDK to version 2.0.15.8
- Updated Flurry Link SDK to version 3.1.0 to include their new product re-engagement
- Added feature to close interstitial when user hits any point in the ad without destination
- Added support for canceling pending ad requests when global timeout fires
- Language of the device is added to the list of the parameters being sent to ad servers
- An application version is added to the list of the parameters being sent to ad servers
- Screen resolution is added to the list of the parameters being send to ad servers
- Added Greystripe SDK 3.2.0 no-thumbs version
- Fixed iOS6-specific JSON serialization issue
- Fixed handling of currency management exception when attempting to serialize JSON on iOS6
- Fixed click tracking for AdMob banners
- Fixed incorrect callbacks for JumpTap expandables
- Fixed SDK opening wrong apps when destination URL is set to nil
- Fixed issue with opening iframes in internal web browser

##1.33

1.33.0.8703 - The following bugs & features were resolved:
- Added support for interstitials expiration

1.33.0.8528 - The following bugs & features were resolved:
- Fixed "isInterstitial" flag in didLoad callback not being set when Burstly fullscreen is displayed.

1.33.0.8499 - The following bugs & features were resolved:
- Updated InMobi SDK with a quick fix from InMobi, InMobi SDK version number is preserved
- Renamed SBJSON library symbols to avoid conflicts with client code

1.33.0.8427 - The following bugs & features were resolved:
- Added a quick fix for JumpTap ORMMA support

1.33.0.8399 - The following bugs & features were resolved:
- Integrated UDID-less Medialets SDK version 2.6.3
- Integrated UDID-less InMobi SDK version 3.5.0
- Integrated UDID-less Greystripe SDK version 3.2.0
- Integrated UDID-less Jumptap SDK version 2.0.15.0
- Integrated UDID-less AdMob SDK version 5.0.8
- Integrated UDID-less Millennial SDK version 4.5.5
- Fixed callbacks order for AdMob, Flurry, Inmobi, Adcolony and Burstly ad networks
- Fixed an issue with offerwall orientation change in landscape mode after pre-caching
- Fixed an issue with Flurry interstitial pre-caching
- Fixed an occasional issue with ads refresh on iOS 3.1.2
- Fixed an occasional issue with video offer being opened in Safari
- Fixed a crash after displaying MRAID creative with "iframe" tag
- Fixed an issue with video being played not from cache if user canceled it and started again
- Fixed ORMMA ads loaded twice issue (over each other)
- Fixed a problem with video destination ads sound playing in the background
- Fixed some issues with MRAID and ORMMA ads being displayed incorrectly
- Fixed a crash in InMobi integration code on iPad
- Fixed an issue with ORMMA ad can't be displayed in landscape mode
- Fixed AdMob click tracking (clicks are tracked twice)
- Improved video player initialization to show offers sooner
- Added support for external redirects
- Added support for in-app 3rd party HTML offers
- Added support for iframes in MRAID scripts
- Updated reachability library to version 2.2
- Added the possibility for view controllers to auto-rotate based on publisher's in-app orientation

##1.32

1.32.0.8289 - The following bugs & features were resolved:
- Removed UDID access

1.32.0.8068
- Renamed symbol conflicting with Apple private API

1.32.0.7737 - The following bugs & features were resolved:
- Added support for 3rd party SDK targeting properties
- Added an interstitial container to display 3rd party view based ads
- Added parameters to webview to allow autoplayback of HTML 5 video
- Added global request timeout
- Fixed Medialets being incorreclty displayed on iPad from time to time
- Fixed 'didLoad: burstly' callback being fired but ORMMA banner isn't displayed
- Fixed replay button (Offer Final Page) not working correctly on iPad with iOS 5.1 beta 3
- Fixed occasional crash in video playback
- Fixed crash on Smaato ad feed
- Fixed incorrect behavior in display logic after Millenial ad is precached
- Fixed occasional crash after a reward page is closed
- Fixed Smaato fullscreen being loaded many times and displayed over each other
- Fixed occasional ORMMA video ad crash
- Fixed an issue with banners being incorrectly displayed on iPad after a specific set of steps
- Updated and changed API of app presence tracker component
- Splitted each ad network controllers into two entities: universal controller and ad network adaptor (refactoring)
- Removed processing of dates from cookies (performance improvement)

##1.31

1.31.0.7725 - The following bugs & features were resolved:
- Fixed issue when precaching unexpectadly change offerwall orientation in landscape

1.31.0.7638 - The following bugs & features were resolved:
- Added support for 3rd party rewards out-of-view navigation

1.31.0.7356 - The following bugs & features were resolved:
- Added user-agent header to content fetching HTTP requests to support server-side feeds integration

1.31.0.7321 - The following bugs & features were resolved:
- Fixed an occasional crash after "Visit Site" is tapped in a video ad

1.31.0.7286 - The following bugs & features were resolved:
- Removed categories from ORMMA implementation

1.31.0.7260 - The following bugs & features were resolved:
- Added support for ORMMA lvl 1/MRAID rich media ads
- Added logic to call adManager:viewDidChangeSize:fromOldSize: when ORMMA expandables change size
- Added a new callback adManager:didHideView: to be called when ORMMA banner is closed by user (ORMMA banners can have a cross button)
- Integrated Medialets SDK of version 2.6.1
- Integrated Tapjoy SDK of version 8.1.3
- Fixed an occasional crash in video
- Fixed an issue with a video skip button not working from time to time
- Added logic to pass web user agent string to the server for correct server-side feeds integration

##1.30

1.30.0.7079 - The following bugs & features were resolved:
- Fixed an issue with delegate ModalTransitionStyle property being ignored for Rewards
- Fixed an issue when didLoad callback is fired for iAd but no iAd ad is actually displayed
- Fixed application crash when getting Inmobi
- Fixed Smaato ads being incorrectly displayed after the click
- Fixed Admob click tracking on iPhone 3G
- Fixed airplane mode crash (no connectivity)
- Fixed an issue with Smaato banner being incorrectly displayed from time to time
- Updated Millennial SDK to version 4.5.3
- Added support to Millennial image interstitial caching
- Switched download tracker to NSUserDefaults instead of Cache directory
- Fixed banner image highlighting on click
- Fixed AudioSession setting for MPMoviePlayerController
- Added universal watchdog functionality
- Fixed "X" button transparent background issue on Rewards
- Updated Admob SDK to version 5.0.5

##1.29

1.29.0.6657 - The following bugs & features were resolved:
- Fixed video being tracked even if it isn't played
- Fixed Skip and Visit Site buttons sometimes not being displayed in video ads
- Fixed synchronous downloading of buttons in video controller
- Added 4 seconds delay on showing the Skip button for video ads
- Added support of Flurry fullscreen ad unit
- Added support for Millennial ad network pre-caching
- Updated Millennial SDK to version 4.5.2
- Updated AdMob SDK to version 5.0.3
- Updated AdColony SDK to version 1.9.7b
- Updated Greystripe SDK to version 3.1.3
- Updated SayMedia/VideoEgg SDK to version 2.1.0GM (from beta3)
- Reviewed JumpTap 2.0.14.1 integration for iOS5.0
- Integrated a new wrapper for Flurry SDK
- Rewritten iAd integration entirely

##1.28

1.28.0.6405 - The following bugs & features were resolved:
- Currency management API is significantly changed, UserId is added
- Implemented client-side storage for currency
- Implemented a new video player for video offers
- Added the possibility to cancel video playback during offer
- Removed video jogging controls from offer video player
- Implemented app presence tracking functionality based on registered URL schemes
- Fixed improper OfferWallViewController webview layout
- Fixed OfferWall spinner being always presented after precaching
- Fixed points being awarded even if user didn't watch video
- Fixed Inmobi expanded ad is displayed incorrectly
- Fixed clicks aren't tracked for precached Millenial ads
- Fixed iAd subsequent ad views appear to be blank
- Fixed Admob click tracking
- Fixed AdColony click tracking
- Fixed multiple clicks tracking for some Greystripe banners
- Updated AdColony SDK to version 1.9.7
- Download tracker doesn't use /Documents dir any more

##1.27

1.27.0.2100 - The following bugs & features were resolved:
- Integrated Ad Colony 1.9.6
- Updated AdMob SDK to version 4.1.1
- Updated Millennial SDK to version 4.2.7
- Updated InMobi SDK to version 3.0.0
- Updated Videoegg SDK to version 2.1.0
- Updated FlurryAppCircle SDK to version 3.0.0
- Removed Google Adsense SDK (was merged with AdMob SDK)
- SDKs which are not ready for iOS5 at the moment of release of 1.27 are not included
- Added close button delay for Burstly interstitials
- Fixed a leak caused by iAd controller being not associated with AdBannerView
- Changed iAd implementation: ADBannerView is removed from the view hierarchy when there is no fill from iAd (no hidden rotation any more)

##1.26
	
1.26.0.2085 - The following bugs & features were resolved:
- Added support for house video and download offers
- Added support for third-party offers (server-side integration)
- Implemented a first version of currency API
- Implemented offerwall interstitial

##1.25

1.25.0.2073 - The following bugs & features were resolved:
- Added possibility to set refresh rate on server for Burstly ads
- Added support for Burstly interstitials (image and script fullscreen ads)
- Added "failedToLoadAll" callback to public API
- Added watchdog for Burstly ad network
- Added support for Burstly videos on iPad
- Added support for multiple video tracking pixels
- Ad manager methods must be called from main thread only, otherwise an assert is produced
- Changed basic UI controls for Burstly fullscreen video ads
- Implemented a new cache for image/video content
- Video prefetching is switched from streaming to downloading
- Ad manager doesn't retain its delegate anymore
- Fixed bug with video link being opened in Safari instead of build-in webview
- Fixed performance issue with NSDateFormatter being recreated for each network request
- Fixed some memory management issues and leaks

##1.24

1.24.0.2024 - The following bugs & features were resolved:
- Updated Mobclix SDK to version 4.3.3
- Updated Millennial SDK to version 4.2.3
- Added support for Mobclix interstitials
- Updated Brightroll SDK
- Implemented video playback for feeds and house ads on iPhone/iPod
- Added support for OfferWalls (ad server communication protocol changes)
- Integrated TapJoy OfferWall SDK 7.4.0
- Implemented native Burstly OfferWall component

##1.23

1.23.1.2003 - The following bugs & features were resolved:
- Fixed: setPaused:YES does not pause autorefresh timer
- Fixed: Brightroll adNetworkControllerPresentFullScreen callback is missing

1.23.0.2001 - The following bugs & features were resolved:
- Fixed: Millenial Fullscreen ad is not displayed after load.
- Fixed: AS_FullScreenView leak and some other leaks
- Fixed: Banner fetched before iAd interstitial incorrectly displayed after closing iAD
- Fixed: Brightroll precache isn't working
- Added iAd Interstitial Support
- Updated iVdopia to version 3.4.9
- Updated Greystripe to version 3.1.2

##1.22

1.22.0.1995 - The following bugs & features were resolved:
- Updated iVdopia SDK to to version 3.4.7 (fixes a crash with iVdopia ad manager deallocation)
- Improved user agent information reporting (reports more system information such as actual device type for better targeting)
- Integrated JumpTap ad network SDK version 2.0.12.4
- Added reporting of internal SDK status (ad network rotation problems) to Google Analytics
- Deleted some old unused fields from the SDK-to-AdServer communication protocol
- Fixed: iVdopia - two clicks tracked after only one that was made on banner
- Fixed: occasional auto refresh manager crash
- Fixed: clicks aren't tracked for Ivdopia fullscreen ads
- Fixed: clicks aren't tracked for Millenial fullscreen ads
- Fixed: crash after getting 'ivdopia' ad with fullscreen parameters

##1.21

1.21.0.1989 - The following bugs & features were resolved:
- Updated Mobclix to version 4.1.6.
- Updated Millennial to version 4.0.5.
- Added a beta version of BrightRoll.
- Added version 2.1.0.9 of Transpera.
- Fixed Greystripe 728x90 clicks issue.
- Fixed the problem with ads stop autorefreshing after iAd with parameter alwaysShowWhenAvailable":"YES" had been served.
- Fixed a crash which used to happen occasionally after device rotation.
- Fixed a crash after tapping a video ad with video that is actually unavailable.
- Changed build versioning schema. Now it has the following format: Major.Minor.Patch.Build.