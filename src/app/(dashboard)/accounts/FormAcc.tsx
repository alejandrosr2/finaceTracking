import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormAccProps {
    addAccount: (account: { nombre: string; banco: string; uso: string }) => void;
}

interface FormValues {
    nombre: string;
    banco: string;
    uso: string;
}

const FormAcc = ({ addAccount }: FormAccProps) => {
    const formMethods = useForm<FormValues>();
    const { control, handleSubmit, reset } = formMethods;

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        addAccount(data);
        reset();
    };

    return (
        <FormProvider {...formMethods}>
            <form className="space-y-4 pt-4" onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    control={control}
                    name="nombre"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Ingrese el nombre de la cuenta" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="banco"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Banco</FormLabel>
                            <FormControl>
                                <Input placeholder="Nombre del banco" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="uso"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Uso</FormLabel>
                            <FormControl>
                                <Input placeholder="Ej: gastos compartidos, empresa, personal..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export default FormAcc;
