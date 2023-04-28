import Categoria from "./Categoria";

interface Produtos {
    id: number,
    nome: string,
    preco: string,
    quantidade: string,
    descricao: string
    categoria?: Categoria | null
}

export default Produtos;