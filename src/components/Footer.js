/**
 * Created by zhouhuang on 2017/1/17.
 */
import React from 'react';
import TotalPriceBar from './TotalPriceBar';
import StatementsButton from './StatementsButton';
import { Row } from 'reactstrap';
export default React.createClass({
    render: function() {
        return <Row>
            <TotalPriceBar/>
            <StatementsButton/>
        </Row>;
    }
});