import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import './DeletarCategoria.css'
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useEffect, useState } from 'react';
import Produtos from "../../../../models/Produtos";
import Categoria from "../../../../models/Categoria";
import { deletar } from "../../../../services/Services";


export default function DeletarCategoria() {
    let navigate = useNavigate()
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token')
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        tipo: '',
        descricao: ''
    })

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
        await buscaId(`/categorias/${id}`, categoria, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function click(value: any) {
        switch (value) {
            case 1:
                deletar(`/categoria/${id}`, {
                    headers: {
                        'Authorization': token
                    }
                })
                break;
            case 0:

        }
    }

    // function sim(){
    //     deletar(`/categoria/${id}` , {
    //         headers:{
    //             'Authorization': token
    //         }
    //     })
    //     alert('Categoria deletada com sucesso!')
    //     navigate('/categorias')
    // }

    // function nao(){
    //     navigate('categorias')
    // }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a postagem:
                            </Typography>
                            <Typography color="textSecondary">
                                Postagem escolhida
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={ } value={1} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button value={0} variant="contained" className="btn-nao" size='large'>
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