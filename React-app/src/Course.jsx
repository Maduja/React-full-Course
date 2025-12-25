import propTypes from 'prop-types'
import { useState } from 'react';

function Course(props){

        const [purchased,setPurchased] = useState(false)

        function BuyCourse(discout){
            console.log(props.name,"purchased ",discout," discount appliyed")
            setPurchased(true)
            console.log(purchased)
        }
    
        return(
        
        props.name && <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={(event)=>BuyCourse(20)}>BuyNow</button>
            <p>{purchased ? "Done" : "Get it now"}</p>
            
        </div>
    );
    
}

// Course.defaultProps = {
//     name:"code io course",
//     price:"$30"
// }

Course.propTypes = {
    name : propTypes.string,
    show: propTypes.bool
}

export default Course