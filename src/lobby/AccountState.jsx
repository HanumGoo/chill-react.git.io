import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const globalAccountObjectJson = createContext(null);
// eslint-disable-next-line react-refresh/only-export-components
export const globalAccountAPIObjectJson = createContext(null);
// eslint-disable-next-line react-refresh/only-export-components
export const globalEventUpdateAccountAPIObjectJson = createContext(null);

function GlobalState( {children} ) {

    const [isAccountData, setIsAccountData] = useState(null);
    const [isAccountDataAPI, setIsAccountDataAPI] = useState(null);
    // const [isEventUpdateAccountDataAPI, setIsEventUpdateAccountDataAPI] = useState(() => {});
    const updateUserData = async (username, password) => {
        // eslint-disable-next-line no-unused-vars
        const response = await fetch(`https://67e3a95d2ae442db76d0faf3.mockapi.io/api/v1/account-user/${sessionStorage.getItem("user-id")}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username: username, password: password})
        });
        }

    useEffect(() => {
        
        // eslint-disable-next-line no-unused-vars
        const accountObjectJson = fetch("/Profile.json").then((response) => response.json()).then((data) => setIsAccountData(data));
        
        const fetchUser = async () => {
            const response = await fetch(`https://67e3a95d2ae442db76d0faf3.mockapi.io/api/v1/account-user/${sessionStorage.getItem("user-id")}`);
            const theDataT = await response.json();
            setIsAccountDataAPI(theDataT);
            }
        


        
        fetchUser();
        // setIsEventUpdateAccountDataAPI(updateUserData);
        // console.log(isEventUpdateAccountDataAPI);

    }, [])
    
    if (isAccountData === null || isAccountDataAPI === null || updateUserData === null)
    {
        return <div className="waitMoment">wait...</div>
    }

    return (
        <div className="doneMoment show">
                <globalAccountObjectJson.Provider value={isAccountData} >

                <globalAccountAPIObjectJson.Provider value={isAccountDataAPI}>

                    <globalEventUpdateAccountAPIObjectJson.Provider value={updateUserData}>
                    {children}
                    </globalEventUpdateAccountAPIObjectJson.Provider>
                    
                </globalAccountAPIObjectJson.Provider>

                </globalAccountObjectJson.Provider>
        </div>
        
    )
}

export default GlobalState;