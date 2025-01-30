import { useContext } from "react";
import Special from "../Special/Special";
import { MoneyContext } from "../Grandpa/Grandpa";



const MySelf = ({asset}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Myself</h2>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;