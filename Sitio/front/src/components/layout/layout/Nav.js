import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><link to="/">Inicio</link></li>
                    <li><link to="/RecetasDulces">RecetasDulces</link></li>   
                    <li><link to="/RecetasSaladas">RecetasSaladas</link></li>
                    <li><link to="/Foro">Foro</link></li>
                </ul> 

             </div>
           
        </nav>

    )
}
export default Nav;