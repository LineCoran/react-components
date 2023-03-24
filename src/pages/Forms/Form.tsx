import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import NavBar from '../../components/NavBar/NavBar';
import { Checkbox } from '../../components/UI/Checkbox/Checkbox';
import './Form.css';

type FormState = {
  name: string;
};

export default class Form extends Component<object, FormState> {
  constructor(props: FormState) {
    super(props);
    this.state = { name: '' };
  }

  textInput = React.createRef<HTMLInputElement>();
  dateInput = React.createRef<HTMLInputElement>();
  selectInput = React.createRef<HTMLSelectElement>();

  checkboxesNames = ['Money', 'Family', 'Work', 'Lox'];
  checkboxesRefs = new Array(this.checkboxesNames.length)
    .fill(null)
    .map(() => React.createRef<HTMLInputElement>());

  getCheckboxValue = function (allCheckbox: React.RefObject<HTMLInputElement>[]) {
    const result: string[] = [];
    allCheckbox.forEach((checkbox) => {
      if (checkbox.current?.checked) result.push(checkbox.current.value);
    });
    return result.join('---');
  };

  showName = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const textInput = `Text: ${this.textInput.current?.value}\n`;
    const dateInput = `Date: ${this.dateInput.current?.value}\n`;
    const selectInput = `Selected: ${this.selectInput.current?.value}\n`;
    const checkboxesValues = `Checkbox: ${this.getCheckboxValue(this.checkboxesRefs)}\n`;
    alert(textInput + dateInput + selectInput + checkboxesValues);
  };

  render() {
    return (
      <Container>
        <NavBar pageName={'Form'} />
        <h1 className="formTitle" data-testid="testTitleId">
          Hello its FORM page
        </h1>

        <form className="form">
          <input type="text" ref={this.textInput} />

          <input type="date" ref={this.dateInput} />

          <select ref={this.selectInput} name="" id="">
            <option value="first">first</option>
            <option value="second">second</option>
            <option value="thirth">thirth</option>
          </select>

          <fieldset className="fieldset">
            {this.checkboxesNames.map((name, index) => (
              <Checkbox key={index} ref={this.checkboxesRefs[index]} name={name} />
            ))}
          </fieldset>

          <button onClick={(event) => this.showName(event)}>Click</button>
        </form>
      </Container>
    );
  }
}
