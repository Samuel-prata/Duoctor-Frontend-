import React from "react";
import { AppBar, IconButton, Typography, Button } from "@material-ui/core"
import Toolbar from '@material-ui/core/Toolbar'
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import { addToken } from "../../store/tokens/Actions";


function Navbar() {
    const token = useSelector<UserState, UserState["tokens"]>(
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
        navigate('/home')
    }

    var navbarComponent;

    if (token !== '') {
        dispatch(addToken(token))
        navbarComponent = <nav className='navlist'>

            <Button className="options">Home</Button>

            <Link to='/produtos'>
                <Button className="options">Postagens</Button>
            </Link>

            <Link to='/perfil'>
                <Button className="options">Perfil</Button>
            </Link>

            <Button onClick={goLogout} className="options">Sair</Button>

            <div className="search">
                <form action="#">
                    <input type="text"
                        placeholder=" Procurar pelo id"
                        name="search" />
                </form>
            </div>

        </nav>
    } else {

        dispatch(addToken(''))
        navbarComponent =

            <div className="root">
                <AppBar position="static" className="appBar">
                    <Toolbar>

                        <Typography variant="h6" className="title">
                            <Link to='/home' className="homeLink">Home</Link>
                        </Typography>

                        <Link to='/sobre'>
                            <Button className="options">Sobre</Button>
                        </Link>


                        <Link to='/formularioProduto'>
                            <Button className="options">Peça ajuda</Button>
                        </Link>


                        <Link to='/produtos'>
                            <Button className="options">Seja um doador</Button>
                        </Link>

                        <Link to='/entrar'>
                            <Button className="options">Entrar</Button>
                        </Link>

                    </Toolbar>
                </AppBar>
            </div>
    }
    return (
        <>
            {navbarComponent}

        </>
    );
}

export default Navbar;