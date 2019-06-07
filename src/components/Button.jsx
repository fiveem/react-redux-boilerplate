import React from 'react'

class Button extends React.Component {
    render() {
        return <button onClick={this.props.updateResource}>Update Resource</button>
    }
}

export default Button