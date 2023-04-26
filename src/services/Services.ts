import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://duoctor.onrender.com/'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

export const atualizar = async (url: any, dados: any, setDado: any, headers: any) => {
    const resposta = await api.put(url, dados, headers)
    setDado(resposta.data)
}

export const deletar = async (url: any, headers: any) => {
    await api.delete(url, headers)

}
