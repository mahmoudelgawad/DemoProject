module TPApp{
export interface ParsedResult {
IsOk : boolean;
ErrorRef : string;
Message : string;
WorkBookParseInfo : any;
}

export interface ParsedResultBadFile {
IsOk : boolean;
ErrorRef : string;
Message : string;
WorkBookParseInfo : any;
}

export interface ParsedResultOk {
IsOk : boolean;
ErrorRef : string;
Message : string;
WorkBookParseInfo : any;
}

export interface ParsedResultSpreadsheetContentError {
IsOk : boolean;
Message : string;
ErrorRef : string;
WorkBookParseInfo : any;
}

export interface ParsedResultInternalError {
IsOk : boolean;
ErrorRef : string;
Message : string;
WorkBookParseInfo : any;
}

export interface ParsedResultInternalErrorLimitReached {
IsOk : boolean;
ErrorRef : string;
Message : string;
WorkBookParseInfo : any;
}

export interface PeriodDataReceiver {
AcceptUploadMaxBytes : number;
}

export interface MasterPageView {
SessionKey : string;
UserFullName : string;
ClientKey : string;
ClientName : string;
ServerSiteRoot : string;
IsMgmtOnly : boolean;
ClientShortDetails : ClientShortDetails;
CanSwitchClient : boolean;
HasRole_System : boolean;
HasRole_Operations : boolean;
HasRole_UserManagement : boolean;
HasRole_UAA : boolean;
HasRole_ClientsManagement : boolean;
HasRole_Development : boolean;
HasRole_Dashboard : boolean;
HasRole_DataUpload : boolean;
HasRole_ManageTP : boolean;
HasRole_AnalyseTP : boolean;
HasRole_Administration : boolean;
HasRole_AlphaTester : boolean;
HasRole_WorkFlow : boolean;
Roles : RoleInfo[];
UserPictureUrl : string;
HasClientLogo : boolean;
ClientLogoUrl : string;
}

export interface PeriodInputDataFileView {
FileId : string;
Title : string;
FileName : string;
UploadUserName : string;
UploadTime : Date;
HasSourceFile : boolean;
}

export interface ValidationFeedbackJson {
MayAccept : boolean;
AcceptTitle : string;
}

export interface PeriodInputValidationView {
PeriodInputDataId : string;
InputDataRows_Interval : PeriodInputDataRow[];
InputDataRows_File : PeriodInputDataRow[];
CogsPerEntities_Sales : string[];
Issues : PeriodInputIssue[];
FeedbackJson : ValidationFeedbackJson;
Intervals : PeriodInputDataPeriodData[];
Files : PeriodInputDataFileView[];
}

export interface PeriodInputIssue {
Severity : PeriodInputDataIssueSeverity;
Message : string;
CompanyEntityId : string;
}

export interface Address {
AddressLine : string;
AddressLine2 : string;
ZipCode : string;
City : string;
CountryId : string;
}

export interface BasisDataConverter {
}

export interface BenchmarkListItem {
Id : string;
RegionName : string;
CountryName : string;
PLIName : string;
ValuePct25 : number;
ValuePct50 : number;
ValuePct75 : number;
}

export interface BenchmarkDetails {
Id : string;
Region : string;
Country : string;
FromFinancialYear : number;
ToFinancialYear : number;
LastYearOfUse : number;
PLI : PLI;
ValuePct25 : number;
ValuePct50 : number;
ValuePct75 : number;
}

export interface ContactPersonData {
Name : string;
Title : string;
Address : Address;
Email : string;
DirectPhone : string;
}

export interface ClientAccountData {
CompanyAccountNumber : string;
CompanyName : string;
CompanyAddress : Address;
CompanyMainPhone : string;
CompanyWebsite : string;
ContactPersonName : string;
ContactPersonEmail : string;
ContactPersonPhone : string;
ContactPersons : ContactPersonData[];
}

export interface CreateApiUserReq {
Name : string;
RoleId : string;
SessionKey : string;
}

export interface ClientApiAuthDetailsEdit {
Id : string;
Name : string;
UserId : string;
ClientUserId : string;
Role : string;
Disabled : boolean;
UserName : string;
AuthCreateTime : Date;
AuthExpires : Date;
PasswordHint : string;
}

export interface ClientApiAuthNew {
UserName : string;
AuthCode : string;
}

export interface ClientListItem {
Id : string;
HumanReadableId : string;
Code : string;
Name : string;
ShardId : string;
ShardHumanReadableId : string;
ShardName : string;
OwnerId : string;
OwnerHumanReadableId : string;
OwnerName : string;
FeatureList : string;
JsonConfig : string;
}

export interface ClientRoleListItem {
Id : string;
Name : string;
}

export interface ClientShardDetails {
Id : string;
HumanReadableId : string;
Name : string;
ConnectionString : string;
MasterConnectionString : string;
Description : string;
IsConfidential : boolean;
IsForAutoTest : boolean;
SchemaName : string;
EnsureDatabaseReady : boolean;
}

export interface ClientUserListItem {
Id : string;
Name : string;
ClientUserEmail : string;
}

export interface ClientUserDetails {
Id : string;
Name : string;
ClientUserEmail : string;
StdRole : StdClientUserRole;
IsAdministrator : boolean;
ContactPersonId : string;
CompanyName : string;
ContactPersonOrder : number;
UserCategory : ClientUserCategory;
DirectPhone : string;
MappedToUserIdHR : string;
ClientRoleId : string;
}

export interface CompanyEntityListItem {
Id : string;
Name : string;
ERPNumber : string;
RegionName : string;
CountryName : string;
LocalCurrencyCode : string;
FinancialYearEndDate : Date;
FinancialYearEnd : YearIntervalType;
TypeName : string;
TPUnitTypeName : string;
CompanyType : CompanyEntityType;
}

export interface ConversionHelper {
}

export interface DashboardOptions {
IncludeDraftData : boolean;
}

export interface DashboardContent {
Periods : DashboardPeriod[];
SelectedPeriodId : string;
SelectedCurrencyId : string;
Currencies : DashboardCurrency[];
LatestUpdate : Date;
Companies : DashboardCompany[];
Countries : DashboardCountry[];
FinancialDataSource : FinancialDataSource;
}

export interface DashboardPeriod {
PeriodId : string;
Title : string;
Tiles : DashboardTileDetails2[];
}

export interface DirectEditFileStatus {
LastUpdated : Date;
Status : FileStatus;
}

export interface DirectEditFile {
Url : string;
KeyToken : string;
}

export interface DrillDownReport {
ReportPeriodName : string;
Columns : DrillDownColumn[];
MainGroup : DrillDownGroup;
Currencies : DashboardCurrency[];
GroupCurrencyId : string;
Accounts : DrillDownAccount[];
}

export interface DrillDownAccount {
ValueType : ReportValueType;
Title : string;
}

export interface DrillDownColumn {
Title : string;
AccountType : ReportValueType;
}

export interface DrillDownGroup {
Title : string;
SortKey : string;
ShowForAccounts : ReportValueType[];
SubGroups : DrillDownGroup[];
Values : DrillDownValue[];
}

export interface DrillDownValue {
AmountInCurrencies : DrillDownAmount[];
TotalsInGroupCurrency : AccountAmountGroupCurrency[];
}

export interface AccountAmountGroupCurrency {
AccountType : ReportValueType;
TotalInGroupCurrency : number;
}

export interface DrillDownAmount {
CurrencyId : string;
CurrencyCode : string;
Amount : number;
ExchangeRate : number;
AccountType : ReportValueType;
}

export interface InitialSetupData {
CompanyAccount : ClientAccountData;
GroupTPPolicies : InitialSetup_GroupTPPolicies;
DataRetrieval : InitialSetup_DataRetrieval;
}

export interface InitialSetupData_Complete {
MainData : InitialSetupData;
Companies : CompanyEntityListItem[];
DistBenchmarks : BenchmarkListItem[];
MfgsBenchmarks : BenchmarkListItem[];
GroupCurrencyCode : string;
InternalUsers : ClientUserListItem[];
ExternalUsers : ClientUserListItem[];
}

export interface InitialSetupStatus {
MayBeApproved : boolean;
ErrorMessage : string;
}

export interface InitialSetup_CompanyEntity {
CompanyName : string;
ERPNumber : string;
Region : string;
Country : string;
LocalCurrency : string;
FinancialYearEnd : Date;
CompanyEntityType : CompanyEntityType;
}

export interface InitialSetup_DataRetrieval {
FCSetup : FCSetup;
}

export interface InitialSetup_GroupTPPolicies {
GroupCurrency : string;
IntercompanyTransactionName : string;
TPProfile : TPProfile;
SetupMode : InitialSetupMode;
HasCompanyTypePrincipal : boolean;
HasCompanyTypeDistributors : boolean;
HasCompanyTypeManufacturers : boolean;
HasServiceCompanies : boolean;
HasIPCompanies : boolean;
Dist : InitialSetup_GroupTPPolicies_DistOrMfg;
Mfgs : InitialSetup_GroupTPPolicies_DistOrMfg;
AdjustmentFrequencyMonths : Frequency;
IntercompanyTransactionType : IntercompanyTransactionType;
TPMechanism : TPAdjustmentMechanism;
TPLocation : TPAdjustmentLocation;
ExchangeRateSource : ExchangeRateSource;
FinancialDataSource : FinancialDataSource;
DataFeedMode : DataFeedMode;
DataFeedFrequency : Frequency;
FCSetup : FCSetup;
}

export interface InitialSetup_GroupTPPolicies_DistOrMfg {
TPMethod : TPMethod;
PLI : PLI;
ContactWithBenchmarkRenewal : boolean;
TargetProfitMargin : TargetProfitMargin;
FixedMarginPct : number;
OORResults : OORResults;
}

export interface ListOption {
Id : string;
Title : string;
ToolTip : string;
}

export interface CountryListOption {
Code : string;
RegionId : string;
LocalCurrencyId : string;
Id : string;
Title : string;
ToolTip : string;
}

export interface TPUnitListOption {
Id : string;
Title : string;
ToolTip : string;
}

export interface LogOnResult {
DeviceKey : string;
SessionKey : string;
}

export interface CustomModelBinders {
}

export interface ArrayIdBinder<TEntity> {
}

export interface IdModelBinder<TEntity> {
}

export interface OperationsDashboardData {
InstanceCount : number;
SessionCount : number;
LastHeartbeatStart : Date;
LastHeartBeatEnd : Date;
LastHeartbeatText : string;
ClientShardCount : number;
NumUaaUnprocessed : number;
LatestUaaUnprocessed : Date;
JobCount : number;
ExecutingTaskCount : number;
RunnableTaskCount : number;
}

export interface CreatePreviousPeriodsData {
FromDate : Date;
ToDate : Date;
CreateAsSinglePeriod : boolean;
SessionKey : string;
}

export interface PeriodRequestData {
id : string;
}

export interface PeriodInputDataCorrectionJson {
PeriodInputDataId : string;
ContentId : string;
PeriodFromDate : Date;
PeriodToDate : Date;
CompanyName : string;
CurrencyId : string;
CurrencyCode : string;
Comment : string;
DataPoints : DataCorrectionDataPoint[];
}

export interface DataCorrectionDataPoint {
Type : DataPointEnum;
Title : string;
PreviousValue : number;
UserInput : number;
CorrectionDetails : DataCorrectionDataPointCorrectionActionDetails;
}

export interface DataCorrectionDataPointCorrectionActionDetails {
OriginalValue : number;
CorrectionTime : Date;
CorrectionUserId : string;
CorrectionUserName : string;
}

export interface PreviousCorrection {
UserName : string;
PreviousValue : number;
Comment : string;
}

export interface PeriodEntityListItem {
Id : string;
PeriodName : string;
PeriodStartDate : Date;
FinancialYear : string;
StatusName : string;
PeriodStatus : PeriodStatus;
}

export enum ReportType {
Unknown = 0,
GroupOverview = 1,
CountryReport = 2,
CFOBriefing = 3,
TPPolicy = 4
}

export interface ReportOverview {
Categories : ReportCategory[];
}

export interface ReportCategory {
ReportType : ReportType;
Reports : ReportInfo[];
}

export interface ReportInfo {
ReportTitle0 : string;
ReportTitle1 : string;
ReportTitle2 : string;
AboutText : string;
ReportId : string;
}

export interface ReportContent {
ReportTitle : string;
}

export interface ReportWhatIf_Query {
NewDistTargetProfitMargin : TargetProfitMargin;
NewDistTargetProfitMarginOther : number;
NewMfgsTargetProfitMargin : TargetProfitMargin;
NewMfgsTargetProfitMarginOther : number;
DistNewPLI : PLI;
MfgsNewPLI : PLI;
}

export interface Setup_CompanyEntity {
CompanyName : string;
ERPNumber : string;
Country : string;
ParentUnitId : string;
LocalCurrency : string;
FinancialYearEnd : Date;
CompanyEntityType : CompanyEntityType;
TPUnitType : TPUnitType;
BaseType : CompanyEntityType;
PLI : PLI;
FixedTargetMarginPct : number;
ActiveFromDate : Date;
}

export interface NewCompanyInfo {
NewCompanyActiveFromDate : Date;
}

export interface Setup_ExchangeRateEntity {
CurrencyId : string;
ExchangeRate : number;
EffectiveFrom : Date;
HistoryRates : any[];
}

export interface UploadResult {
Ok : boolean;
Msg : string;
FileName : string;
FileSize : number;
JsonResultObject : FileFeedback;
PeriodInputDataFileId : string;
}

export interface UserAccessApplicationData {
Id : string;
FullName : string;
EMail : string;
LinkedInMemberId : string;
UserMessage : string;
Active : boolean;
Rejected : boolean;
ApprovedUserId : string;
OurMessage : string;
TimeCreated : Date;
TimeUpdated : Date;
}

export interface UserBasisRoleState {
UserRoleId : string;
CurrentlyEnabled : boolean;
}

export interface ExtUserSetNewPassword {
CurrentPassword : string;
NewPassword : string;
}

export interface AvailableClientListItem {
ClientId : string;
Code : string;
Name : string;
Comment : string;
LastLogon : Date;
GroupName : string;
}

export interface WebApiRequestBase {
SessionKey : string;
}

export interface UpdateData {
OriginalData : any;
UpdatedData : any;
SessionKey : string;
}

export interface DeleteData {
Ids : string[];
SessionKey : string;
}

export interface FileFeedback {
ActiveSheetName : string;
Sheets : FileFeedback_Sheet[];
}

export interface FileFeedback_Sheet {
SheetName : string;
CompanyEntityNames : string[];
DataPointNames : string[];
Validation : PeriodInputDataFileSheetValidation;
}

export interface BasicRoleInfo {
Id : string;
Name : string;
Enabled : boolean;
}

export interface RoleInfo {
CssClass : string;
IdEncoded : string;
Name : string;
Enabled : boolean;
}

}

