import React from "react";
import { Grid } from "@mui/material";
import { Box, Typography } from '@material-ui/core';


function Sobre() {
    return (
        <>
            <Grid container xs={12} alignItems={'center'} >
                <Box>
                    <img src="src\img\Public health-pana.png" alt="" width={'50%'} height={"500px"} />
                    <h1 style={{ color: "#63aff7", fontStyle: "italic" }}>Democratização da saúde</h1>
                    <Typography variant="h4" gutterBottom color="textPrimary"
                        component="h3"
                        style={{ color: "black" }}>Duoctor é um projeto com base no Objetivo de Desenvolvimento Sustentável 3 (Saúde e Bem-Estar), que tem como propósito garantir acesso à saúde de qualidade e promover o bem-estar para todos. Através de uma plataforma e-commerce, iremos interligar pessoas de baixa renda que necessitam de um tratamento médico com pessoas que desejam contribuir com a causa de forma financeira e com a instituição que proverá o serviço médico.!</Typography>
                </Box>
            </Grid>
        </>
    );
}

export default Sobre;