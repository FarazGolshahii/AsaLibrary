
export interface BorrowBook {
    borrowId: number;
    bookName: string;
    authors: string[];
    categories: string[];
    startDate: string;
    endDate: string;
    estimateDate: string;
    status: number;

}
export enum BorrowStatus {
    delivered = 1,
    notDeliverd = 0
}

