KonyMobileFabric_Demo_PhoneGap
=============

This Application showcases how to use Kony MobileFabric SDK's for building a PhoneGap app using SalesForce Authentication.


# To run this app

	-Install Node.js from http://nodejs.org/ 
	-Run this command in cmd(npm install -g cordova)
	-In the project,go to project folder under www/js folder and open config.js file
	-Configure your app secret,app id, service URL that you got from your Kony MobileFabric console after app configuration
	-Run these commands
		For ios:- 
				cordova platform add ios
				cordova build ios
				cordova run ios
					
		For Android:-
				1. cordova platform add android
				2. cordova build android
				3. cordova run android
				4. Navigate to the main activity Java file(\platforms\android\src\com\popcorn\mbaas\CordovaApp), and add the following snippet to import the package:
					import com.kony.sdk.KonyCordovaHelper
				5. At the last line in onCreate method of the main activity file, add the following line:
					KonyCordovaHelper.init(appView, this);

					After adding the above line, the onCreate method will look like the following example:
						# ---------
						super.onCreate(savedInstanceState);
						super.init();
						// Set by <content src="index.html" /> in config.xml
						super.loadUrl(Config.getStartUrl());
						KonyCordovaHelper.init(appView, this);
						-----------#
				6. Again run below commands
					-cordova build android 
					-cordova run android
	-


# Supported platforms:
**Mobile**
 * iPhone
 * Android