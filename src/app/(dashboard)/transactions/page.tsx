"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SheetTransaction from "./SheetTransaction";
import TableTransaction from "./TableTransaction";

interface Transaction {
    tipo: string;
    cantidad: number;
    categoria: string;
    fecha: string;
}

const TransactionPage = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (transaction: Transaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    };

    return (
        <div className="p-4">
            <Card className="border-none drop-shadow-xl">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">
                        Transacciones
                    </CardTitle>
                    <SheetTransaction addTransaction={addTransaction} />
                </CardHeader>
                <CardContent>
                    <TableTransaction transactions={transactions} />
                </CardContent>
            </Card>
        </div>
    );
};

export default TransactionPage;
