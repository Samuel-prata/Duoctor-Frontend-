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
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered className="butPost" onChange={handleEvent} >
                        <Tab className="fontes" label="Todas as Postagens" value='1'></Tab>
                        <Tab className="fontes" label="Categorias" value='2'></Tab>
                    </Tabs>
                </AppBar>
                <TabPanel value="1">
                    <Box display='flex' flexWrap='wrap' justifyContent='center'>
                        <ListagemProdutos />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                <Box display='flex' flexWrap='wrap' justifyContent='center'>
                        <ListagemCategoria />
                    </Box>
                </TabPanel>
            </TabContext>
        </>

    );
}