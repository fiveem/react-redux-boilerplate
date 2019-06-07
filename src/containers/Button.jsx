import { connect } from 'react-redux'
import { updateResource } from '../actions'
import Button from '../components/Button'

const mapDispatchToProps = {
    updateResource
}

export default connect(null, mapDispatchToProps)(Button)