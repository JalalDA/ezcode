import React, { Component } from 'react'
import {counterDown, counterUp} from '../../redux/actionCreator/counter'
import {connect} from 'react-redux'

class Profile extends Component {
    state={
        counterChange : 0
    }
render() {
    // const {doCounterDown, doCounterUp} = this.props
    const {number, doCounterUp, doCounterDown} = this.props
    return (
    <div>
        <p>Counter : {number}</p>
        <input type="number" value={this.state.counterChange} onChange={(e)=>{
            this.setState({
                counterChange : e.target.value
            })
        }} />
        <div className="btn-primary" onClick={doCounterUp(this.state.counterChange)}>UP</div>
        <div className="btn-secondary" onClick={doCounterDown()}>DOWN</div>
    </div>
    )
}
}

const mapStateToProps = (reduxState) =>{
    const {counter : {number}} = reduxState
    return number
}
const mapDispatchToProps = (dispatch) =>{
    return{
        doCounterUp : (num)=>{
            dispatch(counterUp(parseInt(num)))
        },
        doCounterDown : ()=>{
            dispatch(counterDown)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)