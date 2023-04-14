import React from "react";

//importação do Material UI
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { Height } from "@material-ui/icons";


//importação do CSS
import './Home.css';

function Inicio() {
    return (
        <>
            <Grid container  direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }} >
                <Grid item alignItems="center" xs={6}>

                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary"
                            component="h3"
                            align="center"
                            style={{ color: "#63aff7", fontWeight: "bold" }}>Seja Bem Vindo(a)!</Typography>

                        <Typography variant="h4" gutterBottom color="textPrimary"
                            component="h3" align="center"
                            style={{ color: "white", fontWeight: "bold" }}></Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="src\img\Duoctor.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>


        </>
    );
}

export default Inicio;