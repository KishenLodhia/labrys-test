import ListTile from "./List-tile";

export default async function Data() {
  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=1281325f-c9b5-4f1f-99bb-a8d9a3105ad6"
  );
  const data = await response.json();

  const tokens = data.data;

  return (
    <div>
      {tokens.map((token, index) => (
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
    </div>
  );
}
