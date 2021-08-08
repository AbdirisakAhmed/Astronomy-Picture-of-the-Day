import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Col, Row} from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,CardHeader
  } from 'reactstrap';

 function Data(props){
     const [nasaPicture, setNasaPicture]= useState({})

//Creating API 
useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=u6mqMWr1vAvM1cXkqoSzHmTL9msT1fBLBrA66DXm")
    .then((res) => {
        setNasaPicture(res.data)
        
    })
    .catch((error) => console.log(error))

}, [])

return (
    <Row>
        <Col>
        <Card className="space">
        <CardHeader tag="h1" className="title">Astronomy Picture Of The Day</CardHeader>
            <CardBody>
        <CardImg className="picture" src={"Picture Of The Day: ", nasaPicture.hdurl} />
        <CardText ><span>Explanation:</span><br></br> {nasaPicture.explanation} </CardText>
        <CardSubtitle className="middle"> <span>Date: {nasaPicture.date}</span></CardSubtitle>
        
       
        <CardTitle tag="h4" className="middle"> <span>Title:</span> {nasaPicture.title} </CardTitle>
        
        </CardBody>
        </Card>
        </Col>
    </Row>
)


}


export default Data;
