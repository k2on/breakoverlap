export interface College {
    value: string;
    label: string;
    breaks: Break[];
}

export interface Break {
    name: string;
    start: Date;
    end: Date;
}

export interface Overlap {
    start: Date;
    end: Date;
}
