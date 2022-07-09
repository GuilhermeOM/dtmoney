import { useContext } from "react";

import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionContext } from "../../TransactionsContext";

export function Summary() {
    const transactions = useContext(TransactionContext);

    return (
        <Container> 
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1800,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>R$1500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$300,00</strong>
            </div>
        </Container>
    );
}