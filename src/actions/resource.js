import { UPDATE_RESOURCE } from './types'

export function updateResource(resource) {
    return dispatch => {
        dispatch({
            type: UPDATE_RESOURCE,
            resource
        })
    }
}
