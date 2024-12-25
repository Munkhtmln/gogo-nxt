import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/Header";
import { Cover } from "./components/Cover";
import { Gogo, Story } from "./components/Story";
import { News } from "./components/News";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Cover />
      <Gogo />
      <Story />
      <News />
    </div>
  );
}
