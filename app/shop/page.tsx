"use client";
import { Suspense } from "react";
import ShopClient from "./ShopClient";

export default function ShopPage() {
  return (
    <Suspense fallback={<main className="pt-28 text-center text-[#A7A7A7]">جاري فتح المجموعة…</main>}>
      <ShopClient />
    </Suspense>
  );
}
