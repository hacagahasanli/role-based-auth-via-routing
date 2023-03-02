import { quotes } from "../constants";

export const randomQuote = () => {
    const randomQuote = Math.floor(Math.random() * 12) + 1;
    return quotes[randomQuote]
}