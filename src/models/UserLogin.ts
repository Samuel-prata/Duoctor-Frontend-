interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    tipo: String;
    token?: string| null
}

export default UserLogin;