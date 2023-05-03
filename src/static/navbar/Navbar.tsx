import React, { useEffect, useState } from "react";
import { AppBar, IconButton, Typography, Button } from "@material-ui/core"
import Toolbar from '@material-ui/core/Toolbar'
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import { addToken } from "../../store/tokens/Actions";
import User from "../../models/User";
import { buscaId } from "../../services/Services";


function Navbar() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate()
    const dispatch = useDispatch();

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const tokens = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        tipo: ''
    })

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        await buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])


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
            <Link to='/home'>
                <Button className="options">Home</Button>
            </Link>

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
    // return (
    //     <>
    //         {navbarComponent}

    // }else{
    //     if( user.tipo !== "admin"){
    //         navBarComponent = 
    //         <div className="root">
    //         <AppBar position="static" className="appBar">
    //             <Toolbar>
    //                 <IconButton edge="start" className="menuButton" aria-label="menu" >
    //                     <MenuIcon />
    //                 </IconButton>

    //                 <Typography variant="h6" className="title">
    //                     <Link to='/home' className="homeLink">Home</Link>
    //                 </Typography>

    //                 <Link to='/sobre'>
    //                     <Button className="options">Sobre</Button>
    //                 </Link>


    //                 <Link to='/formularioProduto'>
    //                     <Button className="options">Quero pedir ajuda</Button>
    //                 </Link>


    //                 <Link to='/produtos'>
    //                     <Button className="options">Quero ser um doador</Button>
    //                 </Link>

    //                 <Link to='/entrar'>
    //                     <Button onClick={goLogout} className="options">Sair</Button>
    //                 </Link>

    //             </Toolbar>
    //         </AppBar>
    //     </div>
    //     }
    // }

    return (
        <>
            {navbarComponent}
        </>
    );
}

export default Navbar;