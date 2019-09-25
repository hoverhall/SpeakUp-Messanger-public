// modules and libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CompanionShirtInfo extends Component {

    render() {
        return (
            <div className="companion-shirt-info">
                <img className="logoImg" src={this.props.db_snapshot.img} alt="logo" />
                <span className="topName">{`${
                    this.props.db_snapshot.fname
                } ${
                    this.props.db_snapshot.lname
                }`}</span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        db_snapshot: state.db_snapshot
    }

}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps)(CompanionShirtInfo)