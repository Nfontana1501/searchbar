import { useEffect, useMemo, useState } from "react";
import MarkedItem from "./MarkedItem";

function Result({items, query, onItemSelected, onResultsCalculated}) {
    
    const [result, setResult] = useState([]);
    const filteredItems = useMemo(() => findMatch(items, query), [items, query])

    useEffect(() => {
        onResultsCalculated(result);
    }, [result]);

    function findMatch(items, query){
        const res = items.filter((i) => {
            return (i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0)
        })

        setResult(res);
        return res
    }
    
    return ( 
        <>
            {query !== "" ?
            result.map(element => <MarkedItem key={element.id} item={element} query={query} onClick={onItemSelected} />)
            : ""
            }
        </>
    );
}

export default Result;