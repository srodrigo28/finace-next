'use client'

import { SelectContent, SelectItem, SelectTrigger, 
    SelectValue } from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
    { value: "01", Label: 'Janeiro' },
    { value: "02", Label: 'Fevereiro' },
    { value: "03", Label: 'Março' },
    { value: "04", Label: 'Abril' },
    { value: "05", Label: 'Maio' },
    { value: "06", Label: 'Junho' },
    { value: "07", Label: 'Julho' },
    { value: "08", Label: 'Agosto' },
    { value: "09", Label: 'Setembro' },
    { value: "10", Label: 'Outubro' },
    { value: "11", Label: 'Novembro' },
    { value: "12", Label: 'Dezembro' },
]

const TimeSelect = () => {
    const { push } = useRouter()
    const searchParams = useSearchParams()
    const month = searchParams.get('month')
    const handleMonthChange = (month: string) => {
        // push('/?month=' + month)
        push(`/?month=${month}`);
    }
    return ( 
        <Select 
            onValueChange={(value) => handleMonthChange(value)}
            defaultValue={month ?? ''}
            >
            <SelectTrigger className="w-44 rounded-full">
                <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
                {MONTH_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.Label}
                    </SelectItem>
                ))}
                </SelectContent>
        </Select>
     );
}
export default TimeSelect;