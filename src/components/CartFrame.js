/**
 * Created by zhouhuang on 2017/1/17.
 */
import React from 'react';
import TopTitle from './TopTitle';
import AddressBar from './AddressBar';
import Footer from './Footer';
import GoodsList from './GoodsList';
import { Container, Row, Col } from 'reactstrap';
export default React.createClass({
    render: function() {
        return <Container >
            <TopTitle/>
            <AddressBar/>
            <GoodsList goodsList={this.props.goodsList}/>
            <Footer/>
        </Container>;
    }
});