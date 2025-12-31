import propTypes from 'prop-types'
import { useEffect, useState } from 'react';

function Course(props){

        const [purchased,setPurchased] = useState(false)
        const [discount,setDiscount] = useState(props.price)

        function BuyCourse(amt){
            console.log(props.name,"purchased ",amt," discount appliyed")
            setPurchased(true)
            setDiscount(discount-amt)
            console.log(purchased)
        }

        // useEffect(()=>{
        //     console,log('hello world')
        // });
    
        return(
        
        props.name && <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{discount}</p>
            <button onClick={()=>BuyCourse(20)}>BuyNow</button>
            <button onClick={()=>props.delete(props.id)}>Delete</button>
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