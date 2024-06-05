import { createContext } from "react";

export const MaxBuyQuantity = createContext({
    maxBuyQuantity : 5,
    updateMaxBuyQuantity : () => {}
});