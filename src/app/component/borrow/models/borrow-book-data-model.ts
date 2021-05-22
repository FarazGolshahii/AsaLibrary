export interface RigisterBorrowBook{
    bookId:number;
    userId:number;
    branch:number;
    startDate:string;
    estimateDate:string;
}
export enum BranchType{
    karaj = 1,
    tehran = 2
}

export interface OptionalOptions{
    value:number;
    viewValue:string;
}