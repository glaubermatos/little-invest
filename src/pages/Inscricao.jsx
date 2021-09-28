import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Button } from '../components/Button/Button';

import arrowRightImage from '../assets/arrow-right.svg'


import '../styles/global.scss'
import '../styles/pages/inscricao.scss'
import { FormInscricao } from '../components/FormInscricao/FormInscricao';
import { FormCartaoCredito } from '../components/FormCartaoCredito/FormCartaoCredito';
import { InscricaoFinalizada } from '../components/InscricaoFinalizada/InscricaoFinalizada';

export function Inscricao() {
    return(
        <div className="home">
            <Header />
            <section className="inscricao">
                <div className="wrapper-title">
                    <div className="container">
                        <h1 className="title">Faça sua inscrição</h1>
                    </div>
                </div>
                <div className="wrapper-formulario">
                    <div className="container">
                        <BrowserRouter>
                            <Switch>
                                <Route path="/new-account" exact component={FormInscricao} />
                                <Route path="/new-account/credit" component={FormCartaoCredito} />
                                <Route path="/new-account/instrucoes" component={InscricaoFinalizada} />
                            </Switch>
                        </BrowserRouter>
                     </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}