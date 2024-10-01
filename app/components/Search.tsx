"use client";

import { useState } from "react";

export default function Search() {
  const [searchText, setSearchText] = useState("");

  const inputHandler = (e: { target: { value: string } }) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchText(lowerCase);
  };
  return (
    <div>
      <input type="text" className="w-full p-5 m-5 rounded-lg border" placeholder="Search" onChange={inputHandler} />
      {searchText}
    </div>
  );
}
