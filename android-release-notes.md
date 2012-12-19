#Android Release Notes
Current SDK Version: 1.17.0.30227
##3rd Party SDK Versions

    Millennial 4.6.0
    Inmobi 3.5.0b
    Greystripe 2.0.1
    Admob 6.0.1
    Jumptap 2.1.11.1
    Amazon 3.6.0
    iVdopia 1.4.7

##1.15
###Manifest Changes
None

###Public API Changes
None.

###Updated Ad Networks
Inmobi 3.01 -> 3.50
Admob 4.51 -> 6.01

###Additional Notable Changes
New runtime exceptions to help catch threading issues - In Android all View calls should be made from the UI thread. As the BurstlyView is a ViewGroup subclass and interacts with Views directly all calls made to it must be made. In previous versions making calls to the BurstlySDK would have undefined behavior. These new runtime exceptions will prevent bugs in released titles and allow you to find issues earlier in the integration process.

Ability to Enable/Disable Back Button on the BurstlyFullscreenActivity - You may now enable and disable the back button while inside of the BurstlyFullscreenActivity which is used to display your house and direct ads. BurstlyFullscreenActivity.setBackButtonEnabled(boolean enabled) can be used for this purpose.

###Minor changes / Bug Fixes
Jumptap banner display issue.
Click tracking callback pixel changes.
Cached interstitial expiration.