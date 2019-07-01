import React, {Component} from 'react';

class UsuarioApp extends Component{
 render(){
    return (
        <form>            
           <div class="form-group row">
                <label for="matricula" class="col-sm-3 col-form-label">Matrícula:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="matricula"  placeholder="Sua Matrícula" />                
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-3 col-form-label">E-mail</label>
                <div class="col-sm-10">
                   <input type="email" class="form-control" id="email"  placeholder="Seu email" />
                </div>
            </div>

            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="contrato" />
                <label class="form-check-label" for="contrato">Eu prometo que vou estudar</label>
            </div>

            <button  class="btn btn-primary" 
                     onClick={() => { alert("Primeiro componente formulário");  }}>Enviar</button>
      </form>
    );
 }

}

export default UsuarioApp;
