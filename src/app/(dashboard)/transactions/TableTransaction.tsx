import { useSort } from "@/hooks/useSort";
import { ArrowDownUp } from "lucide-react";

interface Transaction {
    tipo: string;
    cantidad: number;
    categoria: string;
    fecha: string;
}

interface TableTransactionProps {
    transactions: Transaction[];
}

const TableTransaction = ({ transactions }: TableTransactionProps) => {
    const { items: sortedTransactions, requestSort, sortConfig } = useSort(transactions);

    const getClassNamesFor = (key: keyof Transaction) => {
        if (!sortConfig.key || sortConfig.key !== key) {
            return;
        }
        return sortConfig.direction === "ascending" ? "ascending" : "descending";
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-100">
                    <tr>
                        <th
                            className={`flex gap-2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer ${getClassNamesFor("fecha")}`}
                            onClick={() => requestSort("fecha")}
                        >
                            Fecha<ArrowDownUp className="size-4" />
                        </th>
                        <th
                            className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                        >
                            Tipo
                        </th>
                        <th
                            className={`flex gap-2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer ${getClassNamesFor("cantidad")}`}
                            onClick={() => requestSort("cantidad")}
                        >
                            Cantidad<ArrowDownUp className="size-4" />
                        </th>
                        <th
                            className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                        >
                            Categoria
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {sortedTransactions.map((transaction, index) => (
                        <tr key={index} className="hover:bg-blue-100 hover:bg-opacity-20">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {transaction.fecha}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {transaction.tipo}
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${transaction.cantidad < 0 ? "text-red-500" : "text-green-500"}`}>
                                {transaction.cantidad}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {transaction.categoria}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableTransaction;
