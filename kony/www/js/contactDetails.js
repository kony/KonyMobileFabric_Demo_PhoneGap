$(document).ready(function(){

	// binding click event logic for favorite icon
	$("#contactFavoriteStatus").off('click');
	$("#contactFavoriteStatus").on('click',function(event){
	    var contactDetailsObj = parsedContactsObject.Contact[localStorage.konyContactDetails];
		modifyFavorite(this,'contacts',contactDetailsObj.Id); // Modifying the favorite status of the correponding item
	});
	
});

function updateContact(){
    var firstname = $("#contact_firstname").val();
    var lastname = $("#contact_lastname").val();
    var phone = $("#contact_phone").val();
    var email = $("#contact_email").val();
    
    

}

