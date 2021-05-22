export interface BookDetails{
    id:number;
    name:string;
    secondryName:string;
    authors:string[];
    translators:string[];
    publisher:string;
    category:string[];
    edition:string;
    numberOfPage:number;
    description:string;
    tags:string[];
    fileType:number[];
    fileLink:string;
    rate:number;
    isbn:string;
    attachment:string;
    publishOfDate:string;
}

export enum FileType{
    print = 1,
    pdf = 2
}

