import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import FormTransactions from "./FormTransactions";

interface SheetTransactionProps {
    addTransaction: (transaction: { tipo: string; cantidad: number; categoria: string; fecha: string }) => void;
}

const SheetTransaction = ({ addTransaction }: SheetTransactionProps) => {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="flex items-center bg-blue-400 p-2 rounded-xl text-white text-sm hover:bg-blue-400/90">
                    <Plus className="size-4 mr-2" />
                    Add new
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Nueva transacción
                    </SheetTitle>
                    <SheetDescription>
                        Añade un nuevo ingreso o gasto.
                    </SheetDescription>
                </SheetHeader>
                <FormTransactions addTransaction={addTransaction} />
            </SheetContent>
        </Sheet>
    );
};

export default SheetTransaction;
