'use client';

import { useState, KeyboardEvent, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  onLocation?: () => void;
  disabled?: boolean;
}

export function SearchBar({ onSearch, onLocation, disabled }: SearchBarProps) {
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
    <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full">
      <div className="relative flex-1">
        <label htmlFor="city-search" className="sr-only">Search for a city</label>
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
          placeholder="Search city..."
          disabled={disabled}
          className="search-input w-full pl-12 pr-4 py-3.5 text-base outline-none"
          autoComplete="off"
          autoFocus
        />
      </div>
      {onLocation && (
        <button
          type="button"
          onClick={onLocation}
          disabled={disabled}
          className="location-btn flex items-center justify-center w-12 h-12 flex-shrink-0"
          aria-label="Use current location"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
          </svg>
        </button>
      )}
    </form>
  );
}