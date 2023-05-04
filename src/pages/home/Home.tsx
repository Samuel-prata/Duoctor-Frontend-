import React, { useEffect } from "react";

//importação do Material UI
import { Grid, Typography, Button } from "@material-ui/core";



//importação do CSS
import './Home.css';
import Slider from '../../components/Slider/Slider';
import Sobre from "../sobre/Sobre";
import ExemploCategoria from "../exemploCategoria/ExemploCategoria";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/TokensReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TabServicos from './tabServicos/TabServicos';
import ModalProdutos from "../../components/produtos/modalProdutos/ModalProdutos";
import ListagemCategoria from "../../components/categoria/listagemCategoria/ListagemCategoria";
import ListagemProdutos from "../../components/produtos/listagemProdutos/ListagemProdutos";
import { AppBar, Tab, Tabs } from "@mui/material";
import ListaProdutoHome from "../../components/produtos/listagemProdutos/ListagemProdutosHome";


function Home() {
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
        var lista;

        if (token !== "") {
            lista = <ListagemProdutos/>
        }else{
            lista = <ListaProdutoHome/>
        }

    return (

        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f1f3f5" }} >
                <Grid container style={{ marginTop: "8px" }}>
                    <Grid item xs={12}>
                        <Slider />
                    </Grid>
                </Grid>
            </Grid>

            <Grid style={{ backgroundColor: "#f1f3f5", paddingBottom: '40px' }}>
                <AppBar className="barra-info" position="static">
                    <Tabs>
                        <Tab className="fontes" label="Todas as Postagens" ></Tab>
                    </Tabs>
                </AppBar>
                {/* <ListagemProdutos /> */}
                {lista}
                <ModalProdutos />
            </Grid>

            <Grid container className="info" md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AppBar className="barra-info" position="static">
                    <Tabs>
                        <Tab className="fontes" label="Categorias"></Tab>
                    </Tabs>
                </AppBar>
                <ListagemCategoria />
            </Grid>

            <Grid container className="info" md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Sobre />
            </Grid>

        </>
    );
}
export default Home;