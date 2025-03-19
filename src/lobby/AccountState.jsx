import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const globalAccountObjectJson = createContext(null);

function GlobalState( {children} ) {

    const [isAccountData, setIsAccountData] = useState(null);

    useEffect(() => {
        
        const accountObjectJson = fetch("/Profile.json").then((response) => response.json()).then((data) => setIsAccountData(data));
        

    }, [])
    
    if (isAccountData === null)
    {
        return <div className="waitMoment">wait...</div>
    }

    return (
        <globalAccountObjectJson.Provider value={isAccountData} >
            {children}
        </globalAccountObjectJson.Provider>
    )
}

export default GlobalState;