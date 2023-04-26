import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { Card, CardActions, CardContent, Typography, Button, Paper } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { busca } from '../../../services/Services'
import './ListagemCategoria.css';
import Categoria from '../../../models/Categoria'




function ListagemCategoria() {

    const [categorias, setCategoria] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token')
    let history = useNavigate();

    useEffect(() => {
        if (token === '') {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])

    async function getCategoria() {
        await busca("/categoria", setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategoria()
    }, [categorias.length])

    return (
        <>
            <Grid container className="box-cards">
                {

                    categorias.map(categoria => (
                        <Card variant="outlined" className='show-card'>
                            <CardContent className='card-conteudo'>
                                <Typography gutterBottom>
                                    Categoria
                                </Typography>
                                <Typography variant="h5" component="h2">{categoria.tipo}</Typography>
                                <Typography variant="h5" component="h2">{categoria.descricao}</Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/formularioCategoria/${categoria.id}`} className='text-decorator-none'>
                                        <Box>
                                            <Button variant='contained' className="marginLeft" size='small'>Atualizar</Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarCategoria/${categoria.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant='contained' size='small'>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    ))}
            </Grid>
        </>
    );
}

export default ListagemCategoria;