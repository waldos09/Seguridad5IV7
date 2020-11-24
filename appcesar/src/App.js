
import logo from './logo.svg';
import './App.css';
function Cifrado() {
  return(
    <div id="cifra">Componente para el cifrado
        <h3>MENSAJE A CIFRAR: </h3>
        <input type="text" id="mensaje"></input>
        <h3>DESPLAZAMIENTO:</h3>
        <input type="number" id="desplazamiento" size="4"></input>
        <br/>
        <button type="button" id="cifrar" >CIFRAR</button>
        <br/>
        <button type="button" id="descifrar">DESCIFRAR</button>
        <br/>
        <button type="button" id="borrar" >BORRAR</button>
        <br/>
        <div id="cifra">
        <h3>MENSAJE CIFRADO/DESCIFRADO</h3>
        <input type="text" id="mensaje2"></input>
        <br/>
        <br/>
        <br/>

        </div>
        
        
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>Cifrado cesar con react</h1>
        <div><Cifrado/></div>
      </header>
      

    </div>
  );
}
window.addEventListener("load", inicio, true);

function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function() {
        this.value = this.value.toUpperCase();

    }, true);
    document.getElementById("cifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);


    }, true);
    document.getElementById("cifrar").addEventListener("click", function() {
        let texto = document.getElementById("descifrar").addEventListener("click", function() {
            let texto = document.getElementById("mensaje").value;
            let desplazamiento = document.getElementById("desplazamiento").value;
            document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);

        })

    }, true);
    document.getElementById("borrar").addEventListener("click", function () {
      document.getElementById("mensaje").value = " ";
      document.getElementById("desplazamiento").value = " ";
      document.getElementById("mensaje2").value = " ";
      
    })

}

function cifrar(texto, desplazamiento) {

    let resultado = "";
    let letras = "ABCEFGHIJKLMNÑOPQRSTUVWXYZ ";
    desplazamiento = (desplazamiento % 27 + 27) % 27;
    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            if (letras.indexOf(texto[i] != -1)) {
                let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 27);
                resultado += letras[posicion];
            } else {
                resultado += texto[i];
            }
        }
    }
    return resultado;
}

function cifrar2(texto, desplazamiento) {

    if (!texto) {
        return "";
    }
    const letras = "ABCEFGHIJKLMNÑOPQRSTUVWXYZ ";
    desplazamiento = (desplazamiento % 27 + 27) % 27;
    //ñ en expresion regular \u00f1\u00d1
    return texto.replace(/[A-Z-u00d1-\s]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 27]);

}

function descifrar(texto, desplazamiento) {
    if (!texto) {
        return "";
    }
    const letras = "ABCEFGHIJKLMNÑOPQRSTUVWXYZ ";
    desplazamiento = (desplazamiento % 27 - 27) % 27;
    return texto.replace(/[A-Z-u00d1-\s]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 27]);
}



export default App;
