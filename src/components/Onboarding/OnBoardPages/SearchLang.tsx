import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setLanguage } from '../../../redux/slice';
import { RootState } from '../../../redux/store';

const SearchLang: React.FC = () => {
  const dispatch = useDispatch();
  

  const indianLanguages: string[] = [
    'Hindi',
    'Bengali',
    'Telugu',
    'Marathi',
    'Tamil',
    'Urdu',
    'Gujarati',
    'Kannada',
    'Odia',
    'Punjabi',
    'Malayalam',
    'Assamese',
    'Maithili',
    'Sanskrit',
    'Sindhi',
    'Nepali',
    'Santali',
    'Kashmiri',
    'Konkani',
    'Dogri',
    'Manipuri',
    'Bodo',
  ];

  // Function to generate three random language names
  const generateRandomLanguages = (): string[] => {
    const randomLanguages: string[] = [];
    while (randomLanguages.length < 3) {
      const randomIndex: number = Math.floor(
        Math.random() * indianLanguages.length,
      );
      const randomLanguage: string = indianLanguages[randomIndex];
      if (!randomLanguages.includes(randomLanguage)) {
        randomLanguages.push(randomLanguage);
      }
    }
    return randomLanguages;
  };

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<string>('');
  const [randomLanguages, setRandomLanguages] = useState<string[]>(
    generateRandomLanguages(),
  );
  const [clickedText, setClickedText] = useState<string>('');

  // Function to handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
    // Filter languages based on search term
    const results: string[] = indianLanguages.filter((language: string) =>
      language.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    setSearchResult(results.length > 0 ? results[0] : '');
  };

  // Function to handle click on search result or random language
  const handleClick = (language: string): void => {
    setClickedText(language);
    setSearchResult(language);
    dispatch(setLanguage(language));
   

  };

  return (
    <div className=" px-16 h-[20rem]">
      
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">
        Language Selection
      </h1>
      <p className="text-[#6F6C90] font-poppins text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac metus
        id velit
      </p>
      <div className="mt-4 font-poppins relative">
        <div className="flex items-center">
          {/* <img src={Search} /> */}
          <input
            type="text"
            placeholder="Search languages..."
            value={searchTerm}
            onChange={handleChange}
            className="w-full border-2 bg-[#FCBD01] border-[#FCBD01] rounded-2xl px-4 py-3 pl-10"
          />
        </div>
      </div>
      {/* Display search result */}
      {searchResult && (
        <div
          className={`mt-2 bg-white rounded-2xl border-2 border-[#FCBD01] p-2 font-poppins text-md ${
            searchResult === clickedText
              ? 'text-[#FCBD01] font-bold'
              : 'text-[#170F49]'
          }`}
        >
          <div
            className="cursor-pointer rounded-md p-2"
            onClick={() => handleClick(searchResult)}
          >
            {searchResult}
          </div>
        </div>
      )}
      {/* Display three random language names */}
      <div className="mt-4 bg-white rounded-2xl border-2 border-[#FCBD01] p-3 font-poppins text-sm text-[#170F49]">
        {randomLanguages.map((language: string, index: number) => (
          <div
            key={index}
            className={`cursor-pointer hover:outline outline-[#FCBD01] rounded-md p-1.5 mb-1 ${
              language === clickedText ? 'text-[#FCBD01]' : 'text-[#170F49]'
            }`}
            onClick={() => handleClick(language)}
          >
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchLang;
