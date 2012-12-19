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

##1.17

###Manifest Changes
None. 

###Public API Changes
None.

###Updated Ad Networks
Smaato removed  
Greystripe 2.0-> 2.0.1  
AdMob 6.0.1->6.2.1  

###Additional Notable Changes
MRAID 1.0 Support

##1.16
###Manifest Changes
The BurstlyFullscreenActivity manifest entry now requires the "configChanges" flag "screenSize".  The new activity entry should look like this:

        <!-- Burstly ================================================= -->
        <activity
            android:name="com.burstly.lib.component.networkcomponent.burstly.BurstlyFullscreenActivity"
            android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
            android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />

In addition Greystripe has changed their manifest entry to be the following:

        <!-- Greystripe ============================================== -->
        <activity
            android:name="com.greystripe.sdk.GSFullscreenActivity"
            android:configChanges="keyboard|keyboardHidden|orientation" />

And Millenial's Activity tags should look like:

        <!-- Millenial ================================================= -->       
        <activity 
            android:name="com.millennialmedia.android.MMActivity" 
            android:theme="@android:style/Theme.Translucent.NoTitleBar"
            android:configChanges="keyboardHidden|orientation|keyboard"/>
        <activity android:name="com.millennialmedia.android.VideoPlayer" 
            android:theme="@android:style/Theme.NoTitleBar.Fullscreen"
            android:configChanges="keyboardHidden|orientation|keyboard"/>

Finally the Amazon SDK requires the manifest entry:

        <!-- Amazon =================================================== -->
        <activity
            android:name="com.amazon.mobileads.mraid.MraidBrowser"
            android:configChanges="keyboardHidden|orientation" />
        <activity
            android:name="com.amazon.mobileads.video.VideoActionHandler"
            android:configChanges="keyboardHidden|orientation" />

###Public API Changes
None.
###Updated Ad Networks
New network Amazon A9 version 3.6.0 added  
Medialets SDK removed  
Greystripe 1.6.1-> 2.0  
Inmobi 3.5.0 -> 3.5.3  

###Additional Notable Changes
Millenial adNetworkDismissFullScreen fix  
Rare BurstlySdk.shutDown crash fix  
Rewards Wall user experience improvements  

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