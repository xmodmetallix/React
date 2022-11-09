function NavBar() {
    return (
        <header class="cabecera">
            <img class="logo" src="Multimedia/imagenes/logo6.png" alt="Logo bonehead"></img>
            <input class="search" type="text" placeholder="Buscar"> </input>
            <a class="login" href="pages/login.html">Log in/Sign in</a>
            <a href="pages/carrito.html">
                <img class="car" src="Multimedia/imagenes/car.png"> </img>
            </a>
            <nav class="menu">
                <ul class="menu__lista">
                    <li>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle bg-transparent text-dark border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Instrumentos
                            </button>
                            <ul class="dropdown-menu bck__color" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item bg-transparent" href="/pages/instrumentos.html#Guit" >Guitarras</a></li>
                                <li><a class="dropdown-item bg-transparent" href="/pages/instrumentos.html#Bat">Baterias</a></li>
                                <li><a class="dropdown-item bg-transparent" href="/pages/instrumentos.html#Baj">Bajos</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="pages/masvendidos.html">Más Vendidos</a>
                    </li>
                    <li>
                        <a href="pages/tiendas.html">Tiendas</a>
                    </li>
                    <li>
                        <a href="pages/videos.html">Videos</a>
                    </li>
                    <li>
                        <a href="pages/nosotros.html">Nosotros</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;