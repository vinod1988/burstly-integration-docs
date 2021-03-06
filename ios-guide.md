#iOS Guide

##Introduction

The Burstly SDK is a static library that consists of methods that you can invoke to display advertisements of varying sizes in your application. The Burstly API includes a set of headers that detail the available classes, protocols and methods. A typical integration would entail adding the headers and the library to your project and invoking the available calls in the headers to display your ads. An advanced use case may involve displaying multiple ad units (typically banners and interstitials) across multiple views. This may require you to maintain a data structure of certain classes that correspond to these ad types.


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
Note: [Configure a banner zone](http://cldocs.burstly.com:8080/configuring-and-managing#Creating-a-Zone) on the Burstly dashboard to receive your unique zone id.

Creating a banner ad placement entails setting up an instance of the BurstlyBannerAdView and adding it to a UIViewController's view hierarchy

1. Import "BurstlyBannerAdView.h" and "BurstlyBannerAdViewDelegate.h"

        #import "BurstlyBannerAdView.h"
        #import "BurstlyBannerViewDelegate.h"

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

Note: [Configure an interstitial zone](http://cldocs.burstly.com:8080/configuring-and-managing#Creating-a-Zone) on the Burstly dashboard to receive your unique zone id.

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


##Integration Mode

You can use integration mode to test the functionality of 3rd party ad networks. Keep in mind that enabling integration mode for an ad will disregard the app/zone IDs that you have specified in the init method. Below is how you use integration mode for a banner. Be sure to import "BurstlyAdRequest.h".

    [self.bannerView.adRequest setIntegrationModeWithTestNetwork:kBurstlyTestAdmob filterDeviceMacAddresses:nil];

In the above example, a test banner will be loaded from the AdMob ad network. The method for loading a test interstitial is the same.  

    [self.interstitial.adRequest setIntegrationModeWithTestNetwork:kBurstlyTestAdmob filterDeviceMacAddresses:nil];

###Test Networks

You can swap "kBurstlyTestAdmob" with one of the following enum values to test different ad networks: 

- kBurstlyTestGreystripe - Test ads from the Greystripe ad network
- kBurstlyTestInmobi - Test ads from the InMobi ad network
- kBurstlyTestIad - Test ads from the iAd ad network
- kBurstlyTestJumptap - Test ads from the Jumptap ad network
- kBurstlyTestMillennial - Test ads from the Millennial ad network

###Integration Mode Safe-Guard

We recommend passing in an array of device MAC addresses (NSString) to the "setIntegrationModeWithTestNetwork:filterDeviceMacAddresses:" method. This will ensure that when deployed to a device, integration mode will only be enabled if the device MAC address is among those specified in the array. This should prevent anyone from accidentally deploying an app to the public that only serves test ads.  


##Custom Targeting

Burstly supports custom targeting. This allows you to pass a comma-separated string of parameters with each ad request. These custom parameters can be used to target specific ads into your app. Below is an example of passing age and gender information about your users:

    // You must set custom targeting before calling showAd or cacheAd.
    [self.banner.adRequest setTargettingParameters:@"gender='m',age=18"];
    // The same can be done for interstitials.
    [self.interstitial.adRequest setTargettingParameters:@"gender='m',age=18"];

Notice that string values should be enclosed in quotes and numerical values should not. Keep in mind that these parameters are arbitrary and you can pass anything you want:

    // You must set custom targeting before calling showAd or cacheAd.
    [self.banner.adRequest setTargettingParameters:@"myParam='value',otherParam='value',numericalParam=2345"];

For these targeting parameters to have any bearing on your ads you'll need to also configure specific creatives in the Burstly Dashboard. You can learn how to do this [here](http://cldocs.burstly.com/configuring-and-managing#Custom-Targeting).


##Reward Currency Management  

Burstly supports methods for managing currency earned through specialized ads called rewards. You can read about Burstly Rewards [here](http://cldocs.burstly.com/configuring-and-managing).  

###Initializing the Currency Manager

If dealing with currency in your app, you MUST initialize the currency manager by passing in required parameters.

    // Initialize Burstly Currency.
	self.currencyManager = [BurstlyCurrency sharedCurrencyManager];
	[self.currencyManager setPublisherId:YOUR_APP_ID];
	[self.currencyManager setDelegate:self];


###Checking the Balance

You can check the rewards balance by calling a method on the currency manager and implementing a callback method on the delegate that you specify in the initialization code.

    // Get current rewards balance.
	[self.currencyManager checkForUpdate];

	- (void)currencyManager:(BurstlyCurrency *)manager didUpdateBalances:(NSDictionary *)balances
    {
    	// Burstly rewards balance has been updated.
        // Returns a dictionary of currency info keyed by a currency type string.
        BurstlyCurrencyUpdateInfo *currencyUpdate = [balances objectForKey:YOUR_CURRENCY_TYPE];
        NSInteger newBalance = [currencyUpdate newTotal];
        NSLog(@"Burstly currency updated: %d", newBalance);
    }
    
    - (void)currencyManager:(BurstlyCurrency *)manager didFailToUpdateBalanceWithError:(NSError *)error
    {
    	// Burstly rewards balance failed to update.
    }


###When to Check for Reward Balance

Typically, there are key points throughout the app lifecycle that you will need to check for the updated balance. We always recommend checking the balance inside Burstly's full-screen dismiss callback. This delegate method will be called every time a user returns to the app from a full-screen Burstly ad view. This will always happen after a user has completed a currency earning reward offer.

If your app implements an offer wall or incentivized interstitials, you will want to check for the reward balance when those interstitials and offer walls dismiss from full-screen.

    // This goes into the delegate that adheres to BurstlyInterstitialDelegate and is passed to the instance of BurstlyInterstitial
    - (void)burstlyInterstitial:(BurstlyInterstitial *)ad willDismissFullScreen:(NSString*)adNetwork
    {
        // Get current reward balance.
        // This is a good time to check the balance because it's likely that the user completed an offer within the interstitial.
        [self.currencyManager checkForUpdate];
    }


If your app implements incentivized banners, you will want to check for the reward balance when the user returns to the app from the banners landing page.

    // This goes into the delegate that adheres to BurstlyBannerDelegate and is passed to the instance of BurstlyBannerAdView
    - (void)burstlyBannerAdView:(BurstlyBannerAdView *)view willDismissFullScreen:(NSString*)adNetwork
    {
        // Get current reward balance.
        // This is a good time to check the balance because it's likely that the user completed an offer within the banner landing page.
        [self.currencyManager checkForUpdate];
    }