import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import FormAcc from "./FormAcc";

interface SheetAccProps {
    addAccount: (account: { nombre: string; banco: string; uso: string }) => void;
}

const SheetAcc = ({ addAccount }: SheetAccProps) => {
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
                        Nueva cuenta
                    </SheetTitle>
                    <SheetDescription>
                        Añade una nueva cuenta.
                    </SheetDescription>
                </SheetHeader>
                <FormAcc addAccount={addAccount} />
            </SheetContent>
        </Sheet>
    );
};

export default SheetAcc;
