"use client"

import { useSelectedMonth } from "@/context/selected-month-provider";


const SelectedMonth = () => {

    const { selectedMonth, setSelectedMonth } = useSelectedMonth();

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <div>
            <select className="p-4 shadow-xl rounded-xl mb-5 cursor-pointer" value={selectedMonth} onChange={handleMonthChange}>
                <option value="June">Junio</option>
                <option value="May">Mayo</option>
                <option value="April">Abril</option>
                <option value="March">Marzo</option>
                <option value="February">Febrero</option>
                <option value="January">Enero</option>
            </select>
        </div>
    )
}

export default SelectedMonth
