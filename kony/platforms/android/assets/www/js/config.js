
MBaaSConfig ={
    "DefaultUsername" : "sreenivasn@gmail.com", 
    "DefaultPassword" : "Kony@#214Q2HZyOWh5WcwIz2BlmF3N8LD",    
    "AppKey" : "68fac5743b3667b1d20dbd97485f6203", 
    "AppSecret" : "29971de24e4a912bf26c4184c4209585", 
    "IdentityService" : "SyncDemoIdService",
    "AccountIntegrationService":"AccountIntgService",
    "LeadIntegrationService":"LeadIntgService",
    "ContactIntegrationService":"ContactSyncIntg",
    "OpportunitiesIntegrationService":"OpportunityIntgService",
    "ServiceURL" : "https://100003520.auth.konycloud.com/appconfig",
    "KMSID":"sreenivasulu.reddy@kony.com",    
    "getContactQuery":{ "queryString":"Select Id, FirstName, LastName, Title, AccountId, Phone, email, Department,Fax,ReportsToId, BirthDate, IsDeleted, LastModifiedDate from Contact"},
    "getAccountQuery":{ "queryString":"Select Id, AccountNumber, Name, Type, Rating,IsDeleted,Phone,Fax,LastModifiedDate, Website, AnnualRevenue, BillingAddress from Account"},
    "getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL,IsDeleted, LastModifiedDate FROM Lead"},
    "getOpportunityQuery":{ "queryString":"Select Id, Name, AccountId, Type, IsDeleted,LastModifiedDate, CloseDate, StageName  from Opportunity"}
};
