import { useState } from "react";

interface SortConfig<T> {
    key: keyof T | null;
    direction: "ascending" | "descending";
}

export const useSort = <T extends object>(items: T[]) => {
    const [sortConfig, setSortConfig] = useState<SortConfig<T>>({ key: null, direction: "ascending" });

    const sortedItems = [...items].sort((a, b) => {
        if (sortConfig.key) {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (aValue < bValue) {
                return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortConfig.direction === "ascending" ? 1 : -1;
            }
        }
        return 0;
    });

    const requestSort = (key: keyof T) => {
        let direction: "ascending" | "descending" = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};
