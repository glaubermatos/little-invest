import { Link, useRouteMatch } from 'react-router-dom';

import logoImage from '../..//assets/little-invest-logo.svg'
import { Button } from '../Button/Button';

export function Header() {

    let routeMatch = useRouteMatch({
        path: '/new-account'
    })

    return(
        <header>
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logoImage} alt="Logo Little Invest" />
                </Link>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#">Investimentos</a>
                        </li>
                        <li>
                            <a href="#servicos">Serviços</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                        {!routeMatch && (
                            <li>
                                <Button tamanho="md" cor="primary">
                                    Cadastre-se
                                </Button>
                            </li>
                        )}
                        
                    </ul>
                </nav>
            </div>
        </header>
    );
}