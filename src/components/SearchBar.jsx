import { useState } from "react";
import Result from "./Result";

function SearchBar({items, onItemSelected}) {
    
    const [query, setQuery] = useState("mi");
    const [results, setResults] = useState([]);

    function handleOnChange(e) {
        const value = e.target.value;
        setQuery(value);
    }

    function handleResults(items) {
        setResults(items);
    }

    function handleItemSelected(){

    }
    
    
    return ( 
        <>
            <div className="searchBarContainer">
            {results && <div>{results.length}</div>}
            <input className="input" type={"text"} onChange={handleOnChange} value={query}></input>
            <Result
            items={items}
            query={query}
            onItemSelected={handleItemSelected}
            onResultsCalculated={handleResults}
            />
            </div>
        </>
    );
}

export default SearchBar;