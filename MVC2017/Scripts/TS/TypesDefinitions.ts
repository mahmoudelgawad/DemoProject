module mainApp {
    interface FileInfo {
         directoryName: string;
         length: number;
         name: string;
         isReadOnly: boolean;
         exists: boolean;
    }
    export interface ImageProfile {
        imageProfileName?: string;
        fileInfoDetails?: FileInfo[];
    }
}