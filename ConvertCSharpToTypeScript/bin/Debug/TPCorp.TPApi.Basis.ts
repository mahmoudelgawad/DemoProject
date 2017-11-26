module TPApp{
export enum AvailableClientType {
Standard = 0,
Template = 1
}

export enum ClientBasisState {
Unknown = 0,
Setup = 1,
Ready = 2
}

export interface AvailableClient {
ClientId : string;
Code : string;
Name : string;
ClientType : AvailableClientType;
State : ClientBasisState;
Comment : string;
LastLogon : Date;
GroupName : string;
}

export interface AvailableClientDetails1 {
Comment : string;
GroupName : string;
}

export interface AvailableClientUser {
ClientUserId : string;
ClientUserName : string;
Access : UserClientAccess;
}

export interface AvailableClientExtData {
Data : AvailableClient;
ClientUsers : AvailableClientUser[];
}

export interface ClientBasisInfo {
IsInitialized : boolean;
AdminUserId : string;
UserAccess : ClientUserAccess[];
}

export interface ClientUserAccess {
UserId : string;
ClientUserId : string;
ClientUserName : string;
}

export interface ClientDetails {
ShardId : string;
Code : string;
Name : string;
OwningUserId : string;
AdminUserId : string;
FeatureList : string;
JsonConfig : string;
}

export interface ClientData {
Id : string;
Details : ClientDetails;
}

export interface ClientDataStandardListItem {
Data : ClientData;
ShardName : string;
UserName : string;
}

export interface ClientGrantAuthTokenInfo {
SystemAdministratorId : string;
ShardId : string;
AdminUserId : string;
}

export interface ClientMainInfo {
IsForAutoTest : boolean;
}

export interface ClientShardDetails {
Name : string;
ConnectionString : string;
Description : string;
IsConfidential : boolean;
IsForAutoTest : boolean;
SchemaName : string;
MasterConnectionString : string;
}

export interface ClientShardData {
Id : string;
Details : ClientShardDetails;
}

export interface ClientShardShortData {
Id : string;
Name : string;
Description : string;
IsConfidential : boolean;
IsForAutoTest : boolean;
}

export interface Constants {
ServiceIdentQuery : string;
ServiceIdentCmd : string;
}

export interface BasisCountryDetails {
Code : string;
Name : string;
RegionId : string;
DefaultCurrencyId : string;
}

export interface BasisCountryData {
Id : string;
Details : BasisCountryDetails;
}

export interface BasisCurrencyDetails {
Code : string;
UnitName : string;
}

export interface BasisCurrencyData {
Id : string;
Details : BasisCurrencyDetails;
}

export interface DefaultLogonInfo {
ClientId : string;
ClientUserId : string;
}

export enum RoleType {
SystemMonitor = 0,
SystemOperator = 1,
ClientAdministration = 2,
Staff = 3,
AlphaTester = 4,
UserAuthenticationSetup = 5,
WorkFlow = 6
}

export enum BasisClaimsType {
ListUsers = 0,
BasicView = 1,
Authentication = 2,
OperationsView = 3,
BusinessAdminView = 4,
BusinessAdminUserAccountCreation = 5,
BusinessAdminBasicModify = 6,
OperationsAdmin = 7,
ReceiveBasisMsg = 8,
SystemSessionAccess = 9,
BusinessAdminCrossClientModify = 10,
TimeKeeper = 11,
AutoTester = 12,
PublicWebUserAuthentication = 13,
PublicWebUserSignUp = 14,
BasisMigrations = 15,
ManageOwnTasks = 16,
ProcessTasksQueue = 17,
Staff = 18,
AlphaTest = 19,
UserAuthenticationSetup = 20,
WorkFlow = 21
}

export enum OutboundBasisMessageType {
Unknown = 0,
RefreshClientApiStatus = 1,
RefreshClientMainDetailsFromBasis = 2
}

export enum SystemUserType {
Unknown = 0,
SystemAdministrator = 1,
PublicWeb = 2,
Authenticator = 3,
WebApp = 4
}

export interface DemoRequestDetails {
Name : string;
Job : string;
Company : string;
Email : string;
Did : string;
CountryId : string;
}

export interface BasisCountry {
}

export interface BasisCurrency {
}

export interface BasisRegion {
}

export interface UserAccessApplication {
}

export interface Task {
}

export interface OutboundBasisMessage {
}

export interface UserActivationCode {
}

export interface UserExternalSystem {
}

export interface UserName {
}

export interface Feed {
}

export interface FeedUpdate {
}

export enum BasisAssertionErrorCode {
Unknown = 0,
UserRoleDoesNotBelongToRequiredUser = 1,
ApiUserUserBelongsToDifferentClient = 2
}

export enum TaskErrorCode {
UnknownError = 0,
ServiceIdentificationDoNotExist = 1,
OperationNameIsInvalid = 2
}

export enum SetupErrorCode {
obsolete_CannotDeleteSystemAdministrator = 0,
obsolete_CannotChangeTypeOfSystemAdministrator = 1,
obsolete_InvalidSystemUserAuthentication = 2,
CannotApproveUAAToSystemUser = 3,
obsolete_UserAlreadyHasLinkedInAuth = 4,
obsolete_LinkedInMemberIdAlreadyAssigned = 5,
obsolete_PropertyCannotBeChangedBecauseActiveInPeriod = 6,
obsolete_MultiplePrincipalCompanies = 7,
obsolete_NonUniqueERPNumber = 8,
obsolete_UserMustHaveAName = 9,
obsolete_UserSystemTypeCannotBeChanged = 10,
obsolete_BasisUserAlreadyMappedToOtherClientUser = 11,
SchemaNameIsInvalid = 12,
obsolete_CannotDeleteClientAdministrator = 13,
obsolete_MultipleClientUsersMappedToSameContactPerson = 14
}

export enum UserErrorCode {
MissingFullName = 0,
MissingEmail = 1,
EmailAddressAlreadyExist = 2,
UserNameAlreadyExists = 3,
CannotDeleteSystemAdministrator = 4,
CannotChangeTypeOfSystemAdministrator = 5,
UserAlreadyHasLinkedInAuth = 6,
LinkedInMemberIdAlreadyAssigned = 7,
UserIsNotApiUser = 8,
LinkedInAuthNotAllowedForApiUser = 9,
SystemUserIsNotAllowedForApiUser = 10,
NewPasswordIsInvalid = 11,
NoExternalUser = 12,
ExternalUserIntegrationError = 13,
ExternalUserBadUserOrPassword = 14
}

export enum AccessErrorCode {
UnknownError = 0,
CurrentUserDoNotHaveAnyAccessToClient = 1,
CurrentUserDoesNotHaveSetupAccessToClient = 2,
InvalidUserActivationCode = 3,
ActivationCodeAlreadyUsed = 4,
ActivationCodeNotValidYet = 5,
ActivationCodeHasExpired = 6,
UserIsAlreadyActivated = 7
}

export enum SystemErrorCode {
SchemaNameIsInvalid = 0
}

export interface AllBasisErrors {
}

export interface ExchangeRateDetails {
FeedTimestamp : Date;
FromCurrencyId : string;
ToCurrencyId : string;
ExchangeRate : number;
}

export interface ICmdBasisApi {
}

export interface IQueryBasisApi {
}

export interface LoginOverview {
BasisRoles : BasisRolesType[];
UserBasisRoles : LoginRoleInfo[];
MaySwitchClient : boolean;
IsMgmtOnly : boolean;
HasAlphaFeatures : boolean;
HasWorkFlow : boolean;
}

export interface NeededClientUpdates {
ClientId : string;
ShardId : string;
AdminUserId : string;
}

export interface OutboundBasisMessageDetails {
MessageType : OutboundBasisMessageType;
ClientId : string;
CreatedTime : Date;
}

export interface OutboundBasisMessageData {
Id : string;
Details : OutboundBasisMessageDetails;
}

export interface BasisRegionDetails {
Code : string;
Name : string;
}

export interface BasisRegionData {
Id : string;
Details : BasisRegionDetails;
}

export enum BasisRolesType {
UserAccount = 0,
Developer = 1,
Operations = 2
}

export interface RoleData {
RoleId : string;
RoleType : RoleType;
RoleName : string;
}

export interface TaskCreationDetails {
CallDetails : OperationCallDetails;
DelayExecutionUntil : Date;
}

export interface TaskDetails {
CreatedTime : Date;
MayNotRunBefore : Date;
FailureCount : number;
CommandId : string;
RunAsUserId : string;
ClientId : string;
ClientUserId : string;
Priority : number;
}

export interface UpdateDetails {
BasisUpdateCount : number;
NeededClientUpdates : NeededClientUpdates[];
}

export interface UserAccessApplicationShortDetails {
Id : string;
UaaKey : string;
}

export interface UserAccessApplicationDetails {
UaaKey : string;
LinkedInMemberId : string;
FullName : string;
Email : string;
UserMessage : string;
OurResponse : string;
Rejected : boolean;
Active : boolean;
ApprovedUserId : string;
}

export interface UserAccessApplicationData {
Id : string;
Details : UserAccessApplicationDetails;
}

export interface UserAccessApplicationDataAux2 {
Id : string;
FullName : string;
EMail : string;
Rejected : boolean;
Active : boolean;
TimeCreated : Date;
TimeUpdated : Date;
ApprovedUserId : string;
}

export interface UserAccessDetails {
UserId : string;
ClientId : string;
}

export interface UserActivationCodeData {
Id : string;
Details : UserActivationCodeDetails;
}

export interface UserNameDetails {
UserName : string;
}

export interface UserActivationCodeDetailsShort {
Token : number[];
NotValidBefore : Date;
NotValidAfter : Date;
HumanReadableUserActivationCode : string;
}

export interface UserActivationCodeDetails {
ShortDetails : UserActivationCodeDetailsShort;
UserId : string;
UsedOn : Date;
}

export interface UserActivationResult {
RedirectUrl : string;
}

export interface UserClientAccess {
ViewAccess : boolean;
SetupAccess : boolean;
}

export interface UserListFilters {
IncludeAutoTestUsers : boolean;
IncludeSystemUsers : boolean;
IncludeAPIUsers : boolean;
}

export interface UserShortDetails {
Name : string;
Email : string;
IsAutoTest : boolean;
SystemUserType : SystemUserType;
ApiUserForClientId : string;
ExtUserName : string;
}

export interface UserShortData {
UserId : string;
Details : UserShortDetails;
}

export interface UserShortDataAux1 {
UserId : string;
HumanReadableId : string;
SystemUserTypeName : string;
Details : UserShortDetails;
ApiUserClientShortName : string;
}

export interface UserDetails {
HumanReadableId : string;
ApiForClientUserHumanReadableId : string;
ShortDetails : UserShortDetails;
LinkedInAuth : string[];
BasisRoles : RoleType[];
UserActivationCode : UserActivationCodeData;
HumanReadableUserActivationCode : string;
NewUserActivationCode : UserActivationCodeDetailsShort;
UserName : UserNameDetails;
}

export interface UserLogonDetails {
UserId : string;
Name : string;
}

export interface UserAuthDetails {
SystemUserType : SystemUserType;
RoleTypes : RoleType[];
}

export interface UserRoleData {
Id : string;
RoleId : string;
RoleName : string;
RoleType : RoleType;
}

export interface UserDefaultAuthDetails {
UserId : string;
DefaultRoleIds : Role[];
}

export interface UserExternalSystemData {
Id : string;
Details : UserExternalSystemDetails;
}

export interface UserExternalSystemDetails {
Name : string;
Description : string;
}

export interface ExternalSystenLogOnResult {
FullUri : string;
}

export interface UserProfileBasicData {
Name : string;
Email : string;
UserName : string;
ExtUserName : string;
UserIdHumanReadable : string;
ExternalSystems : UserExternalSystemData[];
}

export interface WebsiteDetails {
FullAddress : string;
}

export interface OperationsDashboardData {
OperationsUAADashboardData : OperationsUAADashboardData;
ClientShardData : OperationsClientShardData;
}

export interface OperationsUAADashboardData {
TotalActiveCount : number;
}

export interface OperationsClientShardData {
ClientShardCount : number;
}

}

