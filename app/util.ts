import { College, Overlap } from "./types";

function collegeHasBreak(college: College, date: Date): boolean {
    const time = date.getTime();
    return college.breaks.some(b => b.start.getTime() <= time && time <= b.end.getTime() + 1000 * 60 * 60 * 24);
}

export function getOverlaps(colleges: College[]): Date[] {
    const start = new Date();
    start.setHours(0, 0, 0);
    const breaks: Date[] = [];

    for (let i = 0; i < 365; i++) {
        const date = new Date(start.getTime() + (1000 * 60 * 60 * 24 * i));
        const isWeekend = date.getDay() == 0 || date.getDay() == 6;
        const hasBreak = colleges.every(college => collegeHasBreak(college, date)) || isWeekend;
        if (hasBreak) breaks.push(date);
    }

    return breaks;
}
