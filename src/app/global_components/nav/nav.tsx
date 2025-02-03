import logo from "../../assets/logo-cidadania-unida.png"
export default function Nav() {
    return (
        <header className="flex justify-center items-center w-[100%]">
            <nav className="
        sticky
        top-1
        h-[70px] w-[900px] shadow-[0px_10px_6px_0px_rgba(0,_0,_0,_0.1)] poppins font-semibold flex items-center justify-around">
                <img src={logo.src} alt="" className="w-[50px] ml-10" />
                <ul className="flex gap-16">
                    <li>
                        Inicio
                    </li>
                    <li>
                        Sobre
                    </li>
                    <li>
                        Comunidade
                    </li>
                </ul>
                <a href="#"
                    title="Botão desativado para desenvolvimento"
                    className="p-2 w-[100px] bg-gray-400 text-gray-500  rounded-full text-center font-extrabold block poppins">
                    Entrar</a>
            </nav>
        </header>
    )
}