

//**********************************Start DDL Commands************************
konysyncSQLLiteDDLCommands = [
 	"create table Contact (Id nvarchar(4000) not null,AssistantName nvarchar(4000),AssistantPhone nvarchar(4000),Birthdate nvarchar(4000),CleanStatus nvarchar(4000),CreatedById nvarchar(4000),CreatedDate nvarchar(4000),Department nvarchar(4000),Description nvarchar(4000),Email nvarchar(4000),EmailBouncedDate nvarchar(4000),EmailBouncedReason nvarchar(4000),Fax nvarchar(4000),FirstName nvarchar(4000),HomePhone nvarchar(4000),IsDeleted integer,IsEmailBounced integer,Jigsaw nvarchar(4000),JigsawContactId nvarchar(4000),Languages__c nvarchar(4000),LastActivityDate nvarchar(4000),LastCURequestDate nvarchar(4000),LastCUUpdateDate nvarchar(4000),LastModifiedById nvarchar(4000),LastName nvarchar(4000),LastReferencedDate nvarchar(4000),LastViewedDate nvarchar(4000),LeadSource nvarchar(4000),Level__c nvarchar(4000),MailingAddress nvarchar(4000),MailingCity nvarchar(4000),MailingCountry nvarchar(4000),MailingLatitude nvarchar(4000),MailingLongitude nvarchar(4000),MailingPostalCode nvarchar(4000),MailingState nvarchar(4000),MailingStreet nvarchar(4000),MasterRecordId nvarchar(4000),MobilePhone nvarchar(4000),Name nvarchar(4000),OtherAddress nvarchar(4000),OtherCity nvarchar(4000),OtherCountry nvarchar(4000),OtherLatitude nvarchar(4000),OtherLongitude nvarchar(4000),OtherPhone nvarchar(4000),OtherPostalCode nvarchar(4000),OtherState nvarchar(4000),OtherStreet nvarchar(4000),OwnerId nvarchar(4000),Phone nvarchar(4000),PhotoUrl nvarchar(4000),ReportsToId nvarchar(4000),Salutation nvarchar(4000),SystemModstamp nvarchar(4000),Title nvarchar(4000),errorCode nvarchar(4000),message nvarchar(4000),queryString nvarchar(4000),konysyncchangetype integer,konysyncversionnumber integer,konysynchashsum nvarchar(4000),primary key (Id))",
 	"create table Contact_HISTORY (AssistantName nvarchar(4000),AssistantPhone nvarchar(4000),Birthdate nvarchar(4000),CleanStatus nvarchar(4000),CreatedById nvarchar(4000),CreatedDate nvarchar(4000),Department nvarchar(4000),Description nvarchar(4000),Email nvarchar(4000),EmailBouncedDate nvarchar(4000),EmailBouncedReason nvarchar(4000),Fax nvarchar(4000),FirstName nvarchar(4000),HomePhone nvarchar(4000),Id nvarchar(4000) not null,IsDeleted integer,IsEmailBounced integer,Jigsaw nvarchar(4000),JigsawContactId nvarchar(4000),Languages__c nvarchar(4000),LastActivityDate nvarchar(4000),LastCURequestDate nvarchar(4000),LastCUUpdateDate nvarchar(4000),LastModifiedById nvarchar(4000),LastName nvarchar(4000),LastReferencedDate nvarchar(4000),LastViewedDate nvarchar(4000),LeadSource nvarchar(4000),Level__c nvarchar(4000),MailingAddress nvarchar(4000),MailingCity nvarchar(4000),MailingCountry nvarchar(4000),MailingLatitude nvarchar(4000),MailingLongitude nvarchar(4000),MailingPostalCode nvarchar(4000),MailingState nvarchar(4000),MailingStreet nvarchar(4000),MasterRecordId nvarchar(4000),MobilePhone nvarchar(4000),Name nvarchar(4000),OtherAddress nvarchar(4000),OtherCity nvarchar(4000),OtherCountry nvarchar(4000),OtherLatitude nvarchar(4000),OtherLongitude nvarchar(4000),OtherPhone nvarchar(4000),OtherPostalCode nvarchar(4000),OtherState nvarchar(4000),OtherStreet nvarchar(4000),OwnerId nvarchar(4000),Phone nvarchar(4000),PhotoUrl nvarchar(4000),ReportsToId nvarchar(4000),Salutation nvarchar(4000),SystemModstamp nvarchar(4000),Title nvarchar(4000),errorCode nvarchar(4000),message nvarchar(4000),queryString nvarchar(4000),konysyncversionnumber integer,konysyncchangetype integer,konysyncreplaysequence integer,konysyncchangetime timestamp,konysynchashsum nvarchar(4000))",
 	"create table Contact_ORIGINAL (Id nvarchar(4000) not null,AssistantName nvarchar(4000),AssistantPhone nvarchar(4000),Birthdate nvarchar(4000),CleanStatus nvarchar(4000),CreatedById nvarchar(4000),CreatedDate nvarchar(4000),Department nvarchar(4000),Description nvarchar(4000),Email nvarchar(4000),EmailBouncedDate nvarchar(4000),EmailBouncedReason nvarchar(4000),Fax nvarchar(4000),FirstName nvarchar(4000),HomePhone nvarchar(4000),IsDeleted integer,IsEmailBounced integer,Jigsaw nvarchar(4000),JigsawContactId nvarchar(4000),Languages__c nvarchar(4000),LastActivityDate nvarchar(4000),LastCURequestDate nvarchar(4000),LastCUUpdateDate nvarchar(4000),LastModifiedById nvarchar(4000),LastName nvarchar(4000),LastReferencedDate nvarchar(4000),LastViewedDate nvarchar(4000),LeadSource nvarchar(4000),Level__c nvarchar(4000),MailingAddress nvarchar(4000),MailingCity nvarchar(4000),MailingCountry nvarchar(4000),MailingLatitude nvarchar(4000),MailingLongitude nvarchar(4000),MailingPostalCode nvarchar(4000),MailingState nvarchar(4000),MailingStreet nvarchar(4000),MasterRecordId nvarchar(4000),MobilePhone nvarchar(4000),Name nvarchar(4000),OtherAddress nvarchar(4000),OtherCity nvarchar(4000),OtherCountry nvarchar(4000),OtherLatitude nvarchar(4000),OtherLongitude nvarchar(4000),OtherPhone nvarchar(4000),OtherPostalCode nvarchar(4000),OtherState nvarchar(4000),OtherStreet nvarchar(4000),OwnerId nvarchar(4000),Phone nvarchar(4000),PhotoUrl nvarchar(4000),ReportsToId nvarchar(4000),Salutation nvarchar(4000),SystemModstamp nvarchar(4000),Title nvarchar(4000),errorCode nvarchar(4000),message nvarchar(4000),queryString nvarchar(4000),konysyncoriginalchangetype integer,konysyncoriginalversionnumber integer,konysynchashsum nvarchar(4000),primary key (Id))",
 	"create table konysyncCHUNKDATA (chunkid int not null,payloadid nvarchar(50) not null,scopename nvarchar(100) not null,chunkdata text,timestamp nvarchar(50),primary key (chunkid, payloadid, scopename))",
 	"create table konysyncCHUNKMETAINFO (payloadid nvarchar(50) not null,scopename nvarchar(100) not null,chunkacknowledged int,chunksize int,chunkcount int,chunkhashsum nvarchar(35),chunkdiscarded int,primary key (payloadid, scopename))",
 	"create table konysyncDIAGNOSTICS (id bigint not null,action nvarchar(100),details nvarchar(2000),timestamp timestamp,primary key (id))",
 	"create table konysyncMETAINFO (id bigint not null,versionnumber int,lastserversynccontext nvarchar(1000),lastserveruploadsynccontext nvarchar(1000),lastschemaupgradesynccontext nvarchar(1000),filtervalue nvarchar(1000),replaysequencenumber integer,lastgeneratedid integer,scopename nvarchar(100),primary key (id))",
 	"create table konysyncPENDINGUPLOADREQUESTINFO (scopename nvarchar(100) not null,uploadrequest text,objectlevelinfo text,insertcount int,updatecount int,deletecount int,batchinsertcount int,batchupdatecount int,batchdeletecount int,uploadlimit int,primary key (scopename))"
]
//**********************************End DDL Commands************************