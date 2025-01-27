"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";

interface SearchFieldProps {
  className?: string;
}
const SearchField = ({ className }: SearchFieldProps) => {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/shop?q=${encodeURIComponent(q)}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      method="GET"
      action={"/shop"}
      className={cn("grow", className)}
    >
      <div className="relative">
        <Input name="q" placeholder="Search" className="pe-10" />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground"
        >
          <SearchIcon className="size-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchField;
