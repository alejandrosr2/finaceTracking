import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormTransactionsProps {
    addTransaction: (transaction: { tipo: string; cantidad: number; categoria: string; fecha: string }) => void;
}

interface FormValues {
    tipo: string;
    cantidad: number;
    categoria: string;
    fecha: string;
}

const FormTransactions = ({ addTransaction }: FormTransactionsProps) => {
    const formMethods = useForm<FormValues>({
        defaultValues: {
            tipo: "",
            cantidad: 0,
            categoria: "",
            fecha: "",
        },
    });
    const { control, handleSubmit, reset, watch } = formMethods;

    const tipo = watch("tipo");

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const adjustedData = {
            ...data,
            cantidad: tipo === "gasto" ? -Math.abs(data.cantidad) : Math.abs(data.cantidad),
        };
        addTransaction(adjustedData);
        reset({
            tipo: "",
            cantidad: 0,
            categoria: "",
            fecha: "",
        });
    };

    return (
        <FormProvider {...formMethods}>
            <form className="space-y-4 pt-4" onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    control={control}
                    name="tipo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tipo</FormLabel>
                            <FormControl>
                                <select {...field} className="border p-2 rounded-sm mt-1 block w-full text-zinc-500 text-sm">
                                    <option value="" disabled>¿Es un ingreso o un gasto?</option>
                                    <option value="gasto">Gasto</option>
                                    <option value="ingreso">Ingreso</option>
                                </select>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="cantidad"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cantidad</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="Ingrese cantidad" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="categoria"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Categoria</FormLabel>
                            <FormControl>
                                <Input placeholder="Comida, alquiler, ocio, salario..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="fecha"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Fecha</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export default FormTransactions;
