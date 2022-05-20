export interface Cart {
    count: number;
    items: string[]
}

export interface Archive {
    files: [File]
}

export interface File {
    format: string
}