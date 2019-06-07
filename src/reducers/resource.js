import { UPDATE_RESOURCE } from '../constants'

const initialState = {
    value: 0
}

const resource = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_RESOURCE:
            return {
                ...state,
                value: state.value + 1
            }
        default:
            return state
    }
}

export default resource