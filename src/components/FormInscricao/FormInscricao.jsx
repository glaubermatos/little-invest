import { Button } from '../Button/Button'
import { StatusInscricao } from '../StatusInscricao/StatusInscricao'

import { useHistory } from 'react-router';

import arrowRightImage from '../../assets/arrow-right.svg'

export function FormInscricao() {
    const history = useHistory()

    return(
        <>
        <StatusInscricao/>
        <form action="#">
            <div className="formulario-inscricao">
                <div className="col-6">
                    <label className="form-label subtitle" htmlFor="name">Nome</label>
                    <input placeholder="Nome completo" className="form-control" type="text" name="name" />
                </div>
                <div className="col-6">
                    <label htmlFor="cpf" className="form-label subtitle">CPF</label>
                    <input placeholder="xxx.xxx.xxx-xx" className="form-control" type="text" name="cpf" />
                </div>
                <div className="col-6">
                    <label className="form-label subtitle" htmlFor="email">Email</label>
                    <input placeholder="email@provedor.com " className="form-control" type="text" name="email" />
                </div>
                <div className="col-6">
                    <label htmlFor="endereco" className="form-label subtitle">Endereço</label>
                    <input placeholder="Nome da rua" className="form-control" type="text" name="endereco" />
                </div>
                <div className="col-6">
                    <label className="form-label subtitle" htmlFor="endereco">Estado</label>
                    <input placeholder="Nome estado" className="form-control" type="text" name="endereco" />
                </div>
                <div className="col-6">
                    <label htmlFor="cep" className="form-label subtitle">CEP</label>
                    <input placeholder="xx.xxx-xxx" className="form-control" type="text" name="cep" />
                </div>
            </div>
            <div className="actions">
                <Button tamanho="lg" cor="primary" onClick={() => {
                    history.push('/new-account/credit')
                }}>
                    Iniciar cadastro
                    <img src={arrowRightImage} alt="Arrow right" />
                </Button>
            </div>
        </form>
        </>
    );
}