module TPApp{
export interface DataHistory<TDetails> {
Details : TDetails;
ValidFrom : Date;
ValidTo : Date;
}

export interface TPDateInterval {
FromDate : Date;
EndDate : Date;
}

export interface TPDateIntervalInclusive {
FirstDate : Date;
LastDate : Date;
}

export enum SessionErrorCode {
Unknown = 0,
SessionDoesNotExist = 1,
InvalidServiceName = 2,
SessionIsNotAuthenticated = 3,
InvalidSystemPassword = 4,
OneTimeTokenDoesNotExist = 5,
OneTimeTokenAlreadyUsed = 6,
OneTimeTokenHasExpired = 7,
AuthTokenDoesNotExist = 8,
ClientDoesNotExist = 9,
SpecifiedLoginNotAllowed = 10,
UserNameDoesNotExist = 11,
NotAuthorizedForUserName = 12,
UserAuthCodeInvalid = 13,
UserAuthCodeExpired = 14,
SystemUserDoesNotExist = 15,
UserRoleDoesNotExist = 16,
CurrentLoginDisabled = 17,
CurrentLoginTemporarilyDisabled = 18,
CurrentLoginPermanentlyDisabled = 19
}

export enum GenericErrorCode {
UnspecifiedError = 0,
IdAlreadyExists = 1,
AssertionFailure = 2,
NotImplemented = 3,
DebugTrap = 4,
ReferencedIdDoesNotExist = 5,
NotAllowedForCurrentUser = 6,
NotAuthenticated = 7,
InvalidMessage = 8,
RequiredValueMissing = 9,
UniquenessViolated = 10,
CannotRemoveInitializedClient = 11,
ClientCannotFindDatabaseShard = 12,
DateTimeMustHaveZeroTime = 13,
ClientShardNotEmpty = 14,
CurrentUserHasNoAccessToEntity = 15,
ReferencedEntityHasExpired = 16,
IllegalEnumValue = 17,
InvalidSignInUrl = 18,
ClientNotInitialized = 19
}

export interface AllErpErrors {
}

export interface GenericError {
ErrorCode : GenericErrorCode;
FormattedErrorMessage : string;
}

export interface AggregateError {
Errors : ErrorBase[];
}

export interface HistoryListFull<TListItem> {
Histories : DataHistory<any>[];
}

export interface HistoryListInterval {
Validity : Validity;
}

export interface HistoryListOverview<TListItem> {
Intervals : HistoryListInterval[];
ActiveInterval : Validity;
ActiveList : ListResult<any>[];
}

export interface Id<MarkerType> {
IdValue : number;
}

export interface IdMap<OldIdType> {
OldId : string;
NewId : string;
}

export enum IssueType {
Unknown = 0,
Info = 1,
Warning = 2,
Error = 3,
Missing = 4
}

export interface Issue {
Type : IssueType;
Summary : string;
}

export interface PropertyIssue {
PropertyName : string;
Issue : Issue;
}

export interface ItemIssues {
ItemIssue : Issue;
PropertyIssues : PropertyIssue[];
}

export interface ItemEdit {
PropertyEdits : PropertyEdit[];
}

export interface PropertyEdit {
PropertyName : string;
Summary : string;
}

export interface EncodedCallArguments {
Data : number[];
}

export interface OperationCallDetails {
ServiceIdentification : string;
OperationName : string;
Arguments : EncodedCallArguments;
}

export interface Percentage {
Ratio : number;
Pct : number;
}

export interface ReqTraceInfo {
OriginalCallAddress : string;
IPv4Address : string;
IPv6Address : string;
}

export interface Validity {
ValidFrom : Date;
ValidTo : Date;
}

export interface IdSerializerMaker {
}

export interface IdSerializer<TEntity> {
}

export enum ClientUserSystemUserTypeId {
Support = 0
}

export enum ServiceType {
Basis = 0,
Client = 1
}

export interface UserAction {
}

export interface ApiCommand {
}

export interface ApiContract {
}

export interface Client {
}

export interface ClientShard {
}

export interface ClientUser {
}

export interface Role {
}

export interface User {
}

export interface UserAccess {
}

export interface UserRole {
}

export interface ApiLogEntry {
}

export interface EntityHistory<TEntity> {
Id : string;
History : any[];
}

}

