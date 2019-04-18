import React, { Component } from 'react';
import { Row, Col, Affix } from 'antd';
import SideView from "../Side/SideView";
import Timeline from "../Timeline/Timeline";
import Navbar from "../Navbar/Navbar";
import { connect } from "react-redux";
import ViewSelection from "../ViewSelection/ViewSelection"
import auth from "../auth";
import firebase from 'firebase'
class PlanView extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0 };
  }
  giveContent = () => {
    console.log(this.props.currentindex);
    var len=this.props.timeline.length;
    var Content=[];
    for(var i=0;i<=len-1;i++)
    {
    Content.push({date:this.props.timeline[i],content:<ViewSelection UI={this.props.UI[i]}/>});
    }
    return Content;
    // var Content = [
    //   {
    //     date: '2019-01-04',
    //     content: <PlanViewDetails UI="PlanItemView" />
    //   },
    //   {
    //     date: '2019-01-05',
    //     content: <PlanViewDetails />
    //   },
    //   {
    //     date: '2019-01-08',
    //     content: <PlanViewDetails />
    //   },
    //   {
    //     date: '2019-01-10',
    //     content: <PlanViewDetails />
    //   }

    // ];
  }

  componentWillMount() {
    this.data = this.giveContent().map((view, index) => {
      return ({
        date: view.date,
        component: (
          <div key={index}>
            {view.content}
          </div>
        )
      });
    });
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps!==this.props) {
      this.data = this.giveContent().map((view, index) => {
        return ({
          date: view.date,
          component: (
            <div key={index}>
              {view.content}
            </div>
          )
        });
      });
    }
  }
  signout = e => {
    e.preventDefault();
    auth.logout(() => {
      this.props.history.push("/SignIn");
    });
    firebase.auth().signOut().then(console.log('signout')
    ).catch(function (error) { console.log(error) });
  }
  showdata =e =>{
    let currentComponent = this;
    const firestore = firebase.firestore()
    const user = firebase.auth().currentUser;
    const userID = user.email
    const docRef = firestore.doc(userID + "/UIState")
    docRef.get().then(function (doc) {
      if (doc && doc.exists) {
        var mydata = doc.data();
        console.log(mydata.uistate)
      }

    }).catch(function (error) { console.log(error) })


  }
  render() {
    return (
      <div>
        <div>{this.props.timeline+"yes"}</div>
        <div>{this.props.UI}</div>
        <div>{this.props.currentindex}</div>

        <Navbar />
        <button onClick={this.signout}>signout</button>
        <button onClick={this.showdata}>signout</button>


        <Row>
          <Col xs={24} sm={24} md={24} lg={23} xl={23} >
            <Timeline content={this.data} />
          </Col>
        </Row>
        
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {

    timeline: state.timeline,
    UI:state.UI,
    currentindex: state.currentindex
  }
}

export default connect(mapStateToProps)(PlanView)
