import bgDepoimentoImage from '../../assets/bg-depoimento.jpg'

import '../../styles/depoimento.scss'

export function Depoimento() {
    return(
        <section className="depoimento">
            <div className="container">
                <figure>
                    <img src={bgDepoimentoImage} alt="Image background depoimento" />
                    <figcaption>
                        <p>Com o little invest eu pude ter certeza que o meu dinheiro estava rendendo sem ter que perder tempo do meu dia pensando onde investir.</p>
                        <strong>Gabriela Marques</strong>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}