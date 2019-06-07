import { UPDATE_RESOURCE } from '../constants'

export function updateResource(resource) {
    return dispatch => {
        dispatch({
            type: UPDATE_RESOURCE,
            resource
        })
    }
}
