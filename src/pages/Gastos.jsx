import { CardGastos } from "../components/common/cards/CardGastos";

function Gastos(){
    return (
        <div>
            <div className="flex items-center justify-between">
                <CardGastos />
                <CardGastos />
                <CardGastos />
                <CardGastos />
            </div>
        </div>
    )
}

export default Gastos;