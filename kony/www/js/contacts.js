$(document).ready(function(){
	//binding keyup event for search/filter logic implementation
	$('#search_input').off('keyup');
	$('#search_input').on('keyup',function(event){
		filterByText(event.target.value,'contactList'); //calling global filtering method
	});
	
	$("#editcontact").click(function(){
	    $(".contactForm").show();
	    $(".contactdata").hide();
	    
	});
	$("#updatecontact").click(function(){
	    $(".contactForm").hide();
	    $(".contactdata").show();
	    
	});
});
var parsedContactsObject;//contacts object

/**************** Contacts Integration callbacks starts here  *************/
var contactsIntegrationSuccessCallback = function(data){
	ldr.hide();
    parsedContactsObject = data;
    var contactListItems = '';
    
    $.each(parsedContactsObject.Contact,function(index,contact){
    	contact.Title = (typeof(contact.Title) === 'undefined' || contact.Title == 'null') ? '' : contact.Title;
    	contact.FirstName = (contact.FirstName == 'null') ? '' : contact.FirstName;
    	contact.LastName = (contact.LastName == 'null') ? '' : contact.LastName;
    	contact.Phone = (contact.Phone == 'null') ? '' : contact.Phone;
    	contact.Email = (contact.Email == 'null') ? '' : contact.Email;
    	
    	//Logic for adding class to the last list item
    	var lastItemClass= '';
    	if(parsedContactsObject.Contact.length == index+1){
    		lastItemClass= 'border-last';
    	}
    	//JSON.stringify(contact)
    	contactListItems += '<li onclick=\'storeContactDetails('+index+');\' class="contactList '+lastItemClass+'" >'+
						    	'<div class="media-list">'+
						        '<div class="media">'+
						            '<a href="#" class="pull-left"><img src="images/contact-icon.png" alt="" /></a>'+
						            '<div class="media-body">'+
						               '<h2 class="media-heading FilterTarget" >'+contact.FirstName+' '+contact.LastName+'</h2>'+
						                '<p class="sub-text">'+contact.Title+'</p>'+
						           '</div>'+
						         '</div>'+
						         '</div>'+
						     '</li>';
    	
    });
    $("#ListItems ul").html(contactListItems);
    
};

var contactsIntegrationFailureCallback = function(data){
	console.log(JSON.stringify(data));
};
/**************** Contacts Integration callbacks ends here  ****************/

/**********************************************
* storeContactDetails()
* 
* This function is used to store corresponding
* contact data in local storage before 
* redirecting to the Details page.
* 
* inputs:
* @contactObj - corresponding contact details
* 				JSON object index
* 
**********************************************/
function storeContactDetails(contactObj){
	localStorage.konyContactDetails = contactObj;//storing the corresponding contact details in localstorage
	changePage("contactdetailspage",'');
}
