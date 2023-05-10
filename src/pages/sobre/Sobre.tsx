import React from "react";
import { Typography, Container } from '@material-ui/core';
import { Box, Grid } from "@mui/material"
import Avatar from '../../../src/assets/img/Duoctor3.png'
import './Sobre.css'

function Sobre() {
    return (
        <>
            <Grid className="info" xs = {12}style={{ display: 'flex', alignItems:'center', justifyContent:'space-between', flexDirection:'row' }}>
                <Box className='imgDescriptionGrid'>
                    <img src='https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg?w=740&t=st=1683742017~exp=1683742617~hmac=65c74884118a267014a314f7142ef687c66ba1a3cfce1838ba495e700164c8ca' alt="Logo2-Ducotor" id="img-colaborar" />
                </Box>
                <Box className='description-text' style={{ width: '50%' }} >

                    <h1 style={{ color: "#001fb5", marginBottom: '7px' }}>Democratização da saúde</h1>
                    <Typography gutterBottom color="textPrimary"
                        style={{ color: "black" }}>Duoctor é um projeto com base no Objetivo de Desenvolvimento Sustentável 3
                        (Saúde e Bem-Estar), que tem como propósito garantir acesso à saúde de qualidade e promover o bem-estar para todos.
                        Através de uma plataforma e-commerce, iremos interligar pessoas de baixa renda que necessitam de um tratamento médico
                        com pessoas que desejam contribuir com a causa de forma financeira e com a instituição que proverá o serviço médico!</Typography>

                </Box>
            </Grid>
        </>
    );
}

export default Sobre;