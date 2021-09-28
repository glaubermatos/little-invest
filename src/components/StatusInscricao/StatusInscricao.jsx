import '../../styles/components/status-inscricao.scss'

export function StatusInscricao(props) {

    const etapa = `etapa-${props.etapa}`

    return(
        <div className="status-inscricao">
            <div className="status-container">
                <div className={`linha ${etapa}`}>
                    <span className="circle active"></span>
                    <span className={`circle ${props.etapa > 1 ? 'active' : ''}`}></span>
                    <span className={`circle ${props.etapa > 2 ? 'active' : ''}`}></span>

                </div>
                <div className="etapas">
                    <div className="etapa1">
                        <strong className="subtitle">1ª Etapa</strong>
                        <p className="detail">Dados pessoais</p>
                    </div>
                    <div className="etapa2">
                        <strong className="subtitle">2ª Etapa</strong>
                        <p className="detail">Pagamento</p>
                    </div>
                    <div className="etapa3">
                        <strong className="subtitle">3ª Etapa</strong>
                        <p className="detail">Instruções</p>
                    </div>
                </div>
            </div>
        </div>
    );
}