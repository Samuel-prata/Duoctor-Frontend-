import { Action } from './Actions';

export interface UserState {
    tokens: string,
    id: string
}

const initialState = {
    tokens: '',
    id: ''
}

export const tokenReducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {

        case "ADD_TOKENS":
            {
                return { tokens: action.payload, id: state.id }
            }

        case "ADD_ID": {
            
            return { id: action.payload, tokens: state.tokens }

        }

        default:
            return state
    }

}
