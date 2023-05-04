import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { UserState } from "../../../store/tokens/TokensReducer";
import Produtos from "../../../models/Produtos";
import { busca } from "../../../services/Services";


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
    return (
        <>

            {
                produtos.map(produto => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
                                    Id: {produto.id}
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
                                <Typography variant="body2" component="p">
                                    {produto.categoria?.tipo}
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