interface TableAccProps {
    accounts: { nombre: string; banco: string; uso: string }[];
}

const TableAcc = ({ accounts }: TableAccProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-blue-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Cuenta
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Banco
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Uso
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {accounts.map((account, index) => (
                        <tr key={index} className="hover:bg-blue-100 hover:bg-opacity-20">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {account.nombre}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {account.banco}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {account.uso}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableAcc;
