import { Link } from "react-router-dom";

const ShoppingPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold mb-24">Shopping Page</h1>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default ShoppingPage;
