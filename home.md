#Overview

##What is Burstly?

Burstly offers a suite of tools to help mobile developers better monetize their apps. The tool set allows developers to run any type of content or messaging to its users, track in-app purchases from buttons or banners, cross-promote other apps, and work with an extensive set of 3rd party ad partners to improve revenue. Burstly’s mission is to empower developers by providing data and visibility into their business, along with a toolset to act on that data.

##How do I start?

1) Set up your appId
 - Navigate to the apps [page](https://www.burstly.com/Apps/Create), login and complete the steps detailed [here to set up your app](http://cldocs.burstly.com/configuring-and-managing#Creating-an-App)
 - Once the app is setup, retrieve the App Id by selecting the App Information tab on the navigation pane. 
 - You need to pass the appId using the API when requesting ads, so keep it handy.

2) Download the SDK
 - Navigate to the [Downloads](http://cldocs.burstly.com/downloads)  section to get the latest SDK depending on your app's platform.

3) Review the [glossary](http://cldocs.burstly.com:8080/home#Glossary)  to identify and understand the basics of ad serving through Burstly.

4) Navigate to the guide of your choice (IOS/Android) to begin integrating the SDK. 

5) Familiarize yourself with configuring custom ads in your zones by visiting this [section.](http://cldocs.burstly.com/configuring-and-managing#Creating-an-Ad)

##Glossary
 - AppId - An AppID uniquely identifies your application and is one of the two mandatory fields when requesting ads via the Burstly API. You should create a new AppId for every new application in your organization. You should not re-use the same id across multiple SKUs.
 - ZoneId - A zone refers to a unique placement within the application. Each app can have multiple zoneIds and each zone can request a different set of ads. A zone has a dedicated size associated to itself. You get to choose the size of this placement. An exception is an interstitial zone where the size covers the entire screen of the device. Examples of zone placements include the main menu, end of level or splash screens.
 - Creative - A creative refers to an ad type that plugs in to a zone. Examples of creatives are banners on the menu screen or video interstitials in between turns. You could assign multiple creatives to each zone in your app. You could assign a creative to multiple zones.
 - 3rd Party SDKs - The Burstly SDK wraps multiple other libraries from partners such as Admob, Millennial, Inmobi and Greystripe. We obfuscate their APIs and implement adapters within the SDK to ensure that you don't have to re-implement them. All you need to do is set up your zone, configure creatives from these networks on the Burstly dashboard, assign them to any zone of your choice.
