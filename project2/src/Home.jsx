import { useContext } from "react"
import Login from "../../project2/src/Login"

export const dataContext = useContext()

function Home(){
    const data = "datadata"
    
return(
    <>

        <p>Home Page</p>

        
        <Login />
    </>
)
}

export default Home