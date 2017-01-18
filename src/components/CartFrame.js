/**
 * Created by zhouhuang on 2017/1/17.
 */
import React from 'react';
import TopTitle from './TopTitle';
import AddressBar from './AddressBar';
import Footer from './Footer';
import GoodsList from './GoodsList';
export default React.createClass({
    render: function() {
        return <div className="cart">
            <TopTitle/>
            <AddressBar/>
            <GoodsList/>
            <Footer/>
        </div>;
    }
});