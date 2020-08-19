import React, * as react from 'react';
import TravelCard from './TravelCardComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import PlaceInfo from './PlaceInfoComponent';
import {Route, Switch, Redirect} from 'react-router-dom';
import {PLACES} from '../shared/places';
import {PLACEINFO} from '../shared/palceinfo';

class Main extends react.Component{

    constructor(props){
        
        super(props);
        this.state ={
            places:PLACES,
            placeinfo: PLACEINFO
        };
    }

    render(){
        const PlaceWithId = ({match}) =>{
            return (
                <PlaceInfo places={this.state.placeinfo.filter((place) => place.name === match.params.placeName)[0]}/>
            );
        };
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/home" component={() => <TravelCard places={this.state.places}/>}/>
                    <Route path="/home/:placeName" component={PlaceWithId}/>
                    <Redirect to="/home"/>
                </Switch> 
                <Footer/>
            </div>   
        )
    }  
   
}

export default Main;