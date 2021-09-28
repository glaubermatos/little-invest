import { Button } from '../Button/Button'

import suporte24hImage from '../../assets/suporte-24h.svg'

import '../../styles/iniciar-cadastro.scss'

export function IniciarCadastro() {
    return(
        <section id="contato" className="iniciar-cadastro">
            <div className="container">
                <div className="criar-conta">
                    <h2 className="title">Crie sua conta agora</h2>
                    <form action="#">
                        <div className="col-12">
                            <label className="form-label" htmlFor="name">Nome</label>
                            <input className="form-control" type="text" name="name" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input className="form-control" type="text" name="email" />
                        </div>
                        <Button tamanho="lg" cor="primary">Iniciar cadastro</Button>
                    </form>
                </div>
                <div className="suporte">
                    <img src={suporte24hImage} alt="Suporte 24h" />
                    <h2 className="subtitle">Ajuda 24 horas do nosso suporte online</h2>
                </div>
            </div>
        </section>
    );
}