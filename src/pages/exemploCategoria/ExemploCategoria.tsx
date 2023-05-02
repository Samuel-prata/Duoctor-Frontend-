import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import './ExemploCategoria.css'


export default function ExemploCategoria() {
    return (
        <>
            <Grid container className="info" md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={6} className='imgDescriptionGrid'>
                    <Card variant="outlined" className='show-card'>
                        <CardContent className='card-conteudo'>
                            <Typography variant="h5" component="h2">Medicamentos</Typography>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" className='show-card'>
                        <CardContent className='card-conteudo'>
                            <Typography variant="h5" component="h2">Cirurgias</Typography>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" className='show-card'>
                        <Typography variant="h5" component="h2">Consultas</Typography>
                    </Card>
                </Grid>
                <Grid className='description_text' item xs={12} md={6} style={{ width: '30%' }} >
                    <Box className='boxTextDescription'>
                        <h1 style={{ color: "#63aff7", fontStyle: "italic" }}>Doar nunca ficou tão fácil!</h1>
                        <Typography gutterBottom color="textPrimary"
                            style={{ color: "black" }}>Faça o bem sem olhar a quem!</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}