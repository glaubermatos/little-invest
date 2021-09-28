import { StatusInscricao } from '../StatusInscricao/StatusInscricao'

import resgateSimplesImage from '../../assets/resgate-simples.svg'

import '../../styles/components/inscricao-finalizada.scss'

export function InscricaoFinalizada() {
    return(
    <>
        <StatusInscricao etapa={3}/>
        <div className="instrucoes">
            <h1 className="title">Obrigado Pela Compra.
Em Breve Entraremos em Contato</h1>
            <img src={resgateSimplesImage} alt="" />
        </div>
    </>    
    );
}