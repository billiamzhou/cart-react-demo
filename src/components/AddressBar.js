/**
 * Created by zhouhuang on 2017/1/17.
 */
import React from 'react';
import { Row, Col, Alert } from 'reactstrap';
export default React.createClass({
    render: function () {
        return <Row><Col>
            <Alert color="info">
                请填写收货地址
            </Alert></Col>
        </Row>;
    }
});