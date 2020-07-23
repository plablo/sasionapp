import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [texto, setTexto] = useState("La appzación");
  const [intro, setIntro] = useState(true);

  // Animar cambio de título.
  useEffect(() => {
    setTimeout(() => {
      setTexto('La appsación');
      setTimeout(() => {
        setTexto('La appsasión');
        setIntro(false);
      }, 250)
    }, 2000)
  }, [])


  useEffect(() => {
    if (texto.endsWith(' ')) {
      textasionar(texto)
    }
  }, [texto])

  const esVerbo = (palabra) => {
    let regexVerbo = RegExp(/[aeiou]r$/i);
    return regexVerbo.test(palabra)
  }

  const textasionarVerbo = (palabra) => {
    return 'hacer la ' + palabra.substr(0, palabra.length - 1) + 'sión'
  }

  const textasionarPalabra = (palabra) => {
    return palabra += 'sasión'
  }

  const textasionar = (texto) => {
    let regexPalabra = RegExp(/[aeiou]$/i);
    let regexSasion = RegExp(/[^sasió]$/i)
    let regexTextoCZ = RegExp(/[z]([aáeéiíoóuú])|c([eéií])/gi);
    if (!intro && texto) {
      let palabras = texto.split(' ');
      let nuevoTexto = palabras.map((palabra, i) => {
        //let nuevaPalabra = palabra;
        if (palabra.length > 3 && palabra !== 'hacer') {
          if (esVerbo(palabra)) {
            return textasionarVerbo(palabra);
          } else {
            return palabra.replace(regexTextoCZ, 's$1$2');
          }
          /* else if (regexPalabra.test(palabra) && regexSasion.test(palabra)) {
            return textasionarPalabra(palabra)
          } */
        }
        return palabra;
      }).join(' ');

      setTexto(nuevoTexto)
    }
  }

  const inputHandler = (event) => {
    setTexto(event.target.value);
  }

  const focusHandler = (event) => {
    setIntro(false);
    setTexto('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form>
          {/*           <Form.Row className="mb-4 text-center">
            <h1>La appsasión</h1>
          </Form.Row> */}
          <Form.Row className="mb-4 text-center">
            <Form.Control
              as="textarea"
              rows="6"
              onChange={inputHandler}
              value={texto}
              onFocus={focusHandler}
              className="align-self-center"
            />
          </Form.Row>
        </Form>
      </header>
      <footer>
        beta
      </footer>
    </div>
  );
}

export default App;
