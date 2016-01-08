
/*

MBaaSConfig ={
    "DefaultUsername" : "sreenivasn@gmail.com", 
    "DefaultPassword" : "SampleApps@1234W77q2WXmGPqQQE0jlWiiC5ho",    
    "AppKey" : "71b484740d359a7ecfcd0102b7d8c215", 
    "AppSecret" : "2512602bed9dafc5bc71f8c9d4258df4", 
    "IdentityService" : "SyncDemoIdService",
    "AccountIntegrationService":"AccountIntgService",
    "LeadIntegrationService":"LeadIntgService",
    "ContactIntegrationService":"ContactSyncIntg",
    "OpportunitiesIntegrationService":"OpportunityIntgService",
    "ServiceURL" : "https://100000032.auth.konycloud.com/appconfig",
    "KMSID":"sreenivasulu.reddy@kony.com",    
    "getContactQuery":{ "queryString":"Select Id, FirstName, LastName, Title, AccountId, Phone, email, Department,Fax,ReportsToId, BirthDate, IsDeleted, LastModifiedDate from Contact"},
    "getAccountQuery":{ "queryString":"Select Id, AccountNumber, Name, Type, Rating,IsDeleted,Phone,Fax,LastModifiedDate, Website, AnnualRevenue, BillingAddress, BillingCity, BillingStreet, BillingState from Account"},
    "getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL,IsDeleted, LastModifiedDate FROM Lead"},
    "getOpportunityQuery":{ "queryString":"Select Id, Name, AccountId, Type, IsDeleted,LastModifiedDate, CloseDate, StageName, probability, Amount, LeadSource, ExpectedRevenue  from Opportunity"}
};

*/
//App Key : 53ea0084b358765bb464a4395acdb70f
//App Secret : 57d2e83dea64d8130a4350d2b8a69150
//Service URL : https://100000032.auth.konycloud.com/appconfig



//var konyObject ; //= new kony.sdk();

$(function() {

    console.log('##### in config.js file');

    MBaaSConfig ={
        "DefaultUsername" : "sreenivasn@gmail.com", 
        //"DefaultUsername" : "kony.sampleapps@gmail.com", 
        //"DefaultUsername" : "reddy_muralidhar@gmail.com",
        //"DefaultUsername" : "kishorekiran321@gmail.com",

        "DefaultPassword" : "SampleApps@1234W77q2WXmGPqQQE0jlWiiC5ho", 
        //SampleApps@123pb32q6CXQIYlFDBxw80bof643   
        //"DefaultPassword" : "Kony.Sample@123mFkLQ7s8wnOipXjU3m8nIDBW",
        //"DefaultPassword" : "Test1drivep3u5wuqDdu7Gy6c1nSWBlVYSv",  
        //"DefaultPassword" : "f2007121!@#$LQvRFcwZ13wAAQeP9HClQOyjw",

        //"AppKey" : "93fa254e7f3841dd60b0fc6d15280ee1", 
        "AppKey" : "71b484740d359a7ecfcd0102b7d8c215", 

        //"AppSecret" : "a3dfbe3fb02601979194c73ba9ac2310", 
        "AppSecret" : "2512602bed9dafc5bc71f8c9d4258df4", 

        "IdentityService" : "SyncDemoIdService",
        "AccountIntegrationService":"AccountIntgService",
        "LeadIntegrationService":"LeadIntgService",
        "ContactIntegrationService":"ContactSyncIntg",
        "OpportunitiesIntegrationService":"OpportunityIntgService",
        //"ServiceURL" : "http://ec2-54-209-21-218.compute-1.amazonaws.com:8080/authService/100000002/appconfig",
        "ServiceURL" : "https://100000032.auth.konycloud.com/appconfig",

        "KMSID":"sreenivasulu.reddy@kony.com",    
        
        "getContactQuery":{ "queryString":"Select Id, FirstName, LastName, Title, AccountId, Phone, email, Department,Fax,ReportsToId, BirthDate, IsDeleted, LastModifiedDate from Contact"},
        "getAccountQuery":{ "queryString":"Select Id, AccountNumber, Name, Type, Rating,IsDeleted,Phone,Fax,LastModifiedDate, Website, AnnualRevenue, BillingAddress, BillingCity, BillingStreet, BillingState from Account"},
        "getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL,IsDeleted, LastModifiedDate FROM Lead"},
        "getOpportunityQuery":{ "queryString":"Select Id, Name, AccountId, Type, IsDeleted,LastModifiedDate, CloseDate, StageName, probability, Amount, LeadSource, ExpectedRevenue  from Opportunity"}
        
            
    };

    
        
    

});

