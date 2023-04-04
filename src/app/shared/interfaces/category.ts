export interface ICategory {
    id: number;
    name?: string;
    description?: string;
}

export interface IEntry {
    id: number;
    name?: string
    categoryId?: number;
    paid?: string;
    date?: string;
    amount?: string;
    type?: string;
    description?: string;
}

   