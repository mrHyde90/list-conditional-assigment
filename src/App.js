import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    texto: ""
  };

  changeHandler = (event) => {
    const name = event.target.value;
    this.setState({
      texto: name
    });
  }

  checkTextLength = (bueno) => {
    let checador = "";
    console.log(bueno);
    if(bueno < 5){
      checador = "Text too short";
    } else if(bueno < 10){
      checador = "Good Text";
    } else {
      checador = "Text too long";
    }
    return(
      <div>
        <p>{checador}</p>
      </div>
    );
  }

  destructionChar = (index) => {
    const newArray = [...this.state.texto.split("")];
    newArray.splice(index, 1);
    this.setState({
      texto: newArray.join("")
    });
  }

  render() {
    const textoArray = this.state.texto.split("");
    const boteBote = (
      textoArray.map((character, index) => {
        return <CharComponent key={index} character={character} click={() => this.destructionChar(index)} />
      })
    );
///
    const tamano = this.state.texto.length;
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.changeHandler} value={this.state.texto} />
        <p>{this.state.texto}</p>
        <p>{tamano}</p>
        <Validation tamano={tamano} checar={this.checkTextLength} />
        {boteBote}
      </div>
    );
  }
}

export default App;
