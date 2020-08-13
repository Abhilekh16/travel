import React, {Component} from 'react';
import {Card,CardBody,CardImg,CardTitle, CardText } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {PLACES} from '../shared/places';
import '../App.css';

class TravelCard extends Component{

    constructor(props){
        super(props);

        this.state = {
            places:PLACES,
            selectedPlace: null
        };
    }

    onPlaceSelect(place){
        this.setState({selectedPlace: place});
    }

    renderPlace(place){
        if(place!=null){
            return(
                <div  className="col-5 col-md-10 ">
                        <Card key = {place.id}>
                            <CardTitle align="center">{place.name}</CardTitle>
                            <CardBody>
                                <CardImg width="100%" src={place.img}/>
                                <CardText>{place.desc}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
       
    }
    render(){
        const places = this.state.places.map((place)=>{
            return (
                <div  className="col-6 col-md-2">
                    <Card key = {place.id}
                    onClick = {()=> {this.onPlaceSelect(place)}}>
                        <CardTitle align="center">{place.name}</CardTitle>
                        <CardBody>
                            <CardImg width="100%" src={place.img}/>
                        </CardBody>
                    </Card>
                </div>
                
            );
        });

        const images = this.state.places.map((place) =>{

            return ( <img src= {place.img} className="sliderimg "/> );
            
        });
        
        return (
            
            <div  className="container">
                
                <div className="row">
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        {images}
                    </AliceCarousel>
                    <h1>Enjoy The Experience</h1>
                    
                    <div className="row">
                        
                        {places}
                    </div>
                    
                </div>
                <div  className="row">
                    {this.renderPlace(this.state.selectedPlace)}
                </div>
            </div>
        );
    }

}

export default TravelCard;