import React, * as react from 'react';
import TravelCard from './TravelCardComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Route, Switch, Redirect} from 'react-router-dom';

class Main extends react.Component{

    constructor(props){
        
        super(props);
    }

    render(){

        return (
            <div>
            
                <Header/>
                <Switch>
                    <Route path="/home" component={TravelCard}/>
                    <Redirect to="/home"/>
                </Switch>
                
                <Footer/>
            </div>
                
            
            
        )
    }  
   
}

export default Main;