import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return (
        <nav className="navbar">
            <h3 className="logotipo">SalomonShop</h3>
            <div className="menu">
                <button className="boton-menu">Celulares</button>
                <button className="boton-menu">Cargadores</button>
                <button className="boton-menu">Fundas</button>
                <button className="boton-menu">Accesorios</button>
            </div>
            <CartWidget/>
        </nav>
    )
} 

export default NavBar