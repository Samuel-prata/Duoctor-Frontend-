export type Action = {type: 'ADD_TOKENS'|'ADD_ID', payload: string}

export const addToken = (token: string, ): Action => ({
    type : 'ADD_TOKENS',
    payload: token,
})

// Adicione o tipo de ação para pegar o ID
export const addId = (id: string): Action =>({
    type: "ADD_ID",
    payload: id 
})