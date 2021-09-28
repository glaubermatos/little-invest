import adicionarImage from '../../../assets/adicionar.svg'
import { Button } from '../../Button/Button';

export function InvestimentosItem() {
    return(
        <div className="investimento-item">
            <h2>LCI 2018/12</h2>
            <p><span>110%</span> do CDB</p>
            <span>Banco certo</span>
            <Button tamanho="sm" cor="primary">
                Adicionar
                <img src={adicionarImage} alt="Adicionar" />
            </Button>
        </div>
    );
}