/**
 * Created by zhouhuang on 2017/1/17.
 */
import React from 'react';
import Goods from './Goods';
import { Container, Row } from 'reactstrap';
export default React.createClass({
    getGoodsList: function () {
        return this.props.goodsList || [];
    },
    render: function () {
        return <Container>
            {this.getGoodsList().map(entry =>
                <Row><Goods goodsinfo={entry}/></Row>
            )}
        </Container>;
    }
});