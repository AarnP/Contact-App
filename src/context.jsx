import React, {useContext, useEffect} from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json();
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
    
    return (
        <AppContext.Provider
        value="Hello"
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}