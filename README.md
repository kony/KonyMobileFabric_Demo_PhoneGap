KonyMobileFabric_Demo_Sync_PhoneGap
===================================

This Application showcases how to use Kony MobileFabric SDK's for building a PhoneGap app using SalesForce Authentication.


# To run this app

	-Install Node.js from http://nodejs.org/ 
	-Run this command in cmd(npm install -g cordova)
	-Go through Kony Document (http://docs.kony.com/tutorials/MobileFabric/#Overview.htm#BuildPhoneGap%3FTocPath%3D_____5)
	-In the project,go to project folder under www/js folder and open config.js file
	-Configure your app secret,app id, service URL that you got from your Kony MobileFabric console after app configuration
	-Remove content of platforms and plugins folder
	-Add required plugin in project(cordova plugin add ------)
	-Run these commands
		For ios:- 
				cordova platform add ios
				cordova build ios
				cordova run ios
					
		For Android:-
				1. Run below commands 
				
				cordova plugin add cordova-plugin-device
				
				cordova plugin add cordova-plugin-whitelist
				
				cordova plugin add com.kony.sdk
				
				cordova platform add android
				
				2. Navigate to the main activity Java file(mbaas\platforms\android\src\com\popcorn\mbaas\MainActivity.java), and add the following snippet to import the packages:
					
					import android.os.Bundle; 
					import org.apache.cordova.*; 
					import com.kony.sdk.*; 
					import android.webkit.WebView;
					
				3. At the last line in onCreate method of the main activity file, add the following line:
					
					loadUrl(launchUrl); 
					WebView mainViewForSdk = (WebView)appView.getEngine().getView(); 
					KonyCordovaHelper.init(mainViewForSdk, this);

					After adding the above line, the onCreate method will look like the following example:
					
						import android.os.Bundle; 
						import org.apache.cordova.*; 
						import com.kony.sdk.*; 
						import android.webkit.WebView; 

						public class MainActivity extends CordovaActivity
						{
							@Override 
							public void onCreate(Bundle savedInstanceState) 
							{ 
								super.onCreate(savedInstanceState); 
								// Set by <content src="index.html" /> in config.xml 
								loadUrl(launchUrl); 
								WebView mainViewForSdk = (WebView)appView.getEngine().getView(); 
								KonyCordovaHelper.init(mainViewForSdk, this); 
							} 
						}
						
				4. Change config.js (located in www/js folder) file with the AppKey, AppSecret and ServiceURL. Also cross check login credentials.
			
				
				5. Run below commands to run the app on android device / emulator
					
					cordova build android 
					cordova run android
					
				6. Run below command to run on android emulator only
				
				    cordova emulate android	
	


# Supported platforms:
**Mobile**
 * iPhone
 * Android
