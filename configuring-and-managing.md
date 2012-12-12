#Configuring and Managing

##Creating an App

Setting up an App in Burstly allows you to identify the specific application where you wish to run ads.

1. Log into [[Burstly Dashboard|https://www.burstly.com/Dashboard]]
2. Select the "Setup an App" button located in the middle of the page.  

    [[res/img/dashboard.jpg|alt=Burstly Dashboard]]
3. Define app information  

    [[res/img/app_setup.jpg|alt=Burstly App Setup]]

    Once inside you can specify the name of the application and choose the platform, which are mandatory fields.  There are also optional fields such as setting an App Icon, choosing the category, entering the Bundle ID, enter the URL scheme, and enter the iTunes URL.  These fields do not have any effect on the app itself but can often serve as a repository for useful information needed later.  


##Creating a Zone

Zones are physical locations within the app where ads are trafficked and presented to the user.

[[res/img/zone_types.jpg|alt=Burstly Zone Types]]

1. Log into [[Burstly Dashboard|https://www.burstly.com/Dashboard]]

    [[res/img/dashboard.jpg|alt=Burstly Dashboard]]

2. Click "Apps" tab  

3. Click app name  

4. Click "Create New Zone"  

5. Configure zone  
    - Zone Name  
       Enter a unique name for the zone which will help identify this placement when running reports and assigning ads. We suggest adding either the dimensions or placement name here as well, an example would be "Basketball App 320x50 Banner Zone"
    - Zone Type  
        There are 4 different options for the type of zone you can create and all do very different things. Once you've created this Zone, you won't be able to change its type.

        - Banner  
            The standard Zone type. Unlike an interstitial, its appearance / disappearance is not controlled by the Burstly SDK.

        - Interstitial  
            A special full-screen Zone, ideal for videos and script-based Ads. It appears over the top of your App and comes with a "Close" button for user dismissal.

        - Offer Wall  
            A full-screen Zone intended exclusively for Rewards content. Use it to display in-app Rewards to your users.

        - Display Wall  
            Assign multiple display creatives to a non-incentivized wall format. This zone is intended for display advertising content only.  
    - Zone Options  
        Options vary by zone type and are explained in the UI.  

        - Available Sizes  
            Here you can designate the size(s) of Ads this Zone will accomodate. We allow you to choose to either restrict the size(s) allowed to exact dimensions, combinations of dimensions, or any size so that multiple ad sizes are eligible to serve. >h4> In order to run 3rd party SDK and Ad Feed providers, you will need to choose Any Size and traffic the correct ads for that zone type

        - Text & Script Default  
            This option applies to test and script ads where you have not set the size at the creative level. This will act as a backup and establish a size for all creatives where this applies.

        - Refresh Rate  
            This refresh callback will override the refresh rate you have established at the app level. This option is more flexible as it can be changed from the server anytime.


##Creating an Ad

1. Log into [[Burstly Dashboard|https://www.burstly.com/Dashboard]]

    [[res/img/dashboard.jpg|alt=Burstly Dashboard]]

2. Click "Create New Ad"

3. Choose ad type
    - 3rd Party SDK  
    3rd Party SDK providers are those partners that have been included in your Burstly SDK. These providers are unique in that their libraries are actually in your app and so all unique functionality to their SDK remains intact when running via Burstly.
    - Feed  
    Server side feed providers are those partners where Burstly establishes a connection between servers in order to receive ads. The advantage to server side partners is that they do not add any weight to the Burstly SDK and can be accessed without having to submit an app update. These demand providers range from performance based an networks, to regional partners, to those specializing in video/rich media.
        - Container Size  
        The container size should match the size of the ad but you can always choose *Any Size and rely on the Feed paramaters to limit the size of the ads coming through. However if possible, we recommend matching the size of the ad to the size of the container to create the best possible user experience.
        - Available Feeds  
        You can either search for the Feed you wish to create or scroll the drop down to view the options. You can also view all supported partners here - http://www.burstly.com/home/networksupport
        - Refresh Rate  
        Setting the refresh rate for banner ads here overrides Zone refresh rate and default callback defined in app setup
        - Cache Expiration  
        Configuring the cache timeout for interstitials here allows you to set a time limit for how long Burstly will cache an interstitial to be displayed at a later time. This os often extremely helpful when trying to create a good user experience but has it's disadvantages with time sensitive advertisements. If it doesn't make sense to display an ad after X minutes, you can set the cache to expire which will cancel delivery after that amount of time has passed. This Requires an SDK version of 1.34+ for iOS and 1.15+ for Android.
    - House/Direct  
    House/Direct ads are often the most used ads by publishers. The Burstly platform offers publishers the ability to create ads using any sized GIF, JPG, PNG images, Javascript code (Burstly script support includes ORMMA lvl 1, MRAID rich media ads, DART (Double Click), ARM (Atlas) support, and more.), Text (250 character limit, or Videos. All features/functionality is the same for both House and Direct, the only difference comes when you want to pull reports for each category.
        - House Ads  
        Often these are cross promotional, sale, or messaging ads for a publisher's other titles. These can used to message the user about a new launch, an upcoming sale, or that a new feature has been added to the app.
        - Direct Direct Ads  
        These are ads that a publisher/sales team has sold directly to an advertiser, agency, or network. You can also set the pricing structure for CPI/CPA, CPM, or CPC campaigns and track installs to report revenue.
            - Refresh Rate  
            Setting the refresh rate for banner ads here overrides Zone refresh rate and default callback defined in app setup
            - Pixel Tracking  
            Impression tracking pixels are often used by advertiser to track impressions using a 3rd party, similar to the already described click trackers. Here you can enter the impression tracking pixel as provided by the advertiser.
            - Cache Expiration  
            Configuring the cache timeout for interstitials here allows you to set a time limit for how long Burstly will cache an interstitial to be displayed at a later time. This os often extremely helpful when trying to create a good user experience but has it's disadvantages with time sensitive advertisements. If it doesn't make sense to display an ad after X minutes, you can set the cache to expire which will cancel delivery after that amount of time has passed. This Requires an SDK version of 1.34+ for iOS and 1.15+ for Android.

4. Configure destination type  
    - None  
    The None option is most commonly used for informational ads that do not lead the user anywhere. A good example would be to tell users that you can now use your Facebook login to sign in or if a new type of character has been added to the game.
    - Website  
    The Website option opens the destination URL in a web-view, as opposed to Safari, which does not take the user out of the app. This provides the best user experience but it is important to make sure the the landing page is compatible with a web view and does not need any functionality found only in Safari.
    - App Store  
    The App Store choice takes the user directly in the App Store to download an app. This option is best used when advertising another iOS app.
    - iTunes  
    The Itunes choice takes the user directly in the iTunes Store. This option is best used when advertising an item in the iTunes store such as video or album.
    - Video  
    The Video option opens a video either in the iOS native player if you have a destination URL of a hosted video, or can be used to open up a youtube video. These are most often used to click to video advertisements.
    - Offer Page  
    The Offer page option takes the user to an offer landing page. Here the user can commit an action to gain some kind of award that the publisher is offering, whether it be to watch a video or download an app.
    - Custom  
    The custom option is the best choice when you want to open the landing page using safari, which takes the user out of the app entirely, or when using a click tracking re-direct. Often advertiser will want to track clicks independently using a 3rd party, so make sure to use custom when setting up these types of click trackers.

5. Click "Continue"


##Assigning Ads

Once you have created a/an ad(s) and are ready to traffic them to predetermined location in your app, the next step is to assign them to a Burstly Zone. There are two different ways you can assign ads within the Burstly UI and below we will describe the flow for each method along with best practices for each one

###Assigning one creative to multiple zones  
This option is best used if you are looking to assign one ad to multiple zones within your app, for example if you wanted the same ad to show up on the Menu screen, the Pause screen, and the Options screen. The first step is to navigate into a creative by clicking on the name on the ads page which will take you to manage details page.  

[[res/img/edit_zone.jpg]]  

Next click on the Zone Assignments tab where you can view all the zones this ad is assigned to, at first this will most likely be empty as the ad has not been assigned yet. To assign this and traffic it to zone, click on the Assign this Ad button. Once on this page you can assign the ad to any zone and also decide the weight value determining how often the ad is requested relative to other ads in that tier. Once you have chosen all the zones you want the ad assigned to, you can double check by toggling the Assigned/Not Assigned button to make sure only the desired zones are selected and no other zones have been incorrectly chosen. Once you are satisfied with you choices you can navigate to any other location in the UI as selecting a tier in the zone automatically adds it and no extra step to save is required!

###Assigning multiple creates to one zone  
The opposite scenario for assigning ads would be if you wanted to assign multiple ads to one zone. For example if you wanted to A/B test creatives for some cross promotion in a Pause Menu banner zone, you would want to assign multiple versions of the ad to this one zone. To begin navigate into an app, then into the desired zone where you want to traffic the ads. Once on the Manage Tiers page click the +Assign More Ads button to view the ads you have created. While this page is very similar to the Assign to zones page, it's important to note that now you are choosing multiple ads to assign to one zone. For each creative you want to assign you can also choose it's tier and weight, affecting how often it will be requested relative to other ads in that tier. Again once you are satisfied with you choices you can navigate to any other location in the UI as selecting a tier in the zone automatically adds it and no extra step to save is required!


##Targeting

The Burstly platform offer a variety of targeting capabilities including geo targeting, device targeting, and a host of other custom targeting solutions. Here we will give a brief overview for each one with links to articles giving further in depth descriptions and instructions.

###Geo-Targeting

Inside the Burstly UI you can geo target at the both the campaign and creative level for any ad(s). This allows for maximum flexibility when trafficking complex campaigns with any number of targeting requirements while still creating an elegant solution for the setup and trafficking process.  

[[res/img/geotarget_type.png]]

Options include Worldwide, Non U.S.A., specific country, and U.S. Cities targeting. Worldwide and Non USA are single click options while country and U.S. Cities can be chosen individually or as a group.  

[[res/img/geotarget_countries.png]]

[[res/img/geotarget_cities.png]]


###Device Targeting

The Burstly platform offers users the ability to target campaigns/creatives to specific platforms and devices. Any targeting combination of specific devices, models, and operating systems can be achieved with a few clicks. For example a publisher can target ads to users who are only on the iPhone 4s running 5.1.1 and above or target only those users on iPod touches regardless of operating system. Burstly continuously updates this list as new devices/operating systems come on the market.  

[[res/img/device_targeting_ios.png]]

On Android, publishers also have the choice of targeting based on screen density by choosing High, Medium, or Low density device specifically. Meaning publishers can easily and quickly target any ads away from device with low density 120dpi screens without having to list each device specifically.  

[[res/img/device_targeting_android.png]]


###Custom Targeting

Custom targeting allows publishers to pass back strings comprised of key-value pairs to the Burstly ad server to enhance ad serving capabilities. For example, ads can be targeted to a specific app version, user language, or gender.

####Client Configuration

A string should be passed back to the ad server via either the - (NSString *)pubTargeting delegate method in iOS or the setPublisherTargetingParams(String) method in Android. This string should represent a set of comma-delimited key-value pairs that can consist of integer, float, or string (must be single-quote delimited) values.

    "age=24,appversion=1.4,gender='m'"

####Server Configuration

The string passed from the client is parsed and tested against the decision rule set in the custom targeting section of a creative or campaign's targets & limits. If the decision rule as a whole is TRUE, the creative is eligible to serve and is sent back to the client, assuming no other target & limit rules preclude the creative serving. This decision rule is a string that consists of the same keys as sent in by the client in combination with comparison, logical, arithmetic, and associative operators.

- Decision rule operators:  

        comparison: > >= <= < = !=
        logical: && || !
        arithmetic: + - * /
        associative: ( )

- Sample decision rule:  

        (age>=18)&&(gender='m')

- Sample decision rule to target users that are on appversion 1.3 or 1.5+:  

        (appversion=1.3)||(appversion>=1.5)

- Sample decision rule to target users that are 21+ and female:  

        (age>=21)&&(gender=female)


##Rewards

The Burstly Rewards platform provides the functionality for your apps to display incentivised advertising which reward virtual currency for completing an action. Burstly Rewards allows you to mediate between your own House, Directly sold offers and Third Party networks in order to maximize revenue opportunities.

###Placements

Burstly Rewards placements are generally divided into three categories:  

- Banners (320x50)  
    Rewards Banners behave like traditional banners. Tapping a Banner will show a full screen Page. You can even mix incentivized and traditional advertisements within the same zones.  

    [[res/img/offerbanner_normal.jpg]]

- Pages (Full Screen)  
    Rewards Pages behave like traditional banners and interstitials. You can trigger a Page directly as an interstitial. You can even mix incentivized and traditional advertisements within the same zones.  

    [[res/img/offerpage_normal.jpg]]

- Walls (Full Screen)  
    The Wall is a full screen experience that provides the opportunity to present the user with a host of offers to choose from. Generally, whenever the user has an option to buy or spend virtual currency in your app, you should give them the option to earn currency by displaying a Wall. This allows you to earn revenue from users who would otherwise be unable or unwilling to make purchases. The Offer Wall is presented and controlled much like a traditional interstitial.  

    [[res/img/offerwall_normal.jpg]]

###Customization

The Burstly Rewards offering supports several customization options to allow you to make your rewards match the look and feel of your game in order to provide a better experience to your users which feels more tightly integrated with your title. [[View the full customization options documentation here|http://support.burstly.com/kb/rewards/burstly-rewards-design-guide-contents]].

###Configuring Rewards

Below is a breakdown of the documents that make up the complete Burstly Rewards design guide. Studying these steps can help optimize mobile performance and help you improve conversion results.

1. [[Rewards Flow Overview|http://support.burstly.com/kb/rewards/burstly-rewards-rewards-flow]]

2. [[Enable Your App|http://support.burstly.com/kb/rewards/set-up-a-reward-step-1-enable-rewards-for-your-app]]

3. [[Set up a Zone|http://support.burstly.com/kb/rewards/set-up-a-reward-step-2-set-up-zone-for-your-reward]]

4. [[Create An Offer and Entry Point|http://support.burstly.com/kb/rewards/set-up-a-reward-step-3-create-your-first-offer]]

5. [[Assign and Manage Entry Points|http://support.burstly.com/kb/rewards/set-up-a-reward-step-4-assign-and-manage-entry-points]]

6. [[Edit Offers and Entry Points|http://support.burstly.com/kb/rewards/setting-up-a-reward-step-5-edit-your-offer-and-entry-points]]

###Displaying Reward Placements

IMPORTANT: You must initialize the currency manager form your application to display reward placements.

iOS

    // Replace YOUR_APP_ID with the application ID that you received from the Burstly Dashboard
    currencyManager = [BurstlyCurrency sharedCurrencyManager];
    [currencyManager setPublisherId:YOUR_APP_ID];

Android

    // Replace YOUR_APP_ID with the application ID that you received from the Burstly Dashboard
    // "this" should be an instance of Activity
    mCurrencyManager = new CurrencyManager();
    mCurrencyManager.initManager(this, YOUR_APP_ID);

If you have already integrated the Burstly SDK into your title then the code to display reward placements is the same as any other banner or interstitial. If you have never integrated the Burstly SDK these walkthroughs will give you an understanding of what steps are involved in integrating banners and/or interstitials:

- [[iOS Guide]]  
- [[Android Guide]]  

