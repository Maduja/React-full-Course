import { createContext } from "react"
import Login from "../../project2/src/Login"

export const dataContext = createContext()

function Home(){
    const data = "datadata"
    
return(
    <>

        <p>Home Page</p>

        
        <dataContext.Provider value ={data}>
            <Login/>
        </dataContext.Provider>
    </>
)
}

export default Home