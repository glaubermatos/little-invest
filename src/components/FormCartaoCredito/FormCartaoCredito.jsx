import { Button } from '../Button/Button'
import { StatusInscricao } from '../StatusInscricao/StatusInscricao'

import { useHistory } from 'react-router';

import '../../styles/components/form-cartao-credito.scss'

export function FormCartaoCredito() {
    const history = useHistory()

    return(
        <>
            <StatusInscricao etapa={2} />
            <form action="#" style={{maxWidth: '23.125rem', margin: '0 auto'}}>
                <div className="formulario-cartao">
                    <div className="col-6">
                        <label className="form-label subtitle" htmlFor="name">Nome no cartão</label>
                        <input placeholder="Nome como escrito no cartao" className="form-control" type="text" name="name" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="numeroCartao" className="form-label subtitle">Número do cartão</label>
                        <input placeholder="xxxx xxxx xxxx xxxx" className="form-control" type="text" name="numeroCartao" />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label subtitle" htmlFor="vencimento">Vencimento</label>
                            <input placeholder="xx/xxxx" className="form-control" type="text" name="vencimento" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="codigoSeguranca" className="form-label subtitle">Código segurança</label>
                            <input placeholder="xxx" className="form-control" type="text" name="codigoSeguranca" />
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <Button tamanho="lg" cor="primary" onClick={() => {
                        history.push('/new-account/instrucoes')
                    }}>
                        Finalizar pagamento
                    </Button>
                </div>
            </form>
        </>
    );
}