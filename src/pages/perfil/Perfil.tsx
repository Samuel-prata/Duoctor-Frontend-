import { useEffect, useState } from 'react';
import { Box, Button, Card, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import User from '../../models/User';
import { UserState } from '../../store/tokens/TokensReducer';
import { buscaId } from '../../services/Services';
import './Perfil.css'

import { CardActions, CardContent, Container, Typography } from '@material-ui/core';

export default function Perfil() {

    let history = useNavigate()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({

        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        tipo: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        await buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <>
            <Container className='grid-pai' >
                <Grid container display='flex' spacing={8} xs={9} rowSpacing={0.2} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
                    <Grid item xs={9}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent className='card-perfil'>
                                <Typography >
                                    <img className='card-imagem'
                                        src='src/assets/img/user.png'
                                        alt={user.nome} />
                                </Typography>
                                <Box>
                                    <Typography variant="h5" component="div">
                                        Nome: {user.nome}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti minus assumenda fugiat iure vero
                                        culpa quod optio quasi libero quidem soluta ab quae accusamus repellat quibusdam at, rerum laboriosam.
                                    </Typography>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container xs={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} className='grid-funcoes'>
                            <Card >
                                <CardContent>
                                    <Typography >
                                        Minhas postagens
                                    </Typography>
                                    <Typography >
                                        minhas curtidas
                                    </Typography>
                                    <Typography>
                                        minhas doações
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}