"use client"
import Browse from "./components/Browse";
import Categories from "./components/Categories";
import Latest from "./components/Latest";
import SummerAd from "./components/SummerAd";
import Timbu from "./components/Timbu";


export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Timbu />
      <Latest />
      <Categories />
      <SummerAd />
      <Browse />
    </div>
  );
}
