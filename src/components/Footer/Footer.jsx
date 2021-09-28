import facebookImage from '../../assets/facebook.svg'
import twitterImage from '../../assets/twitter.svg'
import instagranImage from '../../assets/instagran.svg'
import youtubeImage from '../../assets/youtube.svg'


import '../../styles/footer.scss'

export function Footer() {
    return(
        <footer className="rodape">
            <div className="container">
                <div className="mapa-redes">
                    <div className="mapa-do-site">
                        <h2 className="subtitle">Mapa do site</h2>
                        <nav>
                            <ul>
                                <li className="subtitle">Home</li>
                                <li className="subtitle">Investir</li>
                                <li className="subtitle">Serviços</li>
                            </ul>
                            <ul>
                                <li className="subtitle">Conta</li>
                                <li className="subtitle">Termos</li>
                                <li className="subtitle">Contato</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="redes-sociais">
                        <h2 className="subtitle">Redes sociais</h2>
                        <ul>
                            <li className="subtitle">
                                <img src={facebookImage} alt="Facebook" />
                            </li>
                            <li className="subtitle">
                                <img src={twitterImage} alt="Twitter" />
                            </li>
                            <li className="subtitle">
                                <img src={instagranImage} alt="Instagran" />
                            </li>
                            <li className="subtitle">
                                <img src={youtubeImage} alt="Youtube" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sobre">
                    <h2 className="subtitle">Sobre</h2>
                    <p>A little invest é uma empresa de investimentos criada para facilitar a vida de investidores. Com ela você investe rapidamente o seu dinheiro.</p>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <p className="subtitle">Little Invest 1999-2019-Todos os Direitos Reservados</p>
                </div>
            </div>
        </footer>
    );
}