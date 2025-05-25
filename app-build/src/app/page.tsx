import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clash of Clans Simulator",
  description: "Clash of Clans Simulator",
};

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/buildings">Buildings</Link>
        </li>
      </ul>
      <hr />
      <h2>data</h2>
      <p>
        <Link href="https://fankit.supercell.com/d/vkEdmkUCngKw/game-assets">Game assets - Clash of Clans</Link>
        <Link href="https://developer.clashofclans.com">Clash of Clans API</Link>
      </p>
    </div>
  );
}
