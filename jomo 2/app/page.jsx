import { redirect } from "next/navigation";

// The Schools page is the flagship for now. Home + other pages come next.
export default function Home() {
  redirect("/schools");
}
