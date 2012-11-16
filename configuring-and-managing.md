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