// configure meta data here

var MBaaSConfig ={
                "SFUsername" : "sreenivasn@gmail.com",
    			"SFPassword" : "Kony@(877uJ8SgCQtfWM8h64QgzSUJxu",   
                "AppKey" : "beca5f6ba7464fe3aca5d59f94ab1e27",
    			"AppSecret" : "45e2fb15385d44cc00f3303e95f3abd2",
    			"ServiceURL" : "https://100003520.auth.konycloud.com/appconfig",
    			"IdentityService" : "SForceIdentity",
    			"AccountIntegrationService":"SForceAccount",
    			"LeadIntegrationService":"SForceLead",
               	"ContactIntegrationService":"SForceContact",
    			"OpportunitiesIntegrationService":"SForceOpportunity",
    			"KMSID":"sreenivasulu.reddy@kony.com",   
    			"getContactQuery":{ "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Contact"},
    			"getAccountQuery":{ "queryString":"SELECT name,type,BillingCity,BillingState,AnnualRevenue,website,Industry,phone,BillingStreet from Account where type!=null"},
    			"getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Lead"},
    			"getOpportunityQuery":{ "queryString":"SELECT name,Amount,CloseDate,Type,LeadSource,StageName,ExpectedRevenue,Probability from Opportunity"}
};