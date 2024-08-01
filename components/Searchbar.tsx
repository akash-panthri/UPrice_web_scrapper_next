"use client";

import { useState, FormEvent } from "react";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (hostname.includes("amazon.") || hostname.endsWith("amazon")) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

export default function Searchbar() {
  const [searchPrompt, setSearchPrompt] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {};
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
}
