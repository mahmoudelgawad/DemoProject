module TPApp{
export interface DevApiCallFactory {
}

export interface AppDevApiImpl {
}

export interface IAppDevApi {
}

export interface TPUnitListItem {
Id : string;
Name : string;
Code : string;
ParentUnitCode : string;
CurrencyCode : string;
CountryName : string;
TypeName : string;
FinancialYearEnd : string;
}

export interface MyStruct {
Name : string;
}

export interface AdjustmentMarginFollowUpDetails {
Comment : string;
ActualProfitPct : number;
AdjustmentAmount : number;
AdjustmentAmountBaseCurrency : number;
AllPeriodsVsYTD : number;
AllPeriodVsYTDBaseCurrency : number;
}

export interface ClientImage {
}

export interface ImageFileDetails {
OriginalFileName : string;
Image : ImageDetails;
Thumbnail : ImageDetails;
}

export enum ImageType {
Unknown = 0,
Png = 1,
Jpeg = 2
}

export interface ImageDetails {
ImageType : ImageType;
FileName : string;
Size : number;
Width : number;
Height : number;
ImageData : number[];
}

}

