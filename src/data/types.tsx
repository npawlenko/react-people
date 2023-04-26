export type FormValues = {
    name: string;
    birthday: Date;
    memoir: string;
}

export type User = {
    id?: number;
    name: string;
    birthday: string;
    memoir?: string;
}