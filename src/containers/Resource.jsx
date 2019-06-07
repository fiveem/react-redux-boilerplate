import { connect } from 'react-redux'
import Resource from '../components/Resource'

const mapStateToProps = state => {
    return {
        resource: state.resource
    }
}

export default connect(mapStateToProps)(Resource)