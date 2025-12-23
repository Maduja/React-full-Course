import propTypes from 'prop-types'

function Course(props){

        function BuyCourse(discout,e){
            console.log(props.name,"purchased ",discout," discount appliyed")
            console.log(e)
        }
    
        return(
        
        props.name && <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={(event)=>BuyCourse(20,event)}>BuyNow</button>
            
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