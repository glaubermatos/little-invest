import '../styles/global.scss'

import { Header } from '../components/Header/Header';
import { HeroBanner } from '../components/HeroBanner/HeroBanner';
import { Investimentos } from '../components/Investimentos/Investimentos';
import { Informacoes } from '../components/Info/Informacoes';
import { Depoimento } from '../components/Depoimento/Depoimento';
import { IniciarCadastro } from '../components/IniciarCadastro/IniciarCadastro';
import { Footer } from '../components/Footer/Footer';
import { Inscricao } from './Inscricao';

export function Home() {
    return(
        // <Inscricao />
        <>
            
            <main>
                <div className="home">
                    <Header />
                    <HeroBanner />
                    <Investimentos />                
                </div>
                <Informacoes />
                <Depoimento />
                <IniciarCadastro />
            </main>
            <Footer />
        </>
    );
}