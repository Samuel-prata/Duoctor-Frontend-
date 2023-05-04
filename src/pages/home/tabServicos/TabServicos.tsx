import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import {TabContext,  TabPanel } from '@material-ui/lab';
import { Box } from "@mui/material";
import './TabServicos.css'
import ListagemProdutos from "../../../components/produtos/listagemProdutos/ListagemProdutos";
import ListagemCategoria from "../../../components/categoria/listagemCategoria/ListagemCategoria";



export default function TabServicos() {
    const [value, setValue] = useState('1')
   function handleEvent (event:React.ChangeEvent<{}>, newValue: string) {
      setValue(newValue)
    }

    return (
        <>
            
                <AppBar position="static">
                    <Tabs>
                        <Tab className="fontes" label="Todas as Postagens" ></Tab>
                        <Tab className="fontes" label="Categorias"></Tab>
                    </Tabs>
                </AppBar>
        </>

    );
}