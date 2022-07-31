import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold mb-24">Checkout Page</h1>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Checkout;
