import React from "react";
import { Grid, Typography, Card } from '@material-ui/core';
import { Box } from "@mui/material"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./Footer.css"
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/TokensReducer";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    return (
        <>
            {/* <section className="sobre">
                <div className="colunas-sobre">
                    <Typography></Typography>
                </div>
                <div className="colunas-sobre"></div>
                <div className="colunas-sobre"></div>
            </section> */}

            <Grid container direction="row"  alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="redesSociais">
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" style={{ color: "gray" }}>
                                Parceiros:
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Box id="img-scale"><img id="img-parceiros" src="src/assets/img/1.png" alt="" /></Box >
                            <Box id="img-scale"><img id="img-parceiros" src="src/assets/img/2.png" alt="" /></Box >
                            <Box id="img-scale"><img id="img-parceiros" src="src/assets/img/3.png" alt="" /></Box >
                        </Box>


                    </Box>
                    <Box className="footer" >
                        <Box>
                            <ul>
                                <Typography className="letra-footer" variant="h4">Contatos</Typography>
                                <Box className="tel-icon"><p id="number"> <LocalPhoneIcon /> +55 (12)9990-98432</p></Box>

                            </ul>
                        </Box>

                        <Box>
                            <ul>
                                <Typography className="letra-footer" variant="h4">Nosso Canal</Typography>
                                <Box className="insta-icon">
                                    <a href="https://www.instagram.com/oduoctor/" target="_blank" id="btn-icon">
                                        <InstagramIcon />
                                    </a>
                                    <a href="https://github.com/Samuel-prata/Duoctor-Frontend-" target="_blank" id="btn-icon">
                                        <GitHubIcon />
                                    </a>
                                </Box>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;