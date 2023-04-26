import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import './DeletarCategoria.css'
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useEffect, useState } from 'react';
import {  buscaId, deletar } from "../../../services/Services";
import Categoria from "../../../models/Categoria";
import React, { ChangeEvent } from 'react';


export default function DeletarCategoria() {
    let navigate = useNavigate()
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token')
    const [categoria, setCategoria] = useState<Categoria>()

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        await buscaId(`/categoria/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        deletar(`/categoria/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        alert('Categoria deletada com sucesso!')
        back()
    }

    function nao() {
        back()
    }

    function back() {
        navigate('/categorias')
    }


    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a Catergoria;
                            </Typography>
                            <Typography color="textSecondary">
                                {categoria?.descricao}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" className="btn-nao" size='large'>
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}