module TPApp{
export interface ErrorBase {
}

export interface InternalServerError {
}

export interface UnspecifiedInternalError {
ErrorMessage : string;
}

export interface InternalLogicError {
Message : string;
}

export interface NotImplementedError {
}

export interface EnvironmentError {
}

export interface InvalidOperation {
}

export interface AuthorizationFailure {
}

export interface NotAuthenticated {
}

export interface AuthTokenInvalid {
}

export interface InvalidCommandParameters {
}

export interface InvalidCommandParametersCode<ErrorCodeType> {
ErrorCode : ErrorCodeType;
}

export interface InvalidOperationCode<ErrorCodeType> {
ErrorCode : ErrorCodeType;
}

export interface OperationNotAllowed {
RequiredClaimTypeName : string;
MissingClaimName : string;
}

export interface ISimpleIdGenerator {
}

export interface ListOptions {
Offset : number;
MaxItems : number;
FilterString : string;
SortOrders : ListSort[];
}

export interface ListResult<TItem> {
Items : any[];
TotalItems : number;
SortOrders : ListSort[];
}

export enum ListSortOrder {
Ascending = 0,
Descending = 1
}

export interface ListSort {
ColumnKey : string;
Order : ListSortOrder;
}

}

