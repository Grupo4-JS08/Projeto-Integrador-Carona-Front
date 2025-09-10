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
                            to="/contato"
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                        >
                            Contato
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/sobrenos"
                            className="bg-gray-400 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                        >
                            Sobre nós
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
