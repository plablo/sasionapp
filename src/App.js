import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [texto, setTexto] = useState("La appzación");
  const [intro, setIntro] = useState(true);

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
    if (!intro && texto) {
      let nuevoTexto = texto.replace(/[z]([aáeéiíoóuú])|c([eéií])/gi, 's$1$2')
      setTexto(nuevoTexto)
    }
  }, [texto])

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
