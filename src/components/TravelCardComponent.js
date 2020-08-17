import React, {Component} from 'react';
import {Card,CardBody,CardImg,CardTitle, CardText } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {PLACES} from '../shared/places';
import '../App.css';import 
{  Link } from "react-router-dom";

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
                <div  className="col-5 col-md-10 m-3 ">
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
        let asia = this.state.places.filter((place) => place.tag === "Asia");
        const asianCountries = asia.map((place)=>{
            return (
                <div  className="col-12 col-md-4 d-flex min-vh-100">
                    <Card  className=" m-2" key = {place.id}
                    onClick = {()=> {this.onPlaceSelect(place)}}>

                        <CardTitle align="center">{place.name}</CardTitle>
                        <CardBody >
                            <CardImg height="100%" src={place.img} alt={place.name}/>
                        </CardBody>
                    </Card>
                </div>
                
            );
        });
        let europe = this.state.places.filter((place) => place.tag === "Europe");
        const europeanCountries = europe.map((place)=>{
            return (
                <div  className="col-12 col-md-4 d-flex min-vh-100">
                    <Card  className=" m-2" key = {place.id}
                    onClick = {()=> {this.onPlaceSelect(place)}}>

                        <CardTitle align="center">{place.name}</CardTitle>
                        <CardBody >
                            <CardImg height="100%" src={place.img} alt={place.name}/>
                        </CardBody>
                    </Card>
                </div>
                
            );
        });
        let africa = this.state.places.filter((place) => place.tag === "Africa");
        const africanCountries = africa.map((place)=>{
            return (
                <div  className="col-12 col-md-4 d-flex min-vh-100">
                    <Card  className=" m-2" key = {place.id}
                    onClick = {()=> {this.onPlaceSelect(place)}}>

                        <CardTitle align="center">{place.name}</CardTitle>
                        <CardBody >
                            <CardImg height="100%" src={place.img} alt={place.name}/>
                        </CardBody>
                    </Card>
                </div>
                
            );
        });

        const images = this.state.places.map((place) =>{

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
                <div  className="row">
                    {this.renderPlace(this.state.selectedPlace)}
                </div>
            </div>
        );
    }

}

export default TravelCard;