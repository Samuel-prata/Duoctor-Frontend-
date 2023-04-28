import React from "react";
import { AppBar, IconButton, Typography, Button } from "@material-ui/core"
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { Home } from "@material-ui/icons";
import { ClassNames } from "@emotion/react";
import TextField from '@material-ui/core/TextField';
import useLocalStorage from "react-use-localstorage";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import { addToken } from "../../store/tokens/Actions";


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate()
    const dispatch = useDispatch();

     function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        })
        navigate('/entrar')
    }
    return (
        <>
            <div className="root">
                <AppBar position="static" className="appBar">
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" aria-label="menu" >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" className="title">
                            <Link to='/home' className="homeLink">Home</Link>
                        </Typography>
                        <Button className="options">Sobre</Button>
                        <Link to='/formularioCategoria'>
                            <Button className="options">Quero pedir ajuda</Button>
                        </Link>
                        <Link to='/formularioProduto'>
                        <Button className="options">Quero ser um doador</Button>
                        </Link>
                        <Link to='/entrar'>
                            <Button onClick={goLogout} className="options">Sair</Button>
                        </Link>



                    </Toolbar>
                </AppBar>
            </div>

        </>
    );
}

export default Navbar;