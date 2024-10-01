import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

interface TokenData {
  number: number;
  name: string;
  subtitle: number;
  price: number;
  percentage: number;
  image: string;
}

export default function ListTile({ number, name, subtitle, price, percentage, image }: TokenData) {
  function convertToInternationalCurrencySystem(labelValue: number) {
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "Bn"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "Mn"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue));
  }
  return (
    <div className="bg-zinc-800 p-3 flex flex-row items-center gap-5 rounded-2xl m-3 w-full justify-center ">
      <div className="w-10">#{number}</div>
      <div className="w-10">
        <Avatar>
          <AvatarImage src={image} alt={`${name} image`} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col items-center justify-center w-20">
        <div className="font-semibold">{name}</div>
        <div className="text-zinc-400 text-sm">{convertToInternationalCurrencySystem(subtitle)}</div>
      </div>
      <div className="font-bold w-20">${price.toFixed(2)}</div>
      <div className={`${percentage >= 0 ? "bg-green-500" : "bg-red-500"} rounded px-2 w-15`}>
        <div
          className={`${
            percentage >= 0 ? "text-green-300" : "text-red-900"
          } font-bold opacity-100 flex flex-row items-center justify-between`}
        >
          {percentage >= 0 ? <MdArrowDropUp size={20} /> : <MdArrowDropDown size={20} />}
          {Math.abs(percentage).toFixed(2)}%
        </div>
      </div>
    </div>
  );
}
