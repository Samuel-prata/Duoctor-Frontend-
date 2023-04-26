import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {Box} from "@mui/material"
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.css"

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="redesSociais">
                        <Box marginTop={20} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "black" }}>Confira nossa rede social: </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            
                            <a href="https://www.instagram.com/projetoduoctor/" target="_blank">
                                <InstagramIcon style={{ fontSize: 45, color: "black" }} />
                            </a>
                          
                        </Box>
                    </Box>
                    <Box className="footer" >
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white", fontWeight:"bold" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://www.google.com/intl/pt-BR/gmail/about/#inbox">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white", fontWeight:"bold", textDecoration:"none" }} align="center">projetoduoctor@gmail.com</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;