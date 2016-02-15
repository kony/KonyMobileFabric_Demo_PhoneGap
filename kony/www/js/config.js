MBaaSConfig ={

    //"DefaultUsername" : "crmsampleapp@gmail.com",

    //"DefaultPassword" : "sfdcsampleapp@123",

    "AppKey" : "8d350449724651922a99f053632e0fbf",

    "AppSecret" : "3446aa2eb49bd3243b2c4ccffa0406f5",

    "IdentityService" : "SyncDemoIdServiceTestDrive",

    "ServiceURL" : "http://ec2-52-23-210-157.compute-1.amazonaws.com:8080/authService/100000002/appconfig",

    "AccountIntegrationService":"AccountIntgServiceTD",
    "LeadIntegrationService":"LeadIntgServiceTD",
    "ContactIntegrationService":"ContactIntgServiceTD",
    "OpportunitiesIntegrationService":"OpportunityIntgServiceTD",

    //"KMSID":"sreenivasulu.reddy@kony.com",    

    "getContactQuery":{ "queryString":"Select Id, FirstName, LastName, Title, AccountId, Phone, email, Department,Fax,ReportsToId, BirthDate, IsDeleted, LastModifiedDate from Contact"},
    "getAccountQuery":{ "queryString":"Select Id, AccountNumber, Name, Type, Rating,IsDeleted,Phone,Fax,LastModifiedDate, Website, AnnualRevenue, BillingAddress, BillingCity, BillingStreet, BillingState from Account"},
    "getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL,IsDeleted, LastModifiedDate FROM Lead"},
    "getOpportunityQuery":{ "queryString":"Select Id, Name, AccountId, Type, IsDeleted,LastModifiedDate, CloseDate, StageName, probability, Amount, LeadSource, ExpectedRevenue  from Opportunity"}


};