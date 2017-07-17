/**
 * Created by AC on 2017/7/17.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
    render() {
        const settings = {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };

        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div class="leftContainer">
                            <Carousel {...settings}>
                                <div><img src="./src/images/carousel_1.jpg"/></div>
                                <div><img src="./src/images/carousel_2.jpg"/></div>
                                <div><img src="./src/images/carousel_3.jpg"/></div>
                                <div><img src="./src/images/carousel_4.jpg"/></div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}