import Categoria from "./Categoria";
import User from "./User";

interface Produtos {
    id: number,
    nome: string,
    preco: number,
    quantidade: number,
    descricao: string,
    categoria?: Categoria | null,
    usuario?: User | null
}

export default Produtos;