import React,  {Component} from "react"
import logoFuji from '../../include/img/fujioka-logo.png';


class NavBar extends Component{
    render(){
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" 
                    href="#logo" 
                    rel="noopener noreferrer" >

                    <img src={logoFuji}  alt="Rodrigo Fujioka" width="100" height="100"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                       // Veja o problema que será relatado no console, para corrigir adicione na tag da sequência rel="noopener noreferrer"  
                        <a className="nav-link" 
                        href="https://github.com/professorfujioka/lab-react" 
                        target="_blank" 
                       >Instruções  
                        <span class="sr-only">(current)
                        </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" 
                        href="https://www.wscom.com.br/docente-de-ti-do-unipe-ministra-palestra-na-expotec-2017" 
                        target="_blank" rel="noopener noreferrer" >Docker
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" 
                        href="#" 
                        rel="noopener noreferrer" 
                        id="navbarDropdown" 
                        ole="button" 
                        ata-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                        Produto
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#cadastro">Cadastrar</a>
                        <a className="dropdown-item" href="#alteracao">Alterar</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#listar">Listar</a>
                        </div>
                    </li>
            
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busca</button>
                    </form>
                </div>
            </nav>

        )
    }
}

export default NavBar;