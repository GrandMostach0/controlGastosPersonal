import { CardGastos } from "../components/common/cards/CardGastos";

function Gastos(){
    return (
        <div>
            <section className="flex items-center justify-between">
                <CardGastos />
                <CardGastos />
                <CardGastos />
                <CardGastos />
            </section>

            <main className="border">
                <section>

                </section>
            </main>

        </div>
    )
}

export default Gastos;