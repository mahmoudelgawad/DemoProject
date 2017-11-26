module TPApp{
export interface ClientUserWithClient {
ClientId : string;
ClientUserId : string;
}

export enum DirectEditFileType {
PeriodDataLoad = 0
}

export enum FileStatus {
Unknown = 0,
Pristine = 1,
Opened = 2,
OpenedForEdit = 3,
Saved = 4
}

export interface DirectEditFileDetails {
ClientId : string;
KeyToken : number[];
Expires : Date;
Type : DirectEditFileType;
Content : number[];
FileName : string;
LastUpdate : Date;
Status : FileStatus;
UserConnectionId : string;
}

export interface DirectEditFileDataAux1 {
Id : string;
ClientId : string;
Expires : Date;
Type : DirectEditFileType;
DataLength : number;
FileName : string;
LastUpdate : Date;
Status : FileStatus;
UserConnectionId : string;
}

export interface DirectEditFileCreationInfo {
KeyToken : number[];
Expires : Date;
}

export interface DirectEditFile {
}

export interface ICmdUiApi {
}

export interface IQueryUiApi {
}

}

