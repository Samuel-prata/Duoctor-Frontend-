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


function Home() {
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    return (

        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f1f3f5" }} >
                <Grid container style={{ marginTop: "8px" }}>
                    <Grid item xs={12}>
                        <Slider />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className="info" md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Sobre />
            </Grid>
            <Grid container className="info" md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ExemploCategoria />
            </Grid>

            <Grid  style={{ backgroundColor: "#f1f3f5" }}>
                <TabServicos />
                <ModalProdutos/>
            </Grid>


        </>
    );
}
export default Home;