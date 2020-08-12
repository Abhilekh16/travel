import React, * as react from 'react';
import NavBar from './NavBarComponent';
import TravelCard from './TravelCardComponent';

class Main extends react.Component{

    constructor(props){
        
        super(props);
    }

    render(){

        return (
            <div>
                <NavBar/>
                <TravelCard/>
            </div>
                
            
            
        )
    }  
   
}

export default Main;