var konyObject;
var identity;
var syncObj;
$(function() {
    

	
	// event handler for login button
	$("#login").click(function () {
		console.log('##### show loader');
		$('#loaderpage').show();
		//setTimeout(function(){
			console.log('##### in login.js function');
			//debugger;
			ldr.show();
	        konyObject = new kony.sdk();
		    konyObject.init(
		        MBaaSConfig.AppKey,
		        MBaaSConfig.AppSecret,
		        MBaaSConfig.ServiceURL,   
		        InitSuccessCallback,
		        InitFailureCallback
		    );
		//},1000);

		ldr.hide();
	});
    
});

/***************** init callbacks starts here  ****************/
var InitSuccessCallback = function(data){
	ldr.show();
	if(localStorage.konycurrentUser){
		var userDetails = JSON.parse(localStorage.konycurrentUser);
		if(userDetails.username){
			$("#username").val(crypt.decode(userDetails.username));
			$("#password").val(crypt.decode(userDetails.password));
		}
	}

	var username = $.trim($("#username").val());
	var password = $("#password").val();
	//username=MBaaSConfig.DefaultUsername;
	//password=MBaaSConfig.DefaultPassword;	
	if (username == "") {
		alert('Please Enter User Name');
		return false;
	}else if (password == "") {
		alert('Please Enter Password');
		return false;
	}else{
		
		//ldr.show();
		
		//login request parameters
		var loginObj = {"userid" : username,"password" : password };
		
		//Calling auth function for getting Authentication service handler
		identity = konyObject.getIdentityService(MBaaSConfig.IdentityService);
		//Login Validation using autentication service handler object
		console.log('username : ' + username + ' password is : ' + password);
		identity.login(loginObj,LoginSuccessCallback,LoginFailureCallback);
	}

	ldr.hide();
};

var InitFailureCallback = function(data){
    alert(JSON.stringify(data));
	ldr.hide();
};
/*****************  init callbacks ends here  ****************/



/*****************  Login callbacks starts here  ****************/
var LoginSuccessCallback = function(data){
	if($('#rememberme').is(':checked')){
		var username = crypt.encode($.trim($("#username").val()));
		var password = crypt.encode($("#password").val());
		var currentUser = {'username':username,'password':password};
		localStorage.konycurrentUser = JSON.stringify(currentUser); //storing user details in local storage
	}
	
	//syncObj=konyObject.getSyncService();
	//syncObj.init(syncInitSuccess,syncInitFailure);
	
	//Manipulate user data here if needed
	identity.getBackendToken('false','',BackendTokenSuccessCallback,BackendTokenFailureCallback); // Getting BackendToken
	//ldr.hide();
};

var syncInitSuccess = function(data){
	//ldr.hide();
	console.log('##### hide loader');
	//ldr.hide();
	console.log(" in syncInitSuccess ");
	
	
	//console.log(JSON.stringify(data));
	//debugger;
	//alert(JSON.stringify(data));
	return false;
};
var syncInitFailure = function(data){
	ldr.hide();
	console.log(JSON.stringify(data));	
	alert(JSON.stringify(data));
	return false;
};
var LoginFailureCallback = function(data){
	ldr.hide();
	console.log(JSON.stringify(data));
	alert(JSON.stringify(data));
	return false;
};
/****************  Login callbacks ends here  ****************/



/***************** BackendToken callbacks starts here  ****************/
var BackendTokenSuccessCallback = function(data){
    	
    localStorage.konyAuthorization = data.value; //storing authorization in localstorage
	localStorage.regid ="";
    if(localStorage.regid != ""){
        
            // Registering Device   
            var msgService = konyObject.getMessagingService();
                                  
            msgService.register("androidgcm", device.uuid, data.value, $.trim($("#username").val()), function(data){ 
	        
	            changePage("Dashboard",'bg-primary');
                ldr.hide(); 
	            
	        },function(data){
	            ldr.hide(); 
	            console.log(data);
	        });
	    }
	else{
        changePage("Dashboard",'bg-primary');
        
        //ldr.hide(); 
    }
	  
};

var BackendTokenFailureCallback = function(data){
	ldr.hide();
	console.log(data);
};
/**************** BackendToken callbacks ends here  ****************/

