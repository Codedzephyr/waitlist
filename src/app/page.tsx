import { Plus_Jakarta_Sans } from "next/font/google";
import { Content } from "./content";

const Plusjakartasans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={Plusjakartasans.className}>
      <Content />
    </main>
  );
}
