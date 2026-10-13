'use client';

import { useState, useEffect, useRef, KeyboardEvent, FormEvent } from 'react';

interface CitySuggestion {
  name: string;
  state?: string;
  country: string;
  label: string;
  lat: number;
  lon: number;
}

interface SearchBarProps {
  onSearch: (city: string) => void;
  disabled?: boolean;
}

export function SearchBar({ onSearch, disabled }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounced autocomplete query
  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/geo?q=${encodeURIComponent(trimmed)}`);
        if (res.ok) {
          const list: CitySuggestion[] = await res.json();
          setSuggestions(list);
          setIsOpen(list.length > 0);
          setSelectedIndex(-1);
        }
      } catch {
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectCity = (cityLabel: string) => {
    setQuery(cityLabel);
    setIsOpen(false);
    onSearch(cityLabel);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedIndex >= 0 && suggestions[selectedIndex]) {
      selectCity(suggestions[selectedIndex].label);
    } else if (query.trim()) {
      setIsOpen(false);
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) {
      if (e.key === 'Enter' && query.trim()) {
        setIsOpen(false);
        onSearch(query.trim());
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        selectCity(suggestions[selectedIndex].label);
      } else if (query.trim()) {
        setIsOpen(false);
        onSearch(query.trim());
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit} className="relative w-full">
        <label htmlFor="city-search" className="sr-only">Search for a city</label>
        
        {/* Search Icon */}
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888894] pointer-events-none"
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
          ref={inputRef}
          id="city-search"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen && e.target.value.trim().length >= 2) setIsOpen(true);
          }}
          onFocus={() => {
            if (suggestions.length > 0) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search city, state or country..."
          disabled={disabled}
          className="search-input w-full pl-12 pr-10 py-3.5 text-base outline-none font-medium text-[#1a1a1a]"
          autoComplete="off"
        />

        {/* Clear / Loading indicator */}
        {isLoading ? (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-[#888894] border-t-transparent rounded-full animate-spin" />
        ) : query ? (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSuggestions([]);
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#888894] hover:text-[#1a1a1a] transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : null}
      </form>

      {/* Google-style Autocomplete Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-[#ebebef] py-2 z-50 overflow-hidden max-h-72 overflow-y-auto animate-fade-in"
          style={{ animationDuration: '150ms' }}
        >
          {suggestions.map((item, index) => {
            const isSelected = index === selectedIndex;
            return (
              <li
                key={`${item.lat}-${item.lon}-${index}`}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => selectCity(item.label)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer text-left transition-colors ${
                  isSelected ? 'bg-[#f4f4f6]' : 'hover:bg-[#f8f8fa]'
                }`}
              >
                <svg
                  className="w-4 h-4 text-[#888894] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#1a1a1a] truncate">
                    {item.name}
                  </p>
                  {(item.state || item.country) && (
                    <p className="text-xs text-[#888894] truncate">
                      {[item.state, item.country].filter(Boolean).join(', ')}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}