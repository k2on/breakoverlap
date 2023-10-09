import { College } from "./types";

export const COLLAGES: College[] = [
    {
        value: "clemson",
        label: "Clemson",
        breaks: [
            {
                name: "Fall break",
                start: new Date(2023, 9, 14),
                end: new Date(2023, 9, 17),
            }
        ],
    },
    {
        value: "providence",
        label: "Providence",
        breaks: [
            {
                name: "Fall break",
                start: new Date(2023, 9, 7),
                end: new Date(2023, 9, 15),
            }
        ],
    },
    {
        value: "u miami",
        label: "U Miami",
        breaks: [
            {
                name: "Fall break",
                start: new Date(2023, 9, 15),
                end: new Date(2023, 9, 20),
            }
        ],
    },
];


