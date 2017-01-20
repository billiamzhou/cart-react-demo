/**
 * Created by zhouhuang on 2017/1/17.
 */
import React from 'react';
import { Col, Button } from 'reactstrap';
export default React.createClass({
    render: function () {
        return <Col xs="4">
            <Button color="danger" size="lg">结算</Button>
        </Col>;
    }
});