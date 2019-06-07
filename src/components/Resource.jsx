import React from 'react'

class Resource extends React.Component {
    render() {
        const { value } = this.props.resource
        return (
            <p>Current value: {value}</p>
        )
    }
}

export default Resource