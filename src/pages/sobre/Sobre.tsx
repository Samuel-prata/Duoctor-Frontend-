import React from "react";
import { Typography, Container } from '@material-ui/core';
import { Box, Grid } from "@mui/material"
import Avatar from '../../../src/assets/img/Duoctor3.png'

function Sobre() {
    return (
        <>
            <Grid container className="info" md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={6} className='imgDescriptionGrid'>
                        <img src={Avatar} alt="Logo2-Ducotor" />
                    </Grid>
                    <Grid className='description_text' item xs={12} md={6} style={{ width: '80%' }} >
                        <Box className='boxTextDescription'>
                        <h1 style={{ color: "#63aff7", fontStyle: "italic" }}>Democratização da saúde</h1>
                    <Typography  gutterBottom color="textPrimary"
                        style={{ color: "black" }}>Duoctor é um projeto com base no Objetivo de Desenvolvimento Sustentável 3
                        (Saúde e Bem-Estar), que tem como propósito garantir acesso à saúde de qualidade e promover o bem-estar para todos.
                        Através de uma plataforma e-commerce, iremos interligar pessoas de baixa renda que necessitam de um tratamento médico
                        com pessoas que desejam contribuir com a causa de forma financeira e com a instituição que proverá o serviço médico.!</Typography>
                        </Box>
                    </Grid>
                </Grid>
        </>
    );
}

export default Sobre;