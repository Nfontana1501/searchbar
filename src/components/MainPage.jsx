import React, { useState } from "react";
import {people, emails, calendar} from '../data/mockdata';
import SearchBar from "./SearchBar";

function MainPage() {

    const [data, setData] = useState([...people, ...emails, ...calendar]);
    const [selection, setSelection] = useState(null);
    const [currentOption, setCurrentOption] = useState("all")

    function handleClick(e){
        const option = e.target.name;

        switch (option){
            case "all": 
                setData([...people, ...emails, ...calendar]);
                setCurrentOption("all");
                break;

            case "people":
                setData([...people]);
                setCurrentOption("people");
                break;

            case "emails": 
                setData([...emails]);
                setCurrentOption("emails");
                break;

            case "calendar":
                setData([...calendar]);
                setCurrentOption("calendar");
                break;
        }
    }

    function handleOnItemSelected(item){
        setSelection(item)
    }


    return ( 
        <>
        <button name="all" onClick={handleClick} className="btn">Todos</button>
        <button name="people" onClick={handleClick} className="btn">Personas</button>
        <button name="emails" onClick={handleClick} className="btn">Mails</button>
        <button name="calendar" onClick={handleClick} className="btn">Calendario</button>
        <div>
        </div>
        <SearchBar items={data} onItemSelected={handleOnItemSelected} />
        </>
    );
}

export default MainPage;