import { Box, Button } from "@mui/material"
import { Grid, Typography, TextField, Avatar, CssBaseline, Paper, Checkbox, FormControlLabel } from '@material-ui/core';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Services";
import './Login.css';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToken } from "../../store/tokens/Actions";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            Duoctor
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



export default function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('')
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
            tipo:''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();//não atualizar a página

        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success('Usuário logado com sucesso', {
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
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
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

    return (
    
        <Grid container>
            <Grid container component="main" className="root">
                <Grid item xs={6} className="image" />
                <Grid item xs={6} className="paper" justifyContent="center" >
                    <Box paddingX={10}>
                        {/* <Avatar className="avatar">
                            <LockOutlinedIcon style={{ color: 'blue' }}/>
                        </Avatar> */}
                        <Typography component="h1" variant="h3" align="center" className="txtEntrar">
                            Entre
                        </Typography>
                        <form className='form' onSubmit={onSubmit}>
                            <TextField
                                value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="usuario"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="senha"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Lembre de mim"
                                className="checkbox"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Entre
                            </Button>
                            <Grid container className="linksAjuda">
                                <Grid item xs>
                                    <Link to="#">
                                        Esqueceu a senha?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/cadastro">
                                        {"Não tem uma conta? Cadastre-se"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>

                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid >
        </Grid>
    );
}

