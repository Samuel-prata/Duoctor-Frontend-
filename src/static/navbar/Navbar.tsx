import React, { useEffect, useState } from "react";
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
import { UserState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import { addToken } from "../../store/tokens/Actions";
import User from "../../models/User";
import { buscaId } from "../../services/Services";


function Navbar() {

    let navigate = useNavigate()
    const dispatch = useDispatch();

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    const [user, setUser] = useState<User>({

        id: +id,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        tipo: '',
    })

    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() =>{
        if(id !== undefined) {
            findById(id)
        }
    },[id])

    useEffect(() => {
        setUser({
            ...user,
            tipo: "admim"
        })
    }, [user])

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

    var navBarComponent 
    if(user.tipo === 'admin') {
        <div className="root">
                <AppBar position="static" className="appBar">
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" aria-label="menu" >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" className="title">
                            <Link to='/home' className="homeLink">Home</Link>
                        </Typography>

                        <Link to='/sobre'>
                            <Button className="options">Sobre</Button>
                        </Link>


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

    }
    return (
        <>
            
        </>
    );
}

export default Navbar;