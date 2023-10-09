"use client";

import { useState } from "react";
import { Colleges } from "./Colleges";
import { College } from "./types";
import { COLLAGES } from "./const";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import Calendar from "./Calendar";

export default function Home() {
    const [selected, setSelected] = useState<College['value'][]>([]);

    const validColleges = COLLAGES.filter(c => !selected.includes(c.value))

    const onSelect = (last: string, college: string) => {
        const lastIdx = selected.indexOf(last);
        const newSelected = [...selected];
        if (lastIdx != -1) newSelected.splice(lastIdx, 1);
        newSelected.push(college);
        setSelected(newSelected);
    }

    const onRemove = (college: string) => {
        const idx = selected.indexOf(college);
        const newSelected = [...selected];
        if (idx != -1) newSelected.splice(idx, 1);
        setSelected(newSelected);
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Calendar selected={selected} />
            <h1>Select Colleges</h1>
            <ul className="flex flex-col gap-2">
                {selected.map(id => (
                    <li key={id} className="flex flex-row justify-center gap-2"><Colleges value={id} colleges={[...validColleges, COLLAGES.find(c => c.value == id)!]} onSelect={onSelect} /><Button onClick={() => onRemove(id)} variant="outline"><XIcon size={15}/></Button></li>
                ))}
                {validColleges.length > 0 && <li><Colleges value="" colleges={validColleges} onSelect={onSelect} /></li>}
            </ul>
        </main>
    )
}
