module AppModule {
    export interface PostEntity {
        Id: number;
        CreatedDate: Date;
        Title: string;
        Body: string;
        Rate: number;
    }

    export interface RecibeEntity {
        Id: number;
        Name: string;
        Description: string;
        ImagePath: string;
    }

}

