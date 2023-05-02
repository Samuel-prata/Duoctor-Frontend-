export type Action = {type: 'ADD_TOKENS'| 'ADD_ID', payload: string}

export const addToken = (token: string, ): Action => ({
    type : 'ADD_TOKENS',
    payload: token, 
})

export const addId = (id: string): Action => ({
    type : 'ADD_ID',
    payload: id,
})