"use client";

import { useState } from "react";

export default function Searchbar() {
    const [searchPrompt, setSearchPrompt] = useState('');
  const handleSubmit = () => {};
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
