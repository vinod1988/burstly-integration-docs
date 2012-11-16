#Configuring and Managing

##Creating an App

Setting up an App in Burstly allows you to identify the specific application where you wish to run ads.

1. Go to [[Burstly Web UI|http://burstly.com]]
2. Click Login and enter credentials.
3. Select the "Setup an App" button located in the middle of the page.  

    [[res/img/dashboard.jpg|alt=Burstly Dashboard]]
4. Define app information  

    [[res/img/app_setup.jpg|alt=Burstly App Setup]]

    Once inside you can specify the name of the application and choose the platform, which are mandatory fields.  There are also optional fields such as setting an App Icon, choosing the category, entering the Bundle ID, enter the URL scheme, and enter the iTunes URL.  These fields do not have any effect on the app itself but can often serve as a repository for useful information needed later.  


##Creating a Zone

Zones are physical locations within the app where ads are trafficked and presented to the user.

[[res/img/zone_types.jpg|alt=Burstly Zone Types]]

1. Click "Apps" tab  

2. Click app name  

3. Click "Create New Zone"  

4. Configure zone  
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

1. Click "Create New Ad"

2. Choose ad type
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