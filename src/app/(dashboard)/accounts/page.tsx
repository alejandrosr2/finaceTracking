"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SheetAcc from "./SheetAcc";
import TableAcc from "./TableAcc";

interface Account {
    nombre: string;
    banco: string;
    uso: string;
}

const AccountsPage = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);

    const addAccount = (account: Account) => {
        setAccounts((prevAccounts) => [...prevAccounts, account]);
    };

    return (
        <div className="p-4">
            <Card className="border-none drop-shadow-xl">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">
                        Cuentas
                    </CardTitle>
                    <SheetAcc addAccount={addAccount} />
                </CardHeader>
                <CardContent>
                    <TableAcc accounts={accounts} />
                </CardContent>
            </Card>
        </div>
    );
};

export default AccountsPage;
