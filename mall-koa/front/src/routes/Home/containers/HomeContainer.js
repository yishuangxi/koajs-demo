/**
 * Created by Yi on 11/10/2016.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {HOME_TEST} from '../actions'
import * as HomeActions from '../actions'


import Header from '../components/Header'
import Footer from '../../../components/Footer'

class HomeContainer extends Component {
  render() {
    console.log(this.props)
    const {dispatchHomeTest} = this.props
    dispatchHomeTest()
    return (
      <div>
        <Header />

        <Footer />
      </div>
    )
  }
}

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    a: 'hello',
    b: 'world'
  }
}
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchHomeTest: () => {
      dispatch({
        type: HOME_TEST,
        payload: 'home test payload'
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)