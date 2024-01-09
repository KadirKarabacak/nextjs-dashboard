// This is a Client Component, means we can use eventListeners and hooks
'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  // Current path is "pathname" -> /dashboard/invoices
  const pathname = usePathname();
  const { replace } = useRouter();

  // Handling input field, and use it to update URL
  const handleSearch = useDebouncedCallback((query: string) => {
    console.log(`Searching... ${query}`);

    const params = new URLSearchParams(searchParams);

    // If there is input, set query=search
    if (query) {
      params.set('query', query);
    }
    // If there is no input, remove query
    else {
      params.delete('query');
    }
    // When user types to searchbar, replace method changes URL immediately
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
