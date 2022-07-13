import React from "react";
import {
    Col,
    Row,
    Container,
} from 'reactstrap'
import { useNavigate } from "react-router-dom";
import '../styles/Houseguests.css'

const Houseguests = () => {

    const navigate = useNavigate()

    const height = '100'
    const width = '100%'

    const handleImageClick = (imageUrl, name) => {
        navigate('/profile', { state: { imageUrl, name } })

    }

    return (
        <Container>
            <h1 className="text-primary">Houseguests</h1>
            <Row>
                <Col sm='3'>
                    <img onClick={() => handleImageClick('https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Paloma-On-BB24.jpg?resize=773.5%2C435&ssl=1', 'Paloma')} width={width} src="https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Paloma-On-BB24.jpg?resize=773.5%2C435&ssl=1"></img>
                </Col>
                <Col sm='3'>
                    <img onClick={() => handleImageClick("https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Michael-On-BB24.jpg?resize=773.5%2C435&ssl=1", 'Michael')} width={width} src="https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Michael-On-BB24.jpg?resize=773.5%2C435&ssl=1"></img>
                </Col>
                <Col sm='3'>
                    <img onClick={() => handleImageClick("https://www.readersfusion.com/wp-content/uploads/2022/07/Joseph-Abdin-BB24-contestant-1024x537.jpg", 'Joseph')} width={width} src="https://www.readersfusion.com/wp-content/uploads/2022/07/Joseph-Abdin-BB24-contestant-1024x537.jpg"></img>
                </Col>
                <Col sm='3'>
                    <img onClick={() => handleImageClick("https://www.usmagazine.com/wp-content/uploads/2022/07/Big-Brother-24-Cast-Revealed-Meet-16-New-Houseguests-0015.jpg?quality=86&strip=all", 'Denise')} width={width} src="https://www.usmagazine.com/wp-content/uploads/2022/07/Big-Brother-24-Cast-Revealed-Meet-16-New-Houseguests-0015.jpg?quality=86&strip=all"></img>
                </Col>
            </Row>
            <Row>
                <Col sm='3'>
                    <img width={width} src="https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Paloma-On-BB24.jpg?resize=773.5%2C435&ssl=1"></img>
                </Col>
                <Col sm='3'>
                    <img width={width} src="https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Michael-On-BB24.jpg?resize=773.5%2C435&ssl=1"></img>
                </Col>
                <Col sm='3'>
                    <img width={width} src="https://www.readersfusion.com/wp-content/uploads/2022/07/Joseph-Abdin-BB24-contestant-1024x537.jpg"></img>
                </Col>
                <Col sm='3'>
                    <img width={width} src="https://www.usmagazine.com/wp-content/uploads/2022/07/Big-Brother-24-Cast-Revealed-Meet-16-New-Houseguests-0015.jpg?quality=86&strip=all"></img>
                </Col>
            </Row>
            <Row>
                <Col sm='3'>
                    <img width={width} src="https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Paloma-On-BB24.jpg?resize=773.5%2C435&ssl=1"></img>
                </Col>
                <Col sm='3'>
                    <img width={width} src="https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Michael-On-BB24.jpg?resize=773.5%2C435&ssl=1"></img>
                </Col>
                <Col sm='3'>
                    <img width={width} src="https://www.readersfusion.com/wp-content/uploads/2022/07/Joseph-Abdin-BB24-contestant-1024x537.jpg"></img>
                </Col>
                <Col sm='3'>
                    <img width={width} src="https://www.usmagazine.com/wp-content/uploads/2022/07/Big-Brother-24-Cast-Revealed-Meet-16-New-Houseguests-0015.jpg?quality=86&strip=all"></img>
                </Col>
            </Row>
            <Row>
                <Col sm='3'>
                    <img width={width} src="https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Paloma-On-BB24.jpg?resize=773.5%2C435&ssl=1"></img>
                </Col>
                <Col sm='3'>
                    <img width={width} src="https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Michael-On-BB24.jpg?resize=773.5%2C435&ssl=1"></img>
                </Col>
                <Col sm='3'>
                    <img width={width} src="https://www.readersfusion.com/wp-content/uploads/2022/07/Joseph-Abdin-BB24-contestant-1024x537.jpg"></img>
                </Col>
                <Col sm='3'>
                    <img width={width} src="https://www.usmagazine.com/wp-content/uploads/2022/07/Big-Brother-24-Cast-Revealed-Meet-16-New-Houseguests-0015.jpg?quality=86&strip=all"></img>
                </Col>
            </Row>

        </Container>
    )
}

export default Houseguests