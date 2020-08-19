import React from 'react';
import {Card,CardBody,CardImg,CardTitle } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../App.css';
import {  Link } from "react-router-dom";

function RenderPlace({place, onCLick}){
        return(

                    <Card  className=" m-2">
                        
                        <CardTitle align="center">{place.name}</CardTitle>
                        <CardBody>
                        <Link to={`/home/${place.name}`}>
                            <CardImg height="100%" src={place.img} alt={place.name}/>
                            </Link>
                        </CardBody>
                        
                    </Card>
                
        );
    
   
}
const TravelCard = (props) =>{

    

       /* this.state = {
            places:PLACES,
            selectedPlace: null
        };*/
    

   /* onPlaceSelect(place){
        this.setState({selectedPlace: place});
    }*/

    
    
        
        let asia = props.places.filter((place) => place.tag === "Asia");
        const asianCountries = asia.map((place)=>{
            return (
                <div  className="col-12 col-md-4 d-flex min-vh-100">
                    <RenderPlace place={place} onClick={props.onClick}/>
                </div>
                
            );
        });
        let europe = props.places.filter((place) => place.tag === "Europe");
        const europeanCountries = europe.map((place)=>{
            return (
                <div  className="col-12 col-md-4 d-flex min-vh-100">
                    <RenderPlace place={place} onClick={props.onClick}/>
                    
                </div>
                
            );
        });
        let africa = props.places.filter((place) => place.tag === "Africa");
        const africanCountries = africa.map((place)=>{
            return (
                <div  className="col-12 col-md-4 d-flex min-vh-100">
                    <RenderPlace place={place} onClick={props.onClick}/>
                </div>
                
            );
        });

        const images = props.places.map((place) =>{

            return ( <img src= {place.img} className="sliderimg "/> );
            
        });
        
        return (
            
            <div  className="container col-md-12">
                
                <div className="row">

                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        {images}
                    </AliceCarousel>
                    <h1 align="center" className="col-12 underline">Enjoy The Experience</h1>
                    <div className="row">
                    <h1 align="center" className="col-12 underline-topic">Asia</h1>
                        {asianCountries}
                    </div>
                    <div className="row">
                    <h1 align="center" className="col-12 underline-topic">Europe</h1>
                        {europeanCountries}
                    </div>
                    <div className="row">
                    <h1 align="center" className="col-12 underline-topic">Africa</h1>
                        {africanCountries}
                    </div>
                </div>
                
            </div>
        );

}

export default TravelCard;
