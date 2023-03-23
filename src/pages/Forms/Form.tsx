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

  chechbox1 = React.createRef<HTMLInputElement>();
  chechbox2 = React.createRef<HTMLInputElement>();
  chechbox3 = React.createRef<HTMLInputElement>();

  checkboxesNames = ['Money', 'Family', 'Work'];
  checkboxesRefs = [this.chechbox1, this.chechbox2, this.chechbox3];

  getCheckboxValue = function (allCheckbox: React.RefObject<HTMLInputElement>[]) {
    const result: string[] = [];
    allCheckbox.forEach((checkbox) => {
      console.log(checkbox);
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
            {/* <div className="checkbox">
              <input
                type="checkbox"
                ref={this.checkboxes[0]}
                id="money1"
                name="form"
                value="money1"
              />
              <p>Money1</p>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                ref={this.checkboxes[1]}
                id="money2"
                name="form"
                value="money2"
              />
              <p>Money2</p>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                ref={this.checkboxes[2]}
                id="money3"
                name="form"
                value="money3"
              />
              <p>Money3</p>
            </div> */}
          </fieldset>

          <button onClick={(event) => this.showName(event)}>Click</button>
        </form>
      </Container>
    );
  }
}
