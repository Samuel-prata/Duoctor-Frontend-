import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { UserState } from "../../../store/tokens/TokensReducer";
import Produtos from "../../../models/Produtos";
import { busca } from "../../../services/Services";
import { toast } from "react-toastify";


export default function ListaProdutoHome() {
    const [produtos, setProdutos] = useState<Produtos[]>([])
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    async function getPost() {
        await busca(`/produtos`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [produtos.length])

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
            navigate("/entrar")

        }
    }, [token])
    return (
        <>

            {
                produtos.map(produto => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Box className='post-header'>
                                    <img src={produto.usuario?.foto} alt={produto.usuario?.nome} className='avatar-lista' />
                                    <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}> Usuário: {produto.usuario?.nome}</Typography>
                                </Box>
                                <Typography variant="body2" component="p">
                                    {produto.categoria?.tipo}
                                </Typography>

                                <Typography variant="h5" component="h2">
                                    {produto.nome}
                                </Typography>

                                <Typography variant="body2" component="p" style={{ fontWeight: 'bold' }}>
                                    R$ {produto.preco}
                                </Typography>

                                <Typography variant="body2" component="p" style={{ fontWeight: 'bold' }}>
                                    Quantidade: {produto.quantidade}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    {produto.descricao}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft, btnAtualizar" size='small'>
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    {/* <Link to='/formularioProduto'>
                                        <Box mx={1} >
                                            <Button variant="contained" className='btnAjudar' size='small'>
                                                Ajudar
                                            </Button>
                                        </Box>
                                    </Link> */}

                                    <Link to={`/deletarProdutos/${produto.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className='btnDeletar'>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }

        </>
    );
}