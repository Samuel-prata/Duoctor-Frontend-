import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import './ExemploCategoria.css'
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


export default function ExemploCategoria() {
    return (
        <>
            <Grid container className="info" md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={6} className='card-container'>
                    <Card variant="outlined" className='show-card' id="medicamentos">
                        <CardContent className='card-conteudo'>
                            <div id="icon-medicamentos">
                                <MedicationLiquidOutlinedIcon/>
                                </div>
                            <Typography variant="h5" component="h2">Medicamentos</Typography>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" className='show-card'>
                        <CardContent className='card-conteudo'>
                        <div id="icon-exame">
                                <LocalHospitalIcon/>
                                </div>
                            <Typography variant="h5" component="h2">Exames</Typography>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" className='show-card'>
                    <div id="icon-consultas">
                                <MedicalServicesIcon/>
                                </div>
                        <Typography variant="h5" component="h2">Consultas</Typography>
                    </Card>
                </Grid>
                <Grid className='text-container' item xs={6}  style={{ width: '30%' }} >
                    
                        <h1 style={{ color: "#63aff7", fontStyle: "italic" }}>Doar nunca ficou tão fácil!</h1>
                        {/* <Typography style={{ color: "black" }}>Faça o bem sem olhar a quem!</Typography> */}
                   
                </Grid>
            </Grid>
        </>
    );
}