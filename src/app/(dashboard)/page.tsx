
import SelectedMonth from "@/components/SelectedMonth";
import ExpenseCard from "@/components/financial-cards/ExpenseCard";
import ExpensesCard from "@/components/financial-cards/ExpensesCard";
import IncomeCard from "@/components/financial-cards/IncomeCard";
import RemainCard from "@/components/financial-cards/RemainCard";
import TransactionsCard from "@/components/financial-cards/TransactionsCard";
import { SelectedMonthProvider } from "@/context/selected-month-provider";


export default function Home() {
  return (
    <SelectedMonthProvider>
      <div className="p-4">
          <SelectedMonth/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <IncomeCard />
          <ExpensesCard/>
          <RemainCard/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10">
          <TransactionsCard/>
          <ExpenseCard/>
        </div>
      </div>
    </SelectedMonthProvider>
  );
};
