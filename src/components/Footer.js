/**
 * Created by zhouhuang on 2017/1/17.
 */
import React from 'react';
import TotalPriceBar from 'TotalPriceBar';
import StatementsButton from 'StatementsButton';
export default React.createClass({
    render: function() {
        return <div className="title">
            <TotalPriceBar/>
            <StatementsButton/>
        </div>;
    }
});