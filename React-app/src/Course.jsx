// import image from './assets/html.png';

const course1="HTML"

function Course(props){

    return(
        
        <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            
        </div>
    );
}

Course.defaultProps = {
    name:"code io course",
    price:"$30"
}

export default Course