import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';  // Import useState
import styles from '@/styles/Home.module.css';
import { getTagDescription } from '../data/data';
import SearchBar from '../components/SearchBar';

const inter = Inter({ subsets: ['latin'], weights: [300], styles: 'font-size: 8px'});

const formatDescription = (description) => {
  const lines = description.split('\n');
  const formattedDescription = lines.map((line, index) => {
    const [left, right] = line.split(':');
    return (
      <div key={index} className="description-line">
        <span className="left">{left}</span>
        <span className="right">{right}</span>
      </div>
    );
  });
  return formattedDescription;
};


export default function Home() {
  const [searchResults, setSearchResults] = useState(null);  // Define searchResults state

  const handleSearch = (query) => {
    // Use getTagDescription to get the description based on the query
    //const description = getTagDescription(query);
  
    // Update your page content or log the description
    console.log('Search query:', query.tag);
    console.log('Description:', query.description);

    // Update searchResults state
    setSearchResults(query);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="zebraMD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${styles.main} ${inter.className}`} style={{ backgroundColor: 'black' }}>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 flex place-items-center gap-2 p-8">
            <Image
              src="/zmd.svg"
              alt="zmd Logo"
              className="dark:invert"
              width={540}
              height={111}
              priority
            />
          </div>
          

          <div className="flex flex-col items-center" style={{ fontSize: '8px', marginLeft: '160px', marginTop: '40px', marginBottom: '40px'}}>
            <SearchBar
            onSearch={handleSearch}
            placeholder="Search your disease"
            />
          </div>

         
          {/* Display search results */}
          {searchResults && (
            <div className="mt-4" style={{ color: 'grey' }}>
              {/*<h2>Search Results</h2>*/}
              <div className="grid grid-cols-2 gap-4">
                {formatDescription(searchResults.description)}
              </div>
            </div>
          )}

          {/* Additional content goes here */}
        </div>
      </main>
    </>
  );
}
