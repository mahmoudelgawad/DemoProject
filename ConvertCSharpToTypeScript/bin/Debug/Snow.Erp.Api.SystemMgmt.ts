module TPApp{
export interface BackupSettings {
DatabaseNames : string[];
Masking : BackupMasking;
LimitToClientIds : Client[];
Password : string;
}

export interface ClientUserDetails {
Name : string;
SystemUserType : ClientUserSystemUserTypeId;
ClientUserEmail : string;
MappedToUser : string;
}

export interface ClientUserData {
Id : string;
Details : ClientUserDetails;
SystemUserTypeText : string;
MappedToUserIdHumanReadable : string;
MappedToUserName : string;
IsMappedToUser : boolean;
}

export interface Constants {
ServiceIdentQuery : string;
ServiceIdentCmd : string;
}

export enum SystemMgmtClaimsType {
Unknown = 0,
Heartbeat = 1,
BasicOperationsView = 2,
JobsManagement = 3,
ClientAdministration = 4,
OutboundEmailManagement = 5,
FullBackup = 6,
SystemMgmt = 7
}

export enum TaskType {
Unknown = 0,
DoNothing = 1,
UpdateUserStatistics = 2,
ScheduleOutboundEmails = 3,
SendEmail = 4
}

export enum BackupMasking {
None = 0,
Standard = 1
}

export interface ExceptionLogEntry {
}

export interface InfoLogEntry {
}

export interface Job {
}

export interface OutboundEmail {
}

export interface OutboundEmailAddress {
}

export interface OutboundEmailAttachment {
}

export interface Task {
}

export enum SystemMgmtErrorCode {
Unknown = 0,
InvalidClientMessageType = 1,
InvalidJobInterval = 2,
InvalidJobName = 3,
InvalidJobType = 4
}

export interface AllSystemMgmtErrors {
}

export interface ExceptionDetails {
Time : Date;
ApiExCodeKind : string;
ApiExCodeName : string;
ExceptionTypeName : string;
Message : string;
StackTrace : string;
}

export interface ExceptionData {
Id : string;
Details : ExceptionDetails;
}

export interface ExceptionListItem {
Id : string;
Time : Date;
ApiExCodeKind : string;
ApiExCodeName : string;
ExceptionTypeName : string;
Message : string;
}

export interface ICmdSystemMgmtApi {
}

export interface InfoLogItem {
Id : string;
SourceLogTime : Date;
LogTime : Date;
EventCode : EventCode;
EventName : string;
Message : string;
}

export interface InstanceListItem {
LongInstanceId : number;
ShortInstanceId : number;
Identification : string;
LastAliveTime : Date;
NextIdChunk : number;
EndpointAddress : string;
ExtInstanceId : string;
CreateTime : Date;
LastMessageProcessed : number;
StartupTime : Date;
InstanceTypeName : string;
}

export interface InstanceDetailsAux1 {
Details : InstanceListItem;
InstanceDeviceKey : DeviceKey;
MessageCount : number;
}

export interface InstanceOverview {
InstanceCount : number;
}

export interface IQuerySystemMgmtApi {
}

export interface JobDetails {
LastJobCreatedTime : Date;
JobTypeId : TaskType;
IntervalSeconds : number;
Disabled : boolean;
Name : string;
}

export interface JobData {
Id : string;
Details : JobDetails;
}

export interface JobDataAux1 {
Id : string;
Details : JobDetails;
TypeName : string;
}

export interface JobOverview {
JobCount : number;
}

export interface OperationsOverview {
InstanceOverview : InstanceOverview;
SessionsOverview : SessionsOverview;
SystemHealthOverview : SystemHealthOverview;
JobOverview : JobOverview;
TasksOverview : TasksOverview;
}

export enum OutboundEmailAddressType {
Unknown = 0,
From = 1,
To = 2,
CC = 3,
BCC = 4
}

export interface OutboundEmailDetails {
CreatedTime : Date;
SentTime : Date;
DelayUntil : Date;
}

export interface OutboundEmailAddressData {
Id : string;
Details : OutboundEmailAddressDetails;
}

export interface OutboundEmailAddressDetails {
EmailId : string;
AddressType : OutboundEmailAddressType;
EmailAddress : string;
Name : string;
}

export interface OutboundEmailContentDetails {
Subject : string;
BodyText : string;
BodyHtml : string;
}

export interface OutboundEmailFullDetails {
Id : string;
Addresses : OutboundEmailAddressDetails[];
Content : OutboundEmailContentDetails;
}

export interface SessionsOverview {
TotalSessionCount : number;
AuthenticatedSessionCount : number;
}

export interface SystemHealthOverview {
LastHeartbeatStart : Date;
LastHeartbeatEnd : Date;
}

export interface TaskDetails {
CreatedTime : Date;
StartedTime : Date;
EndedTime : Date;
Success : boolean;
Attempts : number;
DelayUntilTime : Date;
TaskTypeId : TaskType;
ExecutingInstanceId : number;
JobId : string;
}

export interface TaskData {
Id : string;
Details : TaskDetails;
}

export interface TaskDataAux1 {
Id : string;
Details : TaskDetails;
TypeName : string;
}

export interface TasksOverview {
RunnableTaskCount : number;
ExecutingTaskCount : number;
}

}

