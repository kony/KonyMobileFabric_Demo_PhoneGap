

MBaaSConfig ={
    "DefaultUsername" : "sreenivasn@gmail.com", 
    "DefaultPassword" : "Kony@#214Q2HZyOWh5WcwIz2BlmF3N8LD",    
    "AppKey" : "27ce4b1e7a11a43b51a4c52859190c2b", 
    "AppSecret" : "abea6c780bb71473abccf2f164cbf7c9", 
    "IdentityService" : "SyncDemoIdService",
    "AccountIntegrationService":"AccountIntgService",
    "LeadIntegrationService":"LeadIntgService",
    "ContactIntegrationService":"ContactSyncIntg",
    "OpportunitiesIntegrationService":"OpportunityIntgService",
    "ServiceURL" : "https://100003520.auth.konycloud.com/appconfig",
    "KMSID":"sreenivasulu.reddy@kony.com",    
    "getContactQuery":{ "queryString":"Select Id, FirstName, LastName, Title, AccountId, Phone, email, Department,Fax,ReportsToId, BirthDate, IsDeleted, LastModifiedDate from Contact"},
    "getAccountQuery":{ "queryString":"Select Id, AccountNumber, Name, Type, Rating,IsDeleted,Phone,Fax,LastModifiedDate, Website, AnnualRevenue, BillingAddress, BillingCity, BillingStreet, BillingState from Account"},
    "getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL,IsDeleted, LastModifiedDate FROM Lead"},
    "getOpportunityQuery":{ "queryString":"Select Id, Name, AccountId, Type, IsDeleted,LastModifiedDate, CloseDate, StageName, probability, Amount, LeadSource, ExpectedRevenue  from Opportunity"}
};
