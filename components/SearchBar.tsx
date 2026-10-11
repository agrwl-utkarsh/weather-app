'use client';

import { useState, KeyboardEvent, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  disabled?: boolean;
}

export function SearchBar({ onSearch, disabled }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <label htmlFor="city-search" className="sr-only">Search for a city</label>
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          id="city-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for a city..."
          disabled={disabled}
          className="glass-input w-full pl-12 pr-4 py-3.5 text-base outline-none"
          autoComplete="off"
          autoFocus
        />
      </div>
    </form>
  );
}