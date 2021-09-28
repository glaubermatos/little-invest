import notreDameImage from '../../assets/notre-dame.svg'
import { Button } from '../Button/Button';

export function HeroBanner() {
    return(
        <section className="hero-banner">
            <div className="container">
                <div className="hero-banner-text">
                    <h1 className="title">Planeje o seu futuro sem perder tempo no presente</h1>
                    <Button tamanho="lg" cor="primary">
                        Investir agora
                    </Button>
                </div>
                <img src={notreDameImage} alt="Notre dame imagem" />
            </div>
        </section>
    );
}