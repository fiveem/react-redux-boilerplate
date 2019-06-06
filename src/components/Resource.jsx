import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        resource: state.resource
    }
}

class Resource extends React.Component {
    render() {
        const { value } = this.props.resource
        return (
            <p>Current value: {value}</p>
        )
    }
}

export default connect(mapStateToProps)(Resource)