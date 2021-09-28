import { InvestimentosItem } from "./InvestimentosItem/InvestimentosItem";


export function Investimentos() {
    return(
        <section className="investimentos">
            <div className="container">
                <div className="investimentos-list">
                    <InvestimentosItem />
                    <InvestimentosItem />
                    <InvestimentosItem />
                    <InvestimentosItem />
                </div>
            </div>
        </section>
    );
}