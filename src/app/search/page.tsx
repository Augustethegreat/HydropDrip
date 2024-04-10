
import { fetchResults } from '@/lib/fecthResults';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    searchParams: SearchParams;
  };
  export type SearchParams = {
    url: URL;
    group_adults: string;
    group_children: string;
    no_rooms: string;
    checkin: string;
    checkout: string;
  };
async function SearchPage({searchParams}: Props) {
    if(!searchParams.url) return notFound();
    const results = await fetchResults(searchParams);
    console.log(results);
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage