export interface PostEntity {
Id : number;
CreatedDate : Date;
Title : string;
Body : string;
Rate : string;
}

export interface ExchangeRateCustomHistoryRate {
ValidFrom : Date;
ExchangeRate : Decimal;
ChangeFromPrevious : Decimal;
}

export enum ClubType {
FirstClass : 0,
SecondClass : 1
}

export interface IUserOptions {
BirthDate : Date;
Address : string;
}

export interface UserBase {
BirthDate : Date;
Address : string;
}

export interface User {
Name : string;
Age : number;
BirthDate : Date;
Address : string;
}


