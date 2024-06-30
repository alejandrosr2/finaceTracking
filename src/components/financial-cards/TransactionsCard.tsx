"use client"

import { AreaChart, BarChart2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import AreaVariant from "../charts/AreaVariant"
import { useState } from "react"
import BarVariant from "../charts/BarVariant"

const TransactionsCard = () => {

    const [activeChart, setActiveChart] = useState<"area" | "bar">("area");

    return (   
        <Card className="p-4 border-none shadow-xl col-span-2 md:mr-20 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between gap-x-4">
                <div className="space-y-2">
                <CardTitle className="text-2xl line-clamp-1">
                    Transacciones
                </CardTitle>
                </div>
                <div className="text-blue-400 flex">
                    <div
                        className={`bg-blue-100/50 p-2 rounded-xl mr-2 cursor-pointer ${activeChart === "area" ? "text-white bg-blue-400" : "hover:text-white hover:bg-blue-400"}`}
                        onClick={() => setActiveChart("area")}
                    >
                        <AreaChart />
                    </div>
                    <div
                        className={`bg-blue-100/50 p-2 rounded-xl cursor-pointer ${activeChart === "bar" ? "text-white bg-blue-400" : "hover:text-white hover:bg-blue-400"}`}
                        onClick={() => setActiveChart('bar')}
                    >
                        <BarChart2 />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {activeChart === "area" ? <AreaVariant /> : <BarVariant />}
            </CardContent>
        </Card>
    )
}

export default TransactionsCard
