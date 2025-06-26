import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/raffle">Raffle 1</Link>
      <Link href="/raffle?id=1">Raffle 1</Link>
      <Link href="/raffle?id=2">Raffle 2</Link>
      <Link href="/raffle?id=3">Raffle 3</Link>
    </div>
  );
}
