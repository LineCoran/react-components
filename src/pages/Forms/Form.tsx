import React, { Component, useRef } from 'react';
import Container from '../../components/Container/Container';
import NavBar from '../../components/NavBar/NavBar';
import './Form.css';

type FormState = {
  name: string;
}

export default class Form extends Component<object, FormState> {
  private textInput: React.RefObject<HTMLInputElement>;
  private dateInput: React.RefObject<HTMLInputElement>;
  private selectInput: React.RefObject<HTMLSelectElement>;
  constructor(props: FormState) {
    super(props);
    this.state = { name: '' };
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectInput = React.createRef();
  }

  showName = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const textInput = `Text: ${this.textInput.current?.value}\n`;
    const dateInput = `Date: ${this.dateInput.current?.value}\n`;
    const selectInput = `Selected: ${this.selectInput.current?.value}\n`;
    alert(textInput+dateInput+selectInput);
  }

  
  render() {
    return (
      <Container>
        <NavBar pageName={'Form'} />
        <h1 className="formTitle" data-testid="testTitleId">
          Hello its FORM page
        </h1>

        <form className='form'>
          <input type="text" ref={this.textInput} />

          <input type="date" ref={this.dateInput}/>

          <select ref={this.selectInput} name="" id="" >
            <option value="first">first</option>
            <option value="second">second</option>
            <option value="thirth">thirth</option>
          </select>

          <fieldset className='fieldset' >
            <div className='checkbox'>
              <input type="checkbox" id='money' name='form' value="money" />
              <p>Money</p>
            </div>

            <div className='checkbox'>
              <input type="checkbox" id='money' name='form' value="family" />
              <p>Family</p>
            </div>

            <div className='checkbox'>
              <input type="checkbox" id='money' name='form' value="work" />
              <p>Work</p>
            </div>
          </fieldset>
          <button onClick={(event) => this.showName(event)}>Click</button>
        </form>
      </Container>
    );
  }
}
