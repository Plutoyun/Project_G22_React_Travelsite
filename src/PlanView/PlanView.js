import React, { Component } from 'react';
import { Row, Col,Affix } from 'antd';
import SideView from "../Side/SideView";
import PlanItemView from "../PlanView/PlanItemView";
import Timeline from "../Timeline/Timeline";
import Navbar from "../Navbar/Navbar";
import ResultList from "../ResultList/ResultList";
import Search from "../Search/Search";
import DetailItem from "../Details/DetailsItem";

class PlanView extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, previous: 0 };
      }
    componentWillMount() {
        this.data  =  <DetailItem/>;
        // <PlanItemView/>;
    }
    render() {
        return (
            <div>
                <Navbar/>
                
                
                <Row>
                    <Col span={2} />
                    <Col span={22}>
                    <Timeline content={this.data}/>
                    </Col>
                </Row>
                <Affix style={{ position: 'absolute', top:"50%"}}>
                <SideView/>
                </Affix>
            </div>
        );
    }
}

export default PlanView;