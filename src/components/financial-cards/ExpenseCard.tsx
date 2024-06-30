import { PieChart } from "lucide-react"
import PieVariant from "../charts/PieVariant"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const ExpenseCard = () => {
    return (
        <Card className="p-4 border-none shadow-xl col-span-2 md:col-span-1 md:-ml-20 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between gap-x-4">
                <div className="space-y-2">
                <CardTitle className="text-2xl line-clamp-1">
                    Gastos
                </CardTitle>
                </div>
                <div className="text-blue-400 flex">
                    <div>
                        <PieChart />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <PieVariant/>
            </CardContent>
        </Card>
    )
}

export default ExpenseCard
