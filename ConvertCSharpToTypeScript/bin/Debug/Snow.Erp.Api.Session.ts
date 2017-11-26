module TPApp{
export interface AuthTokenDetails {
AuthToken : AuthToken;
Expires : Date;
}

export interface ApiAuthTokenDetails {
Expires : Date;
ClaimsData : number[];
ClientId : string;
AuthenticatedUserId : string;
ClientUserId : string;
}

export interface BasisRoleState {
RoleId : string;
RoleEnabled : boolean;
}

export enum SessionType {
Unknown = 0,
EndUser = 1,
InternalApi = 2,
ExternalApi = 3,
SystemSession = 4
}

export enum InstanceType {
Unknown = 0,
Core = 1,
App = 2,
PublicWeb = 3,
Authenticator = 4
}

export interface ClientServiceId {
ServiceIdentification : string;
Client : string;
}

export enum BasisMsg {
RefreshBasisClientInfo = 0
}

export enum AuthenticationType {
Unknown = 0,
LinkedIn = 1,
UserAuthCode = 2,
SystemUser = 3,
System = 4,
OneTimeToken = 5
}

export interface Authentication {
}

export interface ICmdSessionApi {
}

export interface InstanceDetails {
LongInstanceId : number;
ShortInstanceId : number;
Identification : string;
LastAliveTime : Date;
NextIdChunk : number;
InstanceDeviceKey : DeviceKey;
EndpointAddress : string;
ExtInstanceId : string;
CreateTime : Date;
LastMessageProcessed : number;
InstanceType : InstanceType;
StartupTime : Date;
StartupHandle : number;
}

export interface InstanceInfo {
EndpointAddress : string;
ExtInstanceId : string;
InstanceType : InstanceType;
}

export interface InstanceMessageDetails {
InstanceId : number;
CreateTime : Date;
Message : InstanceMessage;
}

export interface InstanceMessageData {
Id : number;
Details : InstanceMessageDetails;
}

export enum InstanceMessage {
Noop = 0,
ClearAuthTokenCache = 1
}

export interface IQuerySessionApi {
}

export interface SessionKeyConstants {
DeviceKeyLengthBytes : number;
DeviceKeyStringLength : number;
SessionKeyLengthBytes : number;
SessionKeyStringLength : number;
FullKeyLengthBytes : number;
FullKeyStringLength : number;
AuthTokenBytes : number;
AuthTokenStringLength : number;
}

export interface SessionKeyHelpers {
}

export interface DeviceKey {
EncodedKey : string;
}

export interface SessionKey {
EncodedKey : string;
}

export interface SessionFullKey {
DeviceKey : DeviceKey;
SessionKey : SessionKey;
}

export interface AuthToken {
EncodedAuthToken : string;
}

export interface SessionDetails {
AuthenticatedUser : string;
ClientId : string;
ClientUser : string;
SessionType : SessionType;
Expires : Date;
TimeOfCreation : Date;
NextAuthentication : Date;
BasisRoleIds : Role[];
}

export interface UserAuthCode {
AuthCode : string;
Expires : Date;
}

}

