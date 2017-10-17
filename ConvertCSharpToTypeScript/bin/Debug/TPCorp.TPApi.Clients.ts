export interface ActionDetails {
UserId : string;
Time : Date;
}

export interface ActionData {
Id : string;
Details : ActionDetails;
}

export interface AddressDetails {
Line1 : string;
Line2 : string;
ZipCode : string;
City : string;
CountryId : string;
}

export interface AdjustmentsOverview {
Overviews : TPCompanyEntityCalcDataAux1[];
Invoices : TPInvoicePresentation[];
ExchangeRates : ExchangeRateAuxData1[];
AdjustmentOverviewFrom : TPOverviewEntity[];
AdjustmentOverviewTo : TPOverviewEntity[];
OverviewTotals : TPOverviewTotal[];
LatestVersion : string;
}

export interface ApiConfiguration {
IsApiEnabled : Boolean;
}

export interface ClientApiAuthDetails {
UserId : string;
AuthCreateTime : Date;
Disabled : Boolean;
ClientUserId : string;
UserName : string;
AuthExpires : string;
PasswordHint : string;
}

export interface ClientApiAuthDataAux1 {
Id : string;
Details : ClientApiAuthDetails;
Name : string;
}

export interface BenchmarkDataAux1 {
Id : string;
Details : BenchmarkDataInitial;
RegionName : string;
CountryName : string;
}

export interface BenchmarkDataInitial {
CompanyType : CompanyType;
Region : string;
Country : string;
Content : BenchmarkDataDetails;
}

export interface BenchmarkDataDetails {
ValuePct100 : string;
ValuePct75 : string;
ValuePct50 : string;
ValuePct25 : string;
ValuePct0 : string;
Period : string;
BenchmarkRenewal : string;
FromFinancialYear : string;
ToFinancialYear : string;
LastYearOfUse : string;
PLI : string;
}

export interface ClientBasisInfo {
IsInitialized : Boolean;
AdminUserId : string;
UserAccess : ClientUserAccess[];
}

export interface ClientUserAccess {
UserId : string;
ClientUserId : string;
ClientUserName : string;
}

export interface ClientBasisMasterData {
Code : string;
Name : string;
FeatureList : string;
JsonConfig : string;
}

export interface ClientContactPersonDetails {
OrderNumber : number;
Name : string;
Title : string;
Address : AddressDetails;
Email : string;
DirectPhone : string;
}

export interface ClientContactPersonData {
Id : string;
Details : ClientContactPersonDetails;
}

export interface ClientInitializationDetails {
AdminUserId : string;
BasisAdminUser : string;
AdminUserName : string;
ClientCode : string;
ClientName : string;
MasterData : ClientMasterData;
TPInitialSettings : TPInitialSettings;
}

export interface TPInitialSettingsCompanyType {
Id : string;
BenchmarkCollectionId : string;
}

export interface TPInitialSettings {
InitialSetupDataId : string;
TPProfile : string;
GroupCurrencyId : string;
GroupCurrencyDetails : string;
DistSettings : TPInitialSettingsCompanyType;
MfgsSettings : TPInitialSettingsCompanyType;
}

export interface ClientLogo {
Url : string;
}

export interface ClientMasterData {
CompanyLegalName : string;
CompanyWebsite : string;
CompanyMainPhone : string;
ContactPersonName : string;
ContactPersonEmail : string;
ContactPersonPhone : string;
CompanyAddress : AddressDetails;
}

export enum StdClientUserRole {
Unknown : 0,
RegularUser : 1,
Advisor : 2,
DataLoader : 3
}

export enum ClientRoleType {
Unknown : 0,
Setup : 1,
DataLoad : 2,
Dashboard : 3,
AcceptLoadedData : 4,
CalculateAdjustments : 5
}

export interface ClientRoleDetails {
Name : string;
StdRole : string;
}

export interface ClientRoleData {
Id : string;
Details : ClientRoleDetails;
}

export interface ClientRoleDataAux1 {
Id : string;
Details : ClientRoleDetails;
Permissions : ClientRoleType[];
}

export interface ClientRolePermissionData {
Id : string;
ClientRoleId : string;
RoleType : ClientRoleType;
}

export interface PeriodShortDetails {
PeriodId : string;
Name : string;
}

export interface ClientTpShortDetails {
TPProfile : TPProfile;
BaseCurrencyId : string;
BaseCurrencyCode : string;
CompanyTypes : CompanyEntityType[];
}

export interface ClientShortDetails {
Code : string;
Name : string;
ClientState : ClientState;
TpShortDetails : string;
}

export interface ClientUserDetails {
Name : string;
SystemUserType : string;
ClientUserEmail : string;
MappedToUser : string;
ContactPersonId : string;
CompanyName : string;
UserCategory : ClientUserCategory;
DirectPhone : string;
}

export interface ClientUserDetailsAux1 {
Details : ClientUserDetails;
ClientRoleIds : ClientRole[];
}

export interface ClientUserDataAux1 {
Id : string;
Details : ClientUserDetails;
UserEmail : string;
IsAdministrator : Boolean;
ClientUserOrderIndex : string;
}

export interface ClientUserDataAux2 {
Id : string;
Details : ClientUserDetails;
UserEmail : string;
IsAdministrator : Boolean;
ClientUserOrderIndex : string;
ClientRoles : ClientRole[];
}

export interface ClientUserShortData {
Id : string;
Name : string;
}

export interface CompanyEntityDetails {
Name : string;
ERPNumber : string;
LocalCurrency : string;
OrderIndex : string;
Type : CompanyEntityType;
Country : string;
FinancialYearEndDate : Date;
FinancialYearEnd : YearIntervalType;
ParentUnitId : string;
PLI : string;
FixedTargetMarginPct : string;
TPUnitType : TPUnitType;
BaseType : CompanyEntityType;
}

export interface CompanyEntityData {
Id : string;
Details : CompanyEntityDetails;
}

export interface CompanyEntityDetailsHistory {
CompanyEntityId : string;
History : CompanyEntityDetails[];
}

export interface DataPointValue {
Key : DataPointEnum;
Value : Decimal;
}

export interface CompanyEntityPeriodData {
AdminCosts : string;
Assets : string;
Capital : string;
CorpTaxPayment : string;
CorpTaxRatePct : string;
Ebit : string;
EBT : string;
FixedAssets : string;
GrossProfit : string;
GrossSales : string;
IntercoAggrCogs : string;
InterestExpenses : string;
InterestIncome : string;
MarketingCosts : string;
NetExternalSales : string;
NetIncomeAfterTax : string;
NetIntercompanySales : string;
NetTotalSales : string;
Opex : string;
OtherAssets : string;
SalaryCosts : string;
SalesCosts : string;
TotalCogs : string;
TotalCosts : string;
TotalExternalCogs : string;
}

export interface Constants {
ServiceIdentQuery : string;
ServiceIdentCmd : string;
}

export interface CountryDetails {
Code : string;
Name : string;
RegionId : string;
DefaultCurrencyId : string;
BasisId : string;
}

export interface CountryData {
Id : string;
Details : CountryDetails;
}

export interface CurrencyDetails {
Code : string;
UnitName : string;
BasisId : string;
}

export interface CurrencyData {
Id : string;
Details : CurrencyDetails;
}

export interface ReportingCurrency {
Id : string;
Code : string;
ExchangeRateBaseCurrency : string;
ExchangeRateId : string;
}

export interface DashboardCountryOverviewPeriods {
PeriodCountryOverviews : DashboardPeriodCountryOverview[];
Currencies : CurrencyData[];
}

export interface DashboardPeriodCountryOverview {
ReportPeriodId : string;
PeriodName : string;
Countries : DashboardCountryInfo[];
GroupCurrencyId : string;
}

export interface DashboardCountryInfo {
CountryId : string;
CountryName : string;
Companies : DashboardCompanyInfo[];
}

export interface CompanyInfoValue {
LocalCurrencyAmount : string;
GroupCurrencyAmount : string;
TextValue : string;
Percentage : string;
Rank : string;
}

export interface DashboardCompanyAlternativePLI {
PLI : PLI;
Title : string;
AlternativePLIValue : CompanyInfoValue;
}

export interface DashboardCompanyValues {
TotalNetSales : string;
TargetProfitPct : string;
RealizedProfitPct : string;
RealizedProfit : string;
TargetVsRealizedProfitPct : string;
TargetVsRealizedProfit : string;
UpwardAdjustments : string;
DownwardAdjustments : string;
TotalAdjustments : string;
IntercoPurchase : string;
IntercoSale : string;
IntercoTotal : string;
AdjustmentsVsSales : string;
AdjustmentsVsCOGS : string;
UpperQuartile : string;
Median : string;
LowerQuartile : string;
PLI : string;
TargetMargin : string;
ActualMargin : string;
TargetMarginCompliance : string;
AlternativePLIs : DashboardCompanyAlternativePLI[];
}

export interface DashboardCompanyInfo {
CompanyType : CompanyEntityType;
Name : string;
CompanyId : string;
LocalCurrencyId : string;
Values : DashboardCompanyValues;
}

export interface DashboardPeriodData {
Id : string;
Details : DashboardPeriodDetails;
}

export interface DashboardPeriodDetails {
Name : string;
FromDate : Date;
ToDate : Date;
}

export enum DashboardTileType {
ProfitDist : 0,
ProfitMfgs : 1,
ProfitPrincipal : 2,
AdjustmentsDist : 3,
AdjustmentsMfgs : 4,
AdjustmentsPrincipal : 5,
TopAdjustmentsDist : 6,
TopAdjustmentsMfgs : 7,
IntercoTradeDist : 8,
IntercoTradeMfgs : 9,
IntercoTradePrincipal : 10,
ProfitDistributionBeforeAdj : 11,
ProfitDistributionAfterAdj : 12,
ProfitAllTypes : 13,
IntercoTradeAll : 14,
AdjustmentsAll : 15,
AdjustmentsDistUpward : 16,
AdjustmentsDistDownward : 17,
AdjustmentsMfgsUpward : 18,
AdjustmentsMfgsDownward : 19,
ProfitAllRegions : 20,
PrincipalIntercoSales : 21,
PrincipalIntercoPurchases : 22,
ProfitPrincipalBeforeAdj : 23,
DistIntercoSales : 24,
DistIntercoPurchases : 25,
MfgsIntercoSales : 26,
MfgsIntercoPurchases : 27,
AdjustmentsByRegion : 28,
IntercoByRegion : 29,
IntercoPurchaseAll : 30,
IntercoSalesAll : 31,
AdjustmentsUpwardAll : 32,
AdjustmentsDownwardAll : 33,
AdjustmentsPrincipalUpward : 34,
AdjustmentsPrincipalDownward : 35,
AdjustmentsDistLastYear : 36,
AdjustmentsMfgsLastYear : 37,
AdjustmentsPrincipalLastYear : 38,
ProfitByType : 39,
IntercoTradeByCountry : 40,
IntercoPurchaseByCountry : 41,
IntercoSalesByCountry : 42,
ProfitByCountry : 43,
AdjustmentsByCountry : 44,
AdjustmentsUpwardByCountry : 45,
AdjustmentsDownwardByCountry : 46
}

export interface DashboardExplanation2 {
Report : DrillDownReport2;
ReportModel : ReportModel;
}

export interface ReportModel {
GroupCurrencyId : string;
Regions : RegionData[];
Countries : CountryData[];
Companies : CompanyEntityDetailsHistory[];
FiscalYears : FiscalYearData[];
Periods : PeriodData[];
Currencies : ReportingCurrency[];
ExchangeRates : ExchangeRateDetails[];
}

export interface DashboardInfo2 {
ClientState : ClientState;
Details : string;
}

export interface DashboardDetails2 {
PeriodValues : DashboardPeriodValues[];
PeriodId : string;
Currencies : DashboardCurrency[];
GroupCurrencyId : string;
LatestUpdate : string;
Countries : DashboardCountry[];
Companies : DashboardCompany[];
FinancialDataSource : FinancialDataSource;
}

export interface DashboardCurrency {
CurrencyId : string;
Code : string;
ExchangeRate : string;
}

export interface DashboardCountry {
Id : string;
Name : string;
}

export interface DashboardCompany {
Id : string;
Name : string;
CountryId : string;
Type : CompanyEntityType;
}

export interface DashboardPeriodValues {
Period : DashboardPeriodData;
Tiles : DashboardTileDetails2[];
}

export interface DashboardAggregatedValue1 {
AggregatedBy : T;
ValuesByType : DashboardTileValuesByAccount;
}

export interface DashboardTileDetails2 {
Type : DashboardTileType;
ValuesByType : string;
CategorizedValue : string;
AggregatedByCountry : string;
}

export interface ReportValueAndType {
Value : string;
Type : ReportValueType;
}

export interface DashboardTileValuesByAccount {
Values : ReportValueAndType[];
}

export interface DashboardCategorizedValue {
CategoryName : string;
Value : string;
Position : number;
}

export interface FiscalYearOverview {
FiscalYearId : string;
FiscalYears : FiscalYearData[];
Titles : String[];
OverviewRows : OverviewStatusRow[];
DetailedRows : OverviewStatusRow[];
FiscalYearPeriods : PeriodData[];
}

export enum OverviewPeriodStatus {
Initial : 0,
Partial : 1,
Warning : 2,
Invalid : 3,
Complete : 4
}

export interface OverviewStatusPeriodEntry {
Status : OverviewPeriodStatus;
SelectionGroup : string;
}

export interface OverviewStatusRow {
Title : string;
Periods : OverviewStatusPeriodEntry[];
}

export interface DataUploadTemplateDefaults {
Interval : string;
}

export interface DataUploadTemplateInfo {
PeriodInterval : string;
YTDInterval : string;
ForecastInterval : string;
PeriodName : string;
}

export enum ClientState {
Setup : 0,
Ready : 1
}

export enum ClientUserCategory {
InternalUser : 0,
ExternalUser : 1,
Api : 2
}

export enum FiscalYearType {
Primary : 0,
Secondary : 1
}

export enum IntercompanyTransactionType {
SaleOfGoods : 0
}

export enum DistributionModel {
DirectSale : 0,
Principal : 1
}

export enum TPProfile {
DistEarnTargetMargin : 0,
MfgsEarnTargetMargin : 1,
PrincipalModel : 2
}

export enum TPAdjustmentMechanism {
RetroActive : 0,
Prospective : 1
}

export enum TPAdjustmentLocation {
ProfitAndLossOnly : 0,
ProfitAndLossAndBalance : 1
}

export enum TPMethod {
TNMM : 0
}

export enum TPUnitType {
Unknown : 0,
LegalEntity : 1,
TPU : 2
}

export enum PLI {
EbitTotal : 0,
BerryRatio : 1,
NCP : 2,
ROATotal : 3,
EbitExtOnly : 4,
EbtTotal : 5,
EbtExtOnly : 6,
GrossMarginTotal : 7,
GrossMarginExtOnly : 8,
ROAOperatingAssets : 9,
ROAMfgAssets : 10,
FCMU : 11
}

export enum TargetProfitMargin {
Pct0 : 0,
Pct25 : 1,
Pct50 : 2,
Pct75 : 3,
Pct100 : 4,
Fixed : 5
}

export enum OORResults {
AlwaysTargetMargin : 0,
DoNotAdjustIfInRange : 1,
AdjustToRange : 2
}

export enum YearIntervalType {
Unknown : 0,
JanToDec : 1,
FebToJan : 2,
MarToFeb : 3,
AprToMar : 4,
MayToApr : 5,
JunToMay : 6,
JulToJun : 7,
AugToJul : 8,
SepToAug : 9,
OctToSep : 10,
NovToOct : 11,
DecToNov : 12
}

export enum FinancialDataSource {
LocalAccounts : 0,
ConsolidatedAccounts : 1
}

export enum DataFeedMode {
Manual : 0
}

export enum FCSetup {
GlobalFC : 0,
LocalFC : 1
}

export enum CompanyType {
Dist : 0,
Mfgs : 1
}

export enum BenchmarkClass {
InitialSetup : 0,
Live : 1
}

export enum BenchmarkRegionalCategory {
Regional : 0,
Local : 1
}

export enum CompanyEntityType {
Sales : 0,
Mfg : 1,
SalesAndMfg : 2,
Principal : 3,
Mixed : 4
}

export enum FiscalYearStatus {
Completed : 0,
Active : 1
}

export enum PeriodStatus {
Completed : 0,
NotReady : 1,
ReadyForData : 2,
InProgressFileUploaded : 3,
InProgressDataLoaded : 4,
InProgressDataAccepted : 5,
InProgressTPDraft : 6,
InProgressDataUploadAccepted : 7
}

export enum AdjustmentExplanation {
PeriodAdjustment : 0,
YTDAdjustment : 1,
ForecastAdjustment : 2
}

export enum InputIntervalType {
Actual : 0,
Forecast : 1
}

export enum FiscalYearIntervalType {
Unknown : 0,
Period : 1,
YTD : 2,
Forecast : 3
}

export enum InitialSetupMode {
Regular : 0,
FastConfiguration : 1
}

export interface QueryOptions {
}

export enum DataPointEnum {
GrossSales : 0,
NetTotalSales : 1,
NetExternalSales : 2,
NetIntercompanySales : 3,
TotalCogs : 4,
TotalExternalCogs : 5,
IntercoAggrCogs : 6,
GrossProfit : 7,
AdminCosts : 8,
SalesCosts : 9,
MarketingCosts : 10,
SalaryCosts : 11,
EBITDA : 12,
Depreciations : 13,
OpEx : 14,
EBIT : 15,
InterestIncome : 16,
InterestExpenses : 17,
EBT : 18,
CorpTaxRatePct : 19,
CorpTaxPayment : 20,
NetIncomeAfterTax : 21,
TotalCosts : 22,
FixedAssets : 23,
OtherAssets : 24,
Capital : 25,
TotalAssets : 26
}

export enum DataPointEnum_CrossValues {
Cogs : 0
}

export enum DataPointValueType {
Amount : 0,
Percent : 1
}

export enum TPInvoiceType {
Invoice : 0,
CreditNote : 1
}

export enum ExchangeRateSource {
UserDefined : 0,
ECB : 1
}

export enum ReportType {
MainDashboard : 0,
MainDashboard2 : 1
}

export enum ReportValueType {
Net : 0,
Upward : 1,
Downward : 2,
Gross : 3
}

export enum ReportValueCalcType {
AcceptedOnly : 0,
IncludeDraft : 1
}

export enum PeriodInputDataIssueSeverity {
Warning : 0,
Error : 1
}

export enum GeneratedFileType {
Unknown : 0,
Excel : 1,
Pdf : 2
}

export enum CompanyCalculationSegment {
CompanyData : 0,
Adjustments : 1
}

export enum ClientMessageType {
Unknown : 0,
RefreshBasisClientInfo : 1
}

export enum Frequency {
Unknown : 0,
Monthly : 1,
Quarterly : 2,
Biannualy : 3,
Annually : 4
}

export enum Forecast {
Disabled : 0,
Enabled : 1
}

export enum YtdDataSupport {
Supported : 0,
AllowedInsteadOfPeriodData : 1
}

export enum TPOverviewInvoiceDirection {
From : 0,
To : 1
}

export enum TPAdjustmentType {
Unknown : 0,
ProfitAdjustment : 1,
PriceAdjustment : 2
}

export enum IntervalAnalysisOverallStatus {
Unknown : 0,
Ok : 1,
NoPeriodsFound : 2,
InvalidPeriods_TooMany : 3,
InvalidPeriods_DifferentFiscalYears : 4,
InvalidPeriods_MultipleWithSameStartDate : 5,
InvalidPeriods_MultipleIndependentPeriods : 6,
InvalidPeriods_IndividualIntervalsInvalid : 7,
ConflictWithActivePeriods : 8,
InvalidPeriod_OnlyOneForecastPeriodAllowed : 9,
InvalidPeriods_CannotUnderstand : 10
}

export enum IntervalAnalysisStatus {
Unknown : 0,
Ok : 1,
OkWithMissingFiscalYear : 2,
MultipleFiscalYears : 3,
InvalidIntervalStartAndEnd : 4,
InvalidStartDate : 5,
InvalidEndDate : 6,
IntervalSpansCompletedPeriods : 7
}

export enum DataRuleViolation {
Unknown : 0,
Missing : 1,
APlusBMustEqualC : 2
}

export interface DD2IdBase {
}

export interface DD2IdCompany {
CompanyId : string;
}

export interface DD2IdCompanyType {
Type : CompanyEntityType;
}

export interface DD2IdRegion {
RegionId : string;
}

export interface DD2IdPeriod {
PeriodId : string;
}

export interface DD2IdCountry {
CountryId : string;
}

export interface DD2IdCompanyDataSegment {
Segment : CompanyCalculationSegment;
}

export interface DD2IDCompanyAdjustments {
AdjustmentExplanation : AdjustmentExplanation;
}

export interface DD2IdElimination {
}

export interface DrillDownSubPeriod {
SubPeriodId : number;
Title : string;
}

export interface DD2GroupValues {
MainValue : DD2ReportValue;
SubPeriodValues : DD2SubPeriodReportValue[];
}

export interface DD2SubPeriodReportValue {
SubPeriodId : number;
Value : DD2ReportValue;
}

export interface DDReportValueInCurrency {
CurrencyId : string;
Amount : Decimal;
ExchangeRate : Decimal;
AccountType : ReportValueType;
}

export interface DD2AccountValue {
Amount : Decimal;
AccountType : ReportValueType;
}

export interface DD2ReportValue {
CurrencyValues : DDReportValueInCurrency[];
AmountInGroupCurrency : DD2AccountValue[];
}

export interface DD2ReportGroup {
GroupId : DD2IdBase;
SubGroups : DD2ReportGroup[];
GroupValue : DD2GroupValues;
}

export interface DrillDownReport2 {
Interval : TPDateInterval;
SubPeriods : DrillDownSubPeriod[];
ReportGroups : DD2ReportGroup[];
TopLevelValue : DD2GroupValues;
Accounts : ReportValueType[];
}

export interface BenchmarkCollection {
}

export interface BenchmarkData {
}

export interface ClientApiAuth {
}

export interface ClientRole {
}

export interface ClientUserRole {
}

export interface ClientRolePermission {
}

export interface OutboundMessage {
}

export interface ExchangeRateCustom {
}

export interface InitialSetupData {
}

export interface InitialSetupDataCompanyType {
}

export interface InitialSetupData_CompanyEntity {
}

export interface PeriodInputData {
}

export interface PeriodInputDataCorrection {
}

export interface PeriodInputDataFile {
}

export interface PeriodInputDataPeriod {
}

export interface PeriodInputSheetResultCollection {
}

export interface PeriodInputSheetResult {
}

export interface PeriodInputDataFileInterpretation {
}

export interface PeriodEntityInputDataContent {
}

export interface PeriodEntityInputDataPoint {
}

export interface PeriodEntityCrossInputDataPoint {
}

export interface ReportView {
}

export interface ReportViewPeriod {
}

export interface ReportViewCategory {
}

export interface ReportViewValue {
}

export interface TPAdjustment {
}

export interface TPArchivedAdjustment {
}

export interface TPAdjustmentExchangeRateCorrection {
}

export interface TPFlowCalcDetail {
}

export interface TPCompanyCalcDetail {
}

export interface TPInvoice {
}

export interface TPSettings {
}

export interface TPSettingsCompanyType {
}

export interface TPDataPreparation {
}

export interface TPDataPreparationDataPoint {
}

export interface TPDataPreparationEntityPeriod {
}

export interface V_TPSettings {
}

export interface V_TPSettingsCompanyType {
}

export interface V_TPUnit {
}

export interface V_CompanyEntity {
}

export interface CompanyEntity {
}

export interface Country {
}

export interface Currency {
}

export interface ExchangeRate {
}

export interface ExchangeRatesCollection {
}

export interface FiscalYear {
}

export interface Period {
}

export interface Region {
}

export interface ClientContactPerson {
}

export interface SheetCellOffset {
}

export interface SheetCellOffsetCollection {
}

export interface GeneratedFile {
}

export interface StoredFile {
}

export enum InitialSetupErrorCode {
InitialSetupHasErrors : 0,
ClientIsNotInInitialSetupMode : 1,
ServiceCompaniesNotSupported : 2,
IPCompaniesNotSupported : 3
}

export enum MiscTPErrorCode {
PeriodStatusDoesNotAllowUpload : 0,
PeriodStatusDoesNotAllowAcceptingSheet : 1,
PeriodStatusDoesNotAllowDiscardingData : 2,
PeriodContainsNoInputData : 3,
PeriodStatusDoesNotAllowAcceptance : 4,
PeriodStatusDoesNotAllowTPCalculation : 5,
PeriodStatusDoesNotAllowFinalApproval : 6,
NoFiscalYearsCreated : 7,
InvalidDateRangeForPreviousFiscalYear : 8,
PeriodDoesNotAllowBenchmarkEditing : 9,
PeriodStatusDoesNotAllowDiscardDraft : 10,
PeriodStatusDoesNotAllowReopen : 11,
PeriodStatusDoesNotAllowBenchmarkUpdates : 12,
MultipleBenchmarksForSameCountry : 13,
MultipleBenchmarksForSameRegion : 14,
PeriodStatusDoesNotAllowCorrections : 15,
PropertyCannotBeChangedBecauseActiveInPeriod : 16,
MultiplePrincipalCompanies : 17,
NonUniqueERPNumber : 18,
UserMustHaveAName : 19,
UserSystemTypeCannotBeChanged : 20,
BasisUserAlreadyMappedToOtherClientUser : 21,
CannotDeleteClientAdministrator : 22,
MultipleClientUsersMappedToSameContactPerson : 23,
ApiIsDisabledForClient : 24,
EndDateOfIntervalMustBeFirstOrLastDayInMonth : 25,
InvalidDateForExchangeRate : 26,
CompletedPeriodCannotReopen : 27,
NonUniqueFiscalYearEndForPrincipalCompanies : 28,
GroupCurrencyNotDefined : 29,
LegalEntityCannotHaveParent : 30,
TPUIsMissingParentUnit : 31,
ParentUnitDoesNotExist : 32,
PeriodDataIsNotValidForAcceptance : 33,
PeriodStatusDoesNotAllowReopeningUpload : 34
}

export interface AllClientErrors {
}

export interface ExchangeRateCustomDetails {
ExchangeRate : string;
}

export interface ExchangeRateCustomData {
CurrencyId : string;
ExchangeRate : string;
CurrencyCode : string;
}

export interface ExchangeRateCustomHistoryRate {
ValidFrom : Date;
ExchangeRate : Decimal;
ChangeFromPrevious : Decimal;
}

export interface ExchangeRateCustomDataAux {
CurrencyId : string;
Details : ExchangeRateCustomDetails;
HistoryRates : ExchangeRateCustomHistoryRate[];
}

export interface ExchangeRateSettings {
BaseCurrencyId : string;
BaseCurrencyCode : string;
ExchangeRateSource : ExchangeRateSource;
}

export interface ExchangeRateDetails {
FeedTimestamp : Date;
FromCurrencyId : string;
ToCurrencyId : string;
ExchangeRate : Decimal;
}

export interface ExchangeRateData {
Id : string;
Details : ExchangeRateDetails;
}

export interface ExchangeRateAuxData1 {
Id : string;
Details : ExchangeRateDetails;
FromCurrencyCode : string;
ToCurrencyCode : string;
SourceCode : string;
Issues : string;
ItemEdit : string;
}

export interface ExchangeRateAuxData2 {
Details : ExchangeRateDetails;
FromCurrencyCode : string;
ToCurrencyCode : string;
}

export interface ExchangeRateDetailsAux1 {
ExchangeRate : Decimal;
Comment : string;
}

export interface FinancialDataValidation {
Issues : DataValidationIssue[];
}

export enum DVIssueType {
Unknown : 0,
DataMissing : 1,
CurrencyMismatch : 2,
IntercompanySumMismatch : 3,
DataRuleViolation : 4
}

export interface DataValidationIssue {
Type : DVIssueType;
Interval : TPDateInterval;
CompanyIds : CompanyEntity[];
}

export interface DVIssueDataMissing {
Type : DVIssueType;
Interval : TPDateInterval;
CompanyIds : CompanyEntity[];
}

export interface DVIssueCurrencyMismatch {
ExpectedCurrencyId : string;
ActualCurrencyId : string;
Type : DVIssueType;
Interval : TPDateInterval;
CompanyIds : CompanyEntity[];
}

export interface DVIssueIntercompanySumMismatch {
CurrencyId : string;
DataPoint : DataPointEnum;
ExpectedSum : Decimal;
ActualSum : Decimal;
Type : DVIssueType;
Interval : TPDateInterval;
CompanyIds : CompanyEntity[];
}

export interface DVIssueDataRuleViolation {
Rule : DataRuleViolation;
InvolvedDataPoints : DataPointEnum[];
Type : DVIssueType;
Interval : TPDateInterval;
CompanyIds : CompanyEntity[];
}

export interface FiscalYearDetails {
Name : string;
Interval : TPDateInterval;
Status : FiscalYearStatus;
Type : FiscalYearType;
}

export interface FiscalYearData {
Id : string;
Details : FiscalYearDetails;
}

export interface GeneratedFileCreationInfo {
LifeTime : TimeSpan;
Content : Byte[];
Type : GeneratedFileType;
FileName : string;
}

export interface GeneratedFileContents {
Content : Byte[];
Type : GeneratedFileType;
FileName : string;
}

export interface ICmdClientsApi {
}

export interface CompleteInitialSetupAux {
Dist : CompleteClientCompanyType;
Mfgs : CompleteClientCompanyType;
TpSettingsId : string;
BenchmarkIds : BenchmarkData[];
CompanyIds : InitialSetupData_CompanyEntity[];
}

export interface CompleteClientCompanyType {
CompanyTypeSettingsId : string;
BenchmarkCollectionId : string;
}

export interface InitialSetupDataDetails {
CompanyAccount : string;
GroupTPPolicies : string;
DataRetrieval : string;
}

export interface InitialSetup_CompanyAccount {
CompanyName : string;
CompanyWebsite : string;
CompanyMainPhone : string;
ContactPersonName : string;
ContactPersonEMail : string;
ContactPersonPhone : string;
Address : AddressDetails;
}

export interface InitialSetup_GroupTPPolicies {
GroupCurrency : string;
IntercompanyTransactionName : string;
TPProfile : string;
Dist : InitialSetup_GroupTPPolicies_DistOrMfg;
Mfgs : InitialSetup_GroupTPPolicies_DistOrMfg;
AdjustmentFrequencyMonths : string;
IntercompanyTransactionType : string;
HasPrincipal : Boolean;
HasDistributors : Boolean;
HasManufacturers : Boolean;
HasServiceCompanies : Boolean;
HasIPCompanies : Boolean;
TPMechanism : string;
TPLocation : string;
SetupMode : string;
ExchangeRateSource : string;
FinancialDataSource : string;
DataFeedMode : string;
DataFeedFrequency : string;
FcSetup : string;
}

export interface InitialSetup_GroupTPPolicies_DistOrMfg {
TPMechanism : string;
TPLocation : string;
TPMethod : string;
PLI : string;
ContactWithBenchmarkRenewal : string;
TargetProfitMargin : string;
FixedMarginPct : string;
OORResults : string;
}

export interface InitialSetup_DataRetrieval {
FCSetup : string;
}

export interface InitialSetup_CompanyEntityDetails {
Name : string;
ERPNumber : string;
Country : string;
LocalCurrency : string;
FinancialYearEnd : string;
CompanyEntityType : string;
}

export interface InitialSetup_CompanyEntityDataAux1 {
Id : string;
Details : InitialSetup_CompanyEntityDetails;
RegionName : string;
CountryName : string;
LocalCurrencyCode : string;
}

export interface InitialSetupValidation {
IsOk : Boolean;
ErrorMessage : string;
}

export interface IQueryClientsApi {
}

export interface LoginOverview {
ClientShortDetails : ClientShortDetails;
ClientUserName : string;
ClientRoles : ClientRoleType[];
Logo : string;
}

export interface NeededUpdates {
PeriodsNeedsUpdates : Boolean;
MigrationsNeeded : number;
HasExpiredGeneratedFiles : Boolean;
}

export interface OutboundMessageDetails {
MessageType : ClientMessageType;
CreatedTime : Date;
}

export interface OutboundMessageData {
Id : string;
Details : OutboundMessageDetails;
}

export interface PeriodCreationSuggestion {
FiscalYearName : string;
FromDate : Date;
ToDate : Date;
}

export interface PeriodDetails {
Name : string;
FiscalYearId : string;
Status : PeriodStatus;
Interval : TPDateInterval;
LatestPeriodInputId : string;
ActiveAdjustmentId : string;
DataPreparationId : string;
}

export interface PeriodData {
Id : string;
Details : PeriodDetails;
}

export interface PeriodDataAux1 {
Id : string;
Details : PeriodDetails;
FiscalYearName : string;
FiscalYearInterval : TPDateInterval;
FiscalYearType : FiscalYearType;
}

export interface PeriodDataAux2 {
Id : string;
Details : PeriodDetails;
FiscalYearName : string;
FiscalYearInterval : TPDateInterval;
FiscalYearType : FiscalYearType;
PrimaryFiscalYearId : string;
}

export interface PeriodInputDataCorrectionDetails {
CorrectionActionId : string;
InputPeriodId : string;
EntityId : string;
CurrencyId : string;
Type : DataPointEnum;
Value : Decimal;
Comment : string;
}

export interface PeriodInputDataCorrectionData {
Id : string;
PeriodInputDataId : string;
Details : PeriodInputDataCorrectionDetails;
}

export interface PeriodInputDataCorrectionDataPoint {
Type : DataPointEnum;
Title : string;
CurrentValue : string;
OriginalValue : string;
CorrectionAction : string;
}

export interface PeriodInputDataWithOptCorrectionOverview {
PeriodData : PeriodInputDataPeriodData;
CompanyData : CompanyEntityData;
CurrencyData : CurrencyData;
DataPoints : PeriodInputDataCorrectionDataPoint[];
ClientUsers : ClientUserShortData[];
}

export interface PeriodInputDataCorrectionDataPointChange {
Type : DataPointEnum;
OldValue : string;
NewValue : string;
}

export interface PeriodInputDataFileAux1 {
PeriodId : string;
PeriodStatus : string;
}

export interface PeriodInputDataFileData {
Id : string;
Details : PeriodInputDataFileDetails;
UploadActionId : string;
}

export interface PeriodInputDataFileDetails {
OriginalFileName : string;
FileUploadMessage : string;
ErrorRef : string;
SheetResults : PeriodInputSheetResultDetails[];
AcceptedSheetName : string;
OriginalFileId : string;
}

export interface PeriodInputSheetResultDetails {
SheetName : string;
DataContent : PeriodEntityInputDataContentDetails[];
Interpretation : string;
}

export interface PeriodInputDataFileContents {
OriginalFileName : string;
StoredFileContents : string;
}

export interface PeriodInputDataFileInterpretationDetails {
CompanyEntityCells : SheetCellOffsetDetails[];
DataPointCells : SheetCellOffsetDetails[];
}

export interface PeriodEntityInputDataContentData {
Id : string;
Details : PeriodEntityInputDataContentDetails;
}

export interface PeriodEntityInputDataContentDetails {
CompanyEntityId : string;
CurrencyId : string;
Interval : string;
Type : string;
DataPointValues : PeriodEntityInputDataPointValueDetails[];
CrossDataPointValues : PeriodEntityCrossInputDataPointDetails[];
}

export interface PeriodEntityInputDataPointValueDetails {
Type : DataPointEnum;
Value : Decimal;
}

export interface PeriodEntityCrossInputDataPointDetails {
CrossEntityId : string;
Type : DataPointEnum_CrossValues;
Value : Decimal;
}

export interface SheetCellOffsetDetails {
RowOffset : number;
ColumnOffset : number;
OptContent : string;
}

export interface PeriodInputDataFileOverview {
Id : string;
OriginalFileName : string;
FileUploadMessage : string;
ErrorRef : string;
SheetResults : PeriodInputSheetResultOverview[];
AcceptedSheetName : string;
OriginalFileId : string;
UploadActionId : string;
}

export interface PeriodInputSheetResultOverview {
SheetName : string;
DataContent : PeriodEntityInputDataContentData[];
Interpretation : string;
}

export interface PeriodInputDataFileValidation {
Id : string;
Sheets : PeriodInputDataFileSheetValidation[];
}

export interface FiscalYearInterval {
Interval : TPDateInterval;
FiscalYearType : FiscalYearType;
}

export interface PeriodInputDataFileSheetValidation {
SheetName : string;
OverallStatus : IntervalAnalysisOverallStatus;
DataPeriodInterval : string;
IntervalValidations : PeriodInputDataIntervalValidation[];
PeriodIntervalStatus : string;
YtdIntervalStatus : string;
ExistingPeriodId : string;
PeriodsToBeRemoved : Period[];
UnremovablePeriods : Period[];
FiscalYearToBeCreated : string;
}

export interface PeriodInputDataIntervalValidation {
Interval : TPDateInterval;
Status : IntervalAnalysisStatus;
FiscalYearId : string;
FiscalYearInterval : string;
}

export interface PeriodInputDataOverview {
PeriodInputDataId : string;
PeriodData : PeriodDataAux1;
FiscalYearInterval : TPDateInterval;
DataFiles : PeriodInputDataFileOverview[];
Corrections : PeriodInputDataCorrectionData[];
TemplateModel : TemplateModel;
Intervals : PeriodInputDataPeriodData[];
Actions : ActionData[];
ClientUsers : ClientUserShortData[];
OverviewFiscalYearId : string;
}

export interface PeriodInputDataPeriodData {
Id : string;
Interval : TPDateInterval;
IntervalType : FiscalYearIntervalType;
}

export interface PeriodInputDataRow {
Id : string;
CompanyEntityId : string;
EntityName : string;
CurrencyId : string;
CurrencyCode : string;
DateInterval : string;
FormattedDateInterval : string;
EntityPeriodData : CompanyEntityPeriodData;
CogsPerEntity : Decimal[];
Issues : string;
ItemEdit : string;
TPUnitType : TPUnitType;
TPUnitTypeName : string;
Type : CompanyEntityType;
TypeName : string;
}

export interface PeriodModel {
Companies : CompanyEntityData[];
FiscalYears : FiscalYearData[];
Periods : PeriodData[];
Forecast : Forecast;
YtdDataSupport : YtdDataSupport;
}

export interface PeriodUsageStatus {
PeriodId : string;
Interval : TPDateInterval;
Status : PeriodStatus;
FiscalYearType : FiscalYearType;
}

export enum PrepareDataItemStatus {
Invalid : 0,
Valid : 1
}

export interface PrepareDataOverview {
PreparationId : string;
PeriodData : PeriodDataAux1;
FinancialDataValidation : FinancialDataValidation;
LegalEntityList : PrepareDataLegalEntityListItem[];
TpuList : PrepareDataTPUListItem[];
}

export interface PrepareDataLegalEntityListItem {
Id : string;
Name : string;
ErpNumber : string;
Status : PrepareDataItemStatus;
CurrencyId : string;
CurrencyCode : string;
}

export interface PrepareDataTPUListItem {
Id : string;
Name : string;
ErpNumber : string;
Status : PrepareDataItemStatus;
}

export interface RegionDetails {
Code : string;
Name : string;
BasisId : string;
}

export interface RegionData {
Id : string;
Details : RegionDetails;
}

export interface ReportFullData {
PdfData : Byte[];
}

export interface WhatIfReportData {
Companies : ReportCompanyShortData[];
PeriodResults : WhatIfReportPeriodResult[];
BaseCurrencyId : string;
}

export interface ReportCompanyShortData {
Id : string;
Name : string;
Details : CompanyEntityDetails;
}

export interface WhatIfReportPeriodResult {
ReportPeriodName : string;
CompanyResults : WhatIfReportCompanyPeriodResult[];
}

export interface WhatIfReportCompanyPeriodResult {
CompanyId : string;
ImpactAmountBaseCurrency : Decimal;
}

export interface StoredFileDetails {
Size : number;
Key : Byte[];
IV : Byte[];
}

export interface StoredFileData {
Id : string;
Details : StoredFileDetails;
}

export interface TemplateModel {
Profile : TPProfile;
GroupCurrency : string;
Currencies : CurrencyData[];
Companies : CompanyEntityInfo[];
CompanyTypes : CompanyEntityType[];
Forecast : Forecast;
}

export interface CompanyEntityInfo {
Details : CompanyEntityDetails;
LiveCompanyEntityId : string;
InitialSetupCompanyEntityId : string;
}

export interface TPAdjustmentDetails {
PeriodInterval : TPDateInterval;
DistBenchmarkColId : string;
MfgsBenchmarkColId : string;
ExchangeRatesColId : string;
}

export interface TPAdjustmentData {
Id : string;
Details : TPAdjustmentDetails;
}

export interface TPAdjustmentReopenValidation {
MayBeReopened : Boolean;
BlockingIntervals : TPDateInterval[];
}

export interface TPArchivedAdjustmentDetails {
AdjustmentId : string;
ArchivedOn : Date;
ArchiveNumber : number;
}

export interface TPArchivedAdjustmentData {
Id : string;
Details : TPArchivedAdjustmentDetails;
}

export interface TPArchivedAdjustmentAux1 {
Data : TPArchivedAdjustmentData;
PeriodInterval : TPDateInterval;
}

export interface TPCalcDetailsDataAux1 {
BaseCurrencyCode : string;
CompanyCalcDataAux1 : TPCompanyEntityCalcDataAux1[];
}

export interface TPCompanyEntityCalcDetails {
CompanyEntity : string;
TargetProfitPct : string;
ActualProfitPct : string;
AdjustmentPct : string;
AdjustmentCurrencyId : string;
AdjustmentAmountBaseCurrency : string;
AdjustmentAmount : string;
TotalAdjustmentAmountBaseCurrency : string;
TotalAdjustmentAmount : string;
}

export interface TPCompanyEntityCalcDataAux1 {
Details : TPCompanyEntityCalcDetails;
CompanyName : string;
AllPeriodsVsYTD : string;
AllPeriodVsYTDBaseCurrency : string;
}

export interface TPDataPreparationDetails {
PeriodInputDataId : string;
LegalEntityIssues : number;
TpuIssueCount : number;
}

export interface TPDataPreparationData {
Id : string;
Details : TPDataPreparationDetails;
}

export interface TPDataPreparationDataPointDetails {
DataPreparationId : string;
CompanyId : string;
PeriodInputDataPeriodId : string;
DataPointType : DataPointEnum;
EditedAmount : Decimal;
}

export interface TPDataPreparationDataPointData {
Id : string;
Details : TPDataPreparationDataPointDetails;
}

export interface TPDataPreparationDataAux1 {
Id : string;
Details : TPDataPreparationDetails;
PeriodId : string;
}

export interface TPDataPreparationLegalEntity {
CompanyEntityId : string;
Intervals : TPDataPreparationLegalEntityInterval[];
Issues : DataValidationIssue[];
}

export interface TPDataPreparationLegalEntityInterval {
PeriodInputDataPeriodId : string;
Interval : TPDateInterval;
Comment : string;
DataValues : TPDataPreparationLegalEntityDataValue[];
}

export interface TPDataPreparationLegalEntityDataValue {
DataPoint : DataPointEnum;
DataPointName : string;
UploadValue : string;
UserInput : string;
ModifiedValue : string;
}

export interface TPDataPreparationLegalEntityModifications {
Modifications : TPDataPreparationLegalEntityModification[];
}

export interface TPDataPreparationLegalEntityModification {
LegalEntityId : string;
Interval : TPDateInterval;
DataPoint : DataPointEnum;
UpdatedUserInput : string;
}

export interface TPDraftAmount {
Currency : string;
Amount : Decimal;
AmountInBaseCurrency : Decimal;
}

export interface TPDraft {
Invoices : TPDraftInvoice[];
CompanyCalcDetails : TPCompanyEntityCalcDetails[];
FlowCalcs : TPDraftFlowCalc[];
}

export interface TPDraftInvoice {
Type : TPInvoiceType;
FromCompanyEntity : string;
ToCompanyEntity : string;
Amount : TPDraftAmount;
Explanation : AdjustmentExplanation;
}

export interface TPDraftFlowCalc {
FromCompanyId : string;
ToCompanyId : string;
Type : AdjustmentExplanation;
PeriodFlowAmount : TPDraftAmount;
}

export interface TPFlowCalcDetailDetail {
AdjustmentId : string;
FromCompanyId : string;
ToCompanyId : string;
Type : AdjustmentExplanation;
CurrencyId : string;
PeriodFlowAmount : Decimal;
PeriodFlowAmountBaseCurrency : Decimal;
}

export interface TPFlowCalcDetailData {
Id : string;
Details : TPFlowCalcDetailDetail;
}

export interface TPHistoryCalculationModel {
Currencies : CurrencyData[];
Regions : RegionData[];
Countries : CountryData[];
Companies : CompanyEntityDetailsHistory[];
Benchmarks : BenchmarkDataInitial[];
TPSettings : TPSettingsDetails[];
}

export interface TPAdjustmentInvoiceDetails {
Invoices : TPInvoiceData[];
FlowCalcs : TPFlowCalcDetailData[];
}

export interface TPInvoiceDetails {
AdjustmentId : string;
Type : TPInvoiceType;
FromCompanyId : string;
ToCompanyId : string;
CurrencyId : string;
Amount : Decimal;
AmountInBaseCurrency : Decimal;
Explanation : AdjustmentExplanation;
}

export interface TPInvoiceData {
Id : string;
Details : TPInvoiceDetails;
}

export interface TPInvoicePresentation {
FromName : string;
ToName : string;
Type : TPInvoiceType;
RelatedTo : string;
TypeName : string;
TPAmount : TPDraftAmount;
CurrencyCode : string;
AdjustmentType : TPAdjustmentType;
PriceAdjustmentPct : string;
}

export interface TPOverviewEntity {
EntityName : string;
Amount : TPDraftAmount;
Direction : TPOverviewInvoiceDirection;
CurrencyCode : string;
}

export interface TPOverviewTotal {
Title : string;
Amount : string;
}

export interface TPUpdatedIntervalsResult {
Validation : TPSettingsChangeValidation;
UpdatedHistory : TPSettingsDetailsHistory;
}

export interface TPSettingsChangeValidation {
IsValid : Boolean;
Intervals : HistoryValidationResult[];
}

export interface HistoryValidationResult {
Validity : Validity;
IsValid : Boolean;
ProblematicPeriods : ValidationProblematicPeriod[];
Message : string;
}

export interface ValidationProblematicPeriod {
PeriodId : string;
Interval : TPDateInterval;
FiscalYearType : FiscalYearType;
PeriodStatus : PeriodStatus;
}

export interface TPSettingsDetailsHistory {
History : TPSettingsDetails[];
}

export interface TPSettingsDetails {
GroupCurrency : string;
TPProfile : TPProfile;
DistSettings : string;
MfgsSettings : string;
FinancialDataSource : FinancialDataSource;
TPMethod : TPMethod;
AdjustmentMechanism : TPAdjustmentMechanism;
AdjustmentLocation : TPAdjustmentLocation;
IntercompanyTransactionName : string;
DataFeedMode : DataFeedMode;
FCSetup : FCSetup;
ExchangeRateSource : ExchangeRateSource;
Forecast : Forecast;
YtdDataSupport : YtdDataSupport;
AdditionalJsonConfig : string;
}

export interface TPSettingsCompanyTypeSimpleDetails {
PLI : PLI;
TargetProfitMargin : TargetProfitMargin;
OORResults : OORResults;
FixedMarginPct : string;
}

export interface TPSettingsCompanyTypeDetails {
SimpleSettings : TPSettingsCompanyTypeSimpleDetails;
}

export interface TPSettingsShortDetails {
GroupCurrencyId : string;
GroupCurrencyCode : string;
}

export interface TPUnitListItemShort {
Id : string;
Name : string;
Code : string;
}

export interface TPUnitListItem {
Id : string;
Name : string;
Code : string;
LocalCurrencyId : string;
LocalCurrencyCode : string;
CountryId : string;
CountryName : string;
PLI : string;
PLIName : string;
TargetMargin : string;
Type : string;
TypeName : string;
YearIntervalType : YearIntervalType;
FiscalYearIntervalName : string;
ParentUnitId : string;
ParentUnitCode : string;
}

export interface UserMappingInfo {
Dummy : Boolean;
}

export interface WhatIfReportCompanyTypeChange {
ChangedPLI : string;
TargetProfitMargin : string;
ExactMargin : string;
}

export interface WhatIfReportQuery {
ChangedDistCompanies : WhatIfReportCompanyTypeChange;
ChangedMfgsCompanies : WhatIfReportCompanyTypeChange;
}

export enum ShowSetting {
ShowActive : 0,
ShowAll : 1,
ShowActiveForDataUpload : 2
}


