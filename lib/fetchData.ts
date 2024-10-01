
import { Token } from "@/types/token";

export async function fetchData() {
    const response = await fetch(`/api/coins`);
    const data = await response.json();
    const tokens: Token[] = data.data.data;

    console.log(tokens);


    return tokens;
}