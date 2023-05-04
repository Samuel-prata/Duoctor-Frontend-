import React, { useEffect, useState } from 'react'
import { Box, CardMedia, Grid } from '@mui/material'
import { Card, CardActions, CardContent, Typography, Button, Paper, CardActionArea } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { busca } from '../../../services/Services'
import './ListagemCategoria.css';
import Categoria from '../../../models/Categoria'
import { UserState } from '../../../store/tokens/TokensReducer'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'




function ListagemCategoria() {

    const [categorias, setCategoria] = useState<Categoria[]>([])
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    // useEffect(() => {
    //     if (token !== '') {
    //       toast.error('Você precisa estar logado', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: false,
    //         draggable: false,
    //         theme: 'colored',
    //         progress: undefined,
    //     })
    //       navigate("/login")
    //     }
    //   }, [token])

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
                        // <Card variant="outlined" className='show-card'>
                        //     <CardContent className='card-conteudo'>
                        //         <Typography gutterBottom>
                        //             Categoria
                        //         </Typography>
                        //         <Typography variant="h5" component="h2">{categoria.tipo}</Typography>
                        //         <Typography variant="h5" component="h2">{categoria.descricao}</Typography>
                        //     </CardContent>
                        //     <CardActions>
                        //         <Box display="flex" justifyContent="center" mb={1.5}>

                        //         </Box>
                        //     </CardActions>
                        // </Card>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="src/assets/img/hand-holds-medicine-capsules-icon-sign-symbol-blue-background-3d-illustration-cartoon-healthcare-medical-concept.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography  variant="h5" component="div">
                                        {categoria.tipo}
                                    </Typography>
                                    <Typography variant="body2">
                                       {categoria.descricao}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
            </Grid>
        </>
    );
}

export default ListagemCategoria;