import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import './DeletarProdutos.css'
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useEffect, useState } from 'react';
import Produtos from "../../../../models/Produtos";


export default function DeletarProdutos() {
    let navigate = useNavigate()
    const {id}  = useParams<{ id: string}>();
    const [token, setToken] = useLocalStorage('token')
    const [prod, setProd] = useState<Produtos>({
        id: 0,	
        nome: '',	
        preco: '',
        quantidade: '',	
        descricao:''
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
    },[id])

    async function findById(id: string) {
        await 
    }

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
                                <Button variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button variant="contained" className="btn-nao" size='large'>
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