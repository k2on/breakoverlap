import { Calendar } from "@/components/ui/calendar";
import { COLLAGES } from "./const"
import { College } from "./types"
import { getOverlaps } from "./util";

interface CalendarProps {
    selected: College['value'][],
}
export default function CalendarDisplay({ selected }: CalendarProps) {
    if (selected.length < 2) return <div className="text-gray-400">Please select at least two colleges</div>
    const colleges = COLLAGES.filter(c => selected.includes(c.value));
    const overlaps = getOverlaps(colleges);

    return <div>
        <Calendar
          mode="multiple"
          selected={overlaps}
          className="rounded-md border"
        />
    </div>
}
