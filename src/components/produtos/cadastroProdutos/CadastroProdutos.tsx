import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produtos from '../../../models/Produtos';
import { busca, buscaId, post, put } from '../../../services/Services';
import { TokenState } from '../../store/tokens/TokensReducer'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function CadastroProdutos() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            })
            navigate("/login")

        }
    }, [token])

    const [categorias, setCategorias] = useState<Categoria>(
        {
            id: 0,
            tipo: '',
            descricao: ''
        })
    const [produtos, setProdutos] = useState<Produtos>({
        id: 0,
        nome: '',
        preco: '',
        quantidade: '',
        descricao: '',
        categoria: null
    })

    useEffect(() => {
        setProdutos({
            ...produtos,
            categorias: categorias
        })
    }, [categorias])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`/postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setProdutos({
            ...produtos,
            [e.target.name]: e.target.value,
            categorias: categorias
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await put(`/produtos`, produtos, setProdutos, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Produtos atualizada com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                })
            } catch (error) {
                toast.error('Erro ao atualizar sua produtos verifique os campos!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                })
            }

        } else {
            try {
                post(`/produtos`, produtos, setProdutos, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Produtos cadastrada com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                })
            } catch (error) {
                toast.error('Erro ao cadastrar sua postagem, tente novamente!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                })
            }
        }

        back()

    }

    function back() {
        navigate('/posts')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={produtos.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={produtos.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="preco" label="preco" name="preco" variant="outlined" margin="normal" fullWidth />
                <TextField value={produtos.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="quantidade" label="quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />
                <TextField value={produtos.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="descricao" label="descricao" name="descricao" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Categorias </InputLabel>
                    <Select

                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategorias, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.tipo}{categoria.descricao}</MenuItem>
                            ))
                        }

                    </Select>
                    <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                    <Button type="submit" variant="contained" className='botao-post-finalizar'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProdutos;