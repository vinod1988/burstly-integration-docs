#iOS Guide

##Introduction

The Burstly SDK is a static library that consists of a set of methods that you can invoke to display advertisements of varying sizes in your application.You can take advantages of the static library through it's Application Programming Interface (API). The Burstly API includes a set of headers that detail the available classes, protocols (an objective-c standard to subscribe for callbacks) and methods. A typical integration would entail adding the headers and the library to your project and invoking the available calls in the headers to display your ads. An advanced use case may involve displaying multiple ad units (typically banners and interstitials) across multiple views. This may require you to maintain a data structure of certain classes that correspond to these ad types. As a developer, you may be building your apps on multiple environments such as OPENGL based engines, Unity/MonoTouch and Cocos2D. While Burstly supports these frameworks, you may require additional tweaks to your implementation to support native features and standard UX guidelines.


##SDK Integration

1. Unzip the SDK package and add the BurstlySDK folder to your project: File -&gt; Add Files to " "
    1. Find and select the folder named BurstlySDK.
    2. Make sure that "Copy items into destination folder (if needed)" is checked
    3. Set Folders to "Create groups for any added folders"
    4. Select all targets that you want to add the SDK to
2. Verify that libBurstly.a has been added to the Link Binary With Libraries Build Phase for the targets you want to use the SDK with     
    1. Select your Project in the Project Navigator
    2. Select the target you want to enable the SDK for
    3. Select the Build Phases tab
    4. Open the Link Binary With Libraries Phase
    5. If libBurstly.a is not listed, drag and drop the library from your Project Navigator to the Link Binary With Libraries area
    6. Repeat Steps 2 - 5 until all targets you want to use the SDK with have the SDK linked
3. Add required frameworks to your Link Binary With Libraries Build Phase
    1. Select your Project in the Project Navigator
    2. Select the target you want to enable the SDK for
    3. Select the Build Phases tab
    4. Open the Link Binary With Libraries Phase
    5. Click the + to add a new library
    6. Find the follwoing frameworks in the list and add them. You can optionally select multiple frameworks by holding (⌘):  
        - AddressBook.framework
        - AddressBookUI.framework
        - AdSupport.framework
        - AudioToolbox.framework
        - AVFoundation.framework
        - CFNetwork.framework
        - CoreGraphics.framework
        - CoreLocation.framework
        - CoreMotion.framework
        - CoreTelephony.framework
        - EventKit.framework
        - EventKitUI.framework
        - Foundation.framework
        - iAd.framework
        - libsqlite3.dylib
        - libxml2.dylib
        - libz.dylib
        - MapKit.framework
        - MediaPlayer.framework
        - MessageUI.framework
        - MobileCoreServices.framework
        - OpenAL.framework
        - OpenGLES.framework
        - PassKit.framework
        - QuartzCore.framework
        - Security.framework
        - StoreKit.framework
        - SystemConfiguration.framework
        - UIKit.framework
    7. Repeat Steps 2 - 6 until all targets you want to use the SDK with have all required frameworks
4. Add required compiler flags to "Other Linker Flags" in your Build Settings
    1. Select your Project in the Project Navigator
    2. Select the target you want to enable the SDK for
    3. Select the Build Settings tab
    4. Make sure the "All" subtab is selected
    5. Look for the Other Linker Flags field (You can filter fields using the search bar under the Build Settings tab on the right)
    6. Add the following linker flags (include the preceding "-"):

            -ObjC
            -weak_framework AdSupport
            -weak_framework PassKit


##Display a Banner

Creating a banner ad placement entails setting up an instance of the BurstlyBannerAdView and adding it to a UIViewController's view hierarchy

1. Import "BurstlyBannerAdView.h" and "BurstlyBannerAdViewDelegate.h"

        #import "BurstlyBannerAdView.h"
        #import "BurstlyInterstitial.h"

2. Declare an instance of BurstlyBannerAdView in your View Controller

        BurstlyBannerAdView *banner;
        ...
        @property (nonatomic, retain) BurstlyBannerAdView *banner;

3. Adopt the BurstlyBannerViewDelegate protocol

        @interface ViewController : UIViewController<BurstlyBannerViewDelegate>

4. Implement required BurstlyBannerViewDelegate methods  

    These callbacks will provide information about the lifecycle of the banner. You should typically pause app activity when notified that the ad will take over full screen and subsequently resume your app activity when the ad dismisses from full screen.

        - (void)burstlyBannerAdView:(BurstlyBannerAdView *)view willTakeOverFullScreen:(NSString*)adNetwork
        {
            // Banner will take over screen.
    		// You should pause any app activity to improve performance.
    		// Pause banner. It will no longer auto-refresh.
    		[self.banner setAdPaused:YES];  
    	}
        - (void)burstlyBannerAdView:(BurstlyBannerAdView *)view willDismissFullScreen:(NSString*)adNetwork
        {
            // Banner will dismiss from screen take over.
		    // You should resume any paused activity within your app.
		    // Resume banner. It will begin auto-refreshing (if you have a default refresh interval defined via [banner setDefaultRefreshInterval:]).
		    [self.banner setAdPaused:NO];
        }

3. Initialize banner and add to your view hierarchy (Sample app and zone IDs are provided here for demonstration. After confirming proper banner display with sample IDs and after configuring your app and zones in the Burstly Web UI, you should replace these with your designated app and zone IDs)

        // This frame will position the banner at the bottom/middle of our main view.
        CGRect bannerFrame = CGRectMake(self.view.frame.size.width / 2 - BBANNER_SIZE_320x53.width / 2, self.view.frame.size.height - BBANNER_SIZE_320x53.height, BBANNER_SIZE_320x53.width, BBANNER_SIZE_320x53.height);

        // Set root view controller for modal display of banner landing pages.
        // The anchor defines what edge of the banner will be used to anchor the banner within it's frame. kBurstlyAnchorBottom specifies that the bottom/middle of the banner will anchor to the bottom/middle of it's frame.
        // Set the delegate as the object that receive messages about the status of the banner.
        self.banner = [[[BurstlyBannerAdView alloc] initWithAppId:@"5fWofmS3902gWbwSZhXa1w" zoneId:@"0659117979169244027" frame:bannerFrame anchor:kBurstlyAnchorBottom rootViewController:self delegate:self] autorelease];

        [self.view addSubview:banner];

4. Request an ad

        [self.banner showAd];


##Banner Delegate Methods

Aside from the required delegate methods, your banner delegate may optionaly implement these methods defined in BurstlyBannerViewDelegate.h

Sent when an ad has been hidden.  
@param: view - Pointer to BurstlyBannerAdView  
@param: lastViewedNetwork - Specifies the ad network that was last loaded. 

    -(void) burstlyBannerAdView:(BurstlyBannerAdView *)view didHide:(NSString*)lastViewedNetwork;

Sent when an ad request succeeded and a valid view is available to be displayed.  
@param: view - Pointer to BurstlyBannerAdView  
@param: adNetwork - Specifies the network that was loaded. 
    
    -(void) burstlyBannerAdView:(BurstlyBannerAdView *)view didShow:(NSString*)adNetwork;

Sent when a request to pre-cache an ad has succeeded and a valid view is available to be displayed.  
@param: view - Pointer to BurstlyBannerAdView  
@param: adNetwork - Specifies the network that was pre-cached. 

    -(void) burstlyBannerAdView:(BurstlyBannerAdView *)view didCache:(NSString*)adNetwork;

Sent when the banner ad view is clicked.  
@param: view - Pointer to BurstlyBannerAdView  
@param: adNetwork - Specifies the network that was clicked. 

    -(void) burstlyBannerAdView:(BurstlyBannerAdView *)view wasClicked:(NSString*)adNetwork;

Sent when the ad request has failed. Typically this would occur when either Burstly or a 3rd party network has no fill. Refer to BurstlyAdError for more details.  
@param: view - Pointer to BurstlyBannerAdView  
@param: error - Pointer to BurstlyAdError which contains details on the error  

    -(void) burstlyBannerAdView:(BurstlyBannerAdView *)view didFailWithError:(BurstlyAdError*)error;


##Display an Interstitial

Interstitial ad placements differ from their banner counterparts in that they typically provide a full screen interactive experience. These are usually presented modally and take over the app experience while providing a way to return to the application. You have the capability of running static ads, videos and rich media creatives in your application by following the steps detailed below.

1. Import "BurstlyInterstitial.h" and "BurstlyInterstitialDelegate.h"

        #import "BurstlyInterstitial.h"
        #import "BurstlyInterstitialDelegate.h"

2. Declare an instance of BurstlyInterstitial in your View Controller

        BurstlyInterstitial *interstitial;
        ...
        @property (nonatomic, retain) BurstlyInterstitial *interstitial;

3. Implement required BurstlyInterstitialDelegate methods  

    These callbacks will provide information about the lifecycle of the interstitial. You should typically pause app activity when notified that the ad will take over full screen and subsequently resume your app activity when the ad dismisses from full screen.

        - (void)burstlyInterstitial:(BurstlyInterstitial *)ad willTakeOverFullScreen:(NSString*)adNetwork
        {
            // Interstitial will take over screen.
    		// You should pause any app activity to improve performance.
    		// Pause banner. It will no longer auto-refresh.
    		[self.banner setAdPaused:YES];  
        }

        - (void)burstlyInterstitial:(BurstlyInterstitial *)ad willDismissFullScreen:(NSString*)adNetwork
        {
            // Interstitial will dismiss from screen take over.
            // You should resume any paused activity within your app.
		    // Resume banner. It will begin auto-refreshing (if you have a default refresh interval defined via [banner setDefaultRefreshInterval:]).
		    [self.banner setAdPaused:NO];
        }

4. Initialize interstitial (Sample app and zone IDs are provided here for demonstration. After confirming proper interstitial display with sample IDs and after configuring your app and zones in the Burstly Web UI, you should replace these with your designated app and zone IDs)

        self.interstitial = [[[BurstlyInterstitial alloc] initAppId:@"5fWofmS3902gWbwSZhXa1w" zoneId:@"0156117779169244027" delegate:self] autorelease];

5. Request an ad

        [self.interstitial showAdWithRootViewController:self];


##Interstitial Delegate Methods

Aside from the required delegate methods, your interstitial delegate may optionaly implement these methods defined in BurstlyInterstitialDelegate.h

Sent when an ad has been hidden.  
@param: ad - Pointer to BurstlyInterstitial  
@param: lastViewedNetwork - Specifies the ad network that was last loaded. 

    -(void) burstlyInterstitial:(BurstlyInterstitial *)ad didHide:(NSString*)lastViewedNetwork;

Sent when an ad request succeeded and a valid view is available to be displayed.  
@param: ad - Pointer to BurstlyInterstitial  
@param: adNetwork - Specifies the network that was loaded. 

    -(void) burstlyInterstitial:(BurstlyInterstitial *)ad didShow:(NSString*)adNetwork;

Sent when a request to pre-cache an ad has succeeded and a valid ad is available to be displayed.  
@param: ad - Pointer to BurstlyInterstitial  
@param: adNetwork - Specifies the network that was pre-cached.  

    -(void) burstlyInterstitial:(BurstlyInterstitial *)ad didCache:(NSString*)adNetwork;

Sent when the interstitial ad view is clicked.  
@param: ad - Pointer to BurstlyInterstitial  
@param: adNetwork - Specifies the network that was clicked. 

    -(void) burstlyInterstitial:(BurstlyInterstitial *)ad wasClicked:(NSString*)adNetwork;

Sent when the ad request has failed. Typically this would occur when either Burstly or a 3rd party network has no fill. Refer to BurstlyAdError for more details.  
@param: ad - Pointer to BurstlyInterstitial  
@param: error - Pointer to BurstlyAdError which contains details on the error  

    -(void) burstlyInterstitial:(BurstlyInterstitial *)ad didFailWithError:(BurstlyAdError*)error;


##Pre-Caching Interstitials

It his highly recommended that you pre-cache interstitials before displaying them. This generally results in a better user experience.

1. Before attempting to show an interstitial, pre-cache it with this method.  

        [self.interstitial cacheAd];

2. If the interstitial successfully caches, the SDK will notify you by calling a delegate method. Inside that method you could immediately show the interstitial or at some other designated time.  

        - (void)burstlyInterstitial:(BurstlyInterstitial *)ad didCache:(NSString*)adNetwork
        {
            // An interstitial did cache.
            // You can optionally show the interstitial immediately like this:
            [self.interstitial showAdWithRootViewController:self];
        }

3. Usually, it's ideal to show the pre-cached interstitial at a later time. You could do so by comparing the interstitial state to the BurstlyInterstitialState enum.  

        // I want to show an interstitial, IF it is already pre-cached.
        if (self.interstitial.state == BurstlyInterstitialStatePreCached)
        {
            [self.interstitial showAdWithRootViewController:self];
        }

4. You can begin pre-caching the next interstitial at any time but it is generally best to do so when the current interstitial is dismissed. You can handle this in the following delegate method.  

        - (void)burstlyInterstitial:(BurstlyInterstitial *)ad willDismissFullScreen:(NSString*)adNetwork
        {
            // Interstitial will dismiss from screen take over.
            // Begin caching another interstitial.
            [self.interstitial cacheAd];
        }


##Walkthroughs and Advanced Topics

See the [Burstly Site Map](http://support.burstly.com/kb/support/site-map "Burstly Site Map") for walkthroughs and information on advanced topics: http://support.burstly.com/kb/support/site-map