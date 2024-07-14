import { useCallback, useEffect, useState } from "react";

const Search = () => {

  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [cache, setCache] = useState({})

  useEffect(() => {
    let id;
    if(searchInput) {
      id = setTimeout(() => {
        searchCall()
      }, 500)
    }
    return () => clearTimeout(id);
  }, [searchInput]);

  async function searchCall(){
    if(cache[searchInput]) setSearchResults(cache[searchInput])
    else {
      const json = await fetch(`https://www.google.com/complete/search?q=${searchInput}&client=firefox`);
      const res = await json.json();
      setCache((prevCacheState)=> {
        prevCacheState[searchInput] = res[1];
        return prevCacheState;
      })
      setSearchResults(res[1]);
    }
  }

  

  return (
    <div className='search-container'>
      <input
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
        type='text'
        className='search-input'
        onFocus={()=>setIsInputFocused(true)}
        onBlur={()=>setIsInputFocused(false)}
      />
      {
        isInputFocused &&
        searchInput &&
        searchResults.length > 0 &&
        <ul>
          {
            searchResults.map((search, index) => (
              <li key={search+index}>{search}</li>
            ))
          }
        </ul>
      }
    </div>
  );
}
 
export default Search;