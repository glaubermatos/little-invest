import { Button } from "../Button/Button";

import economicoImagem from '../../assets/economico.svg'
import rendimentoImagem from '../../assets/rendimento-facil.svg'
import resgateImagem from '../../assets/resgate-simples.svg'

import '../../styles/informacoes.scss'

export function Informacoes() {
    return(
        <section id="servicos" className="informacoes">
            <div className="container">
                <h2 className="title">Mais fácil que gastar dinheiro</h2>
                <div className="cards">
                    <div className="card">
                        <img src={economicoImagem} alt="Economico" />
                        <strong className="subtitle">Econômico</strong>
                        <p className="detail">Acesse nossa plataforma e escolha seu plano</p>
                    </div>
                    <div className="card">
                        <img src={rendimentoImagem} alt="Rendimento fácil" />
                        <strong className="subtitle">Rendimento fácil</strong>
                        <p className="detail">Espere até a data de resgate e acompanhe o rendimento</p>
                    </div>
                    <div className="card">
                        <img src={resgateImagem} alt="Resgate simples" />
                        <strong className="subtitle">Resgate simples</strong>
                        <p className="detail">Retire o rendimento e gaste parte em viagens e compras</p>
                    </div>
                </div>
                <Button tamanho="lg" cor="primary">
                    Entre em contato
                </Button>
            </div>
        </section>
    );
}