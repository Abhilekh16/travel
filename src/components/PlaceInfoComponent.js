import React from 'react';



const PlaceInfo = (props) =>{
   
   return(
        <div className="container">
            <h1 align="center">{props.places.name}</h1>
            <img width="100%" src={props.places.img} alt={props.places.name}/>
            <h2 align="center">About</h2>
            <p>{props.places.about}</p>
            <h2 align="center">History</h2>
            <p>{props.places.history}</p>
            <h2 align="center">Geography</h2>
            <p>{props.places.geography}</p>
        </div>
        
        
            
       
    
    );
}

export default PlaceInfo;
