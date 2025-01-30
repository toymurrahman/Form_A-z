
import MySelf from "../MySelf/MySelf";



const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                
            </section>
        </div>
    );
};

export default Dad;