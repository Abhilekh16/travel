import React, {Component} from 'react';
import {Card,CardBody,CardImg,CardTitle, CardText } from 'reactstrap';
import {PLACES} from '../shared/places';

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
                <div  className="col-5 col-md-6 ">
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

        return (
            <div className="container">
                <div className="row">
                    {places}
                </div>
                <div className="row">
                    {this.renderPlace(this.state.selectedPlace)}
                </div>
            </div>
        );
    }

}

export default TravelCard;