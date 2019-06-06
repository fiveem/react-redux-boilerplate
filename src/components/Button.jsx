import React from 'react'
import { connect } from 'react-redux'
import { updateResource } from '../actions/resource'

const mapDispatchToProps = {
    updateResource
}

class Button extends React.Component {
    render() {
        return <button onClick={this.props.updateResource}>Update Resource</button>
    }
}

export default connect(null, mapDispatchToProps)(Button)