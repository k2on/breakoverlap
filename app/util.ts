import { College, Overlap } from "./types";

function collegeHasBreak(college: College, date: Date): boolean {
    const time = date.getTime();
    return college.breaks.some(b => b.start.getTime() <= time && time <= b.end.getTime());
}

export function getOverlaps(colleges: College[]): Overlap[] {
    const start = new Date();
    start.setHours(0, 0, 0);
    const breaks: Overlap[] = [];

    let startDate: Date | null = null;
    for (let i = 0; i < 20; i++) {
        const date = new Date(start.getTime() + (1000 * 60 * 60 * 24 * i));
        const dateLast = new Date(start.getTime() + (1000 * 60 * 60 * 24 * (i - 1)));
        const hasBreak = colleges.every(college => collegeHasBreak(college, date))

        // no more overlap
        if (!hasBreak && startDate != null) {
            breaks.push({
                start: startDate,
                end: date,
            })
            startDate = null;
        // starts overlap
        } else if (hasBreak && startDate == null) {
            startDate = date;
        }
    }

    return breaks;
}
