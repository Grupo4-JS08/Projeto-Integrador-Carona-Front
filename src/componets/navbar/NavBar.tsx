import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="w-full bg-gradient-to-r from-[#2A7B9B] via-[#57c785] to-[#2A7B9B] text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* LOGO */}
                <Link to="/" className="text-2xl font-bold hover:text-gray-200">
                    DevsCarona
                </Link>

                {/* MENU */}
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/contact"
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/sobre"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                        >
                            Sign in
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contato"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                        >
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
