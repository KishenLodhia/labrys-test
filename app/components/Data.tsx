"use client";
import { useState } from "react";
import { Token } from "@/types/token";
import ListTile from "./List-tile";
import { fetchData } from "@/lib/fetchData";
import { useQuery } from "@tanstack/react-query";

export default function CryptoSearch() {
  const [searchText, setSearchText] = useState("");

  const { isLoading, isError, data, error } = useQuery({ queryKey: ["cryptoData"], queryFn: fetchData });

  const inputHandler = (e: { target: { value: string } }) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchText(lowerCase);
  };

  const filteredTokens = data?.filter(
    (token: Token) =>
      token.name.toLowerCase().includes(searchText) || token.symbol.toLocaleLowerCase().includes(searchText)
  );

  return (
    <div className="max-w-lg mx-auto">
      <div>
        <input type="text" className="w-full p-5 m-5 rounded-lg border" placeholder="Search" onChange={inputHandler} />
        {searchText && <p>Searching for: {searchText}</p>}
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error?.message}</p>}

      {filteredTokens && filteredTokens.length > 0 ? (
        <ul>
          {filteredTokens.map((token: Token, index: number) => (
            <ListTile
              key={token.id}
              number={index + 1}
              name={token.symbol}
              subtitle={token.quote.USD.volume_24h}
              price={token.quote.USD.price}
              percentage={token.quote.USD.percent_change_24h}
              image={`https://github.com/shadcn.png`}
            />
          ))}
        </ul>
      ) : (
        <p>No tokens found</p>
      )}
    </div>
  );
}
