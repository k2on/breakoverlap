import { College } from "./types";

export const COLLAGES: College[] = [
    {
        value: "clemson",
        label: "Clemson",
        breaks: [
            {
                name: "Fall break",
                start: new Date(2023, 9, 16),
                end: new Date(2023, 9, 17),
            },
            {
                name: "Thanksgiving break",
                start: new Date(2023, 10, 22),
                end: new Date(2023, 10, 24),
            },
            {
                name: "Christmas break",
                start: new Date(2023, 11, 16),
                end: new Date(2024, 0, 10),
            },
            {
                name: "Spring break",
                start: new Date(2024, 2, 18),
                end: new Date(2024, 2, 22),
            },
            {
                name: "Summer break",
                start: new Date(2024, 4, 3),
                end: new Date(2024, 7, 18),
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


