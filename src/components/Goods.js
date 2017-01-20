/**
 * Created by zhouhuang on 2017/1/17.
 */
import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
export default React.createClass({
    getGoodsInfo: function () {
        return this.props.goodsinfo;
    },
    render: function () {
        return <Container key={this.getGoodsInfo().goodsCode}>
            <Row>
                <Col xs="1"><FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                    </Label>
                </FormGroup></Col>
                <Col xs="3">
                    <img src={this.getGoodsInfo().imgUrl}/>
                </Col>
                <Col xs="8">
                    <Row><Col>{this.getGoodsInfo().goodsName}</Col></Row>
                    <Row>
                        <Col xs="9">¥ {this.getGoodsInfo().price}</Col>
                        <Col xs="3">数量：{this.getGoodsInfo().count}</Col>
                    </Row>
                </Col>
            </Row>



        </Container>;
    }
});