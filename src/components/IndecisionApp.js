import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    testArrayState: [1,2,3],
    testSingleValue: 1
  };

  // handleTestArrayState = () => {
  //   this.setState((prevState) => ({
  //     testArrayState: prevState.testArrayState.concat(2)
  //   }));
  // }

  handleSingleValue(){
    console.log('testing single value');
  }

  handleTestSingleValue(){
    this.setState((prevState) => ({
      testSingleValue: prevState.testSingleValue + 1
    }));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    // alert(option);
    //note! a string is returned as the option
    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleAddOption = (option) => {
    
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />

        <div className="container">
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />

        <div className="widget">
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
          testSingleValue={this.state.testSingleValue}
        />
        </div>
        
        {//note: handleClearSelectedOption is now a prop for this cp
         //and can use it
        }
        </div>
        
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}   
          // testArrayState={this.state.testSingleValue}
          testSingleValue={this.state.testSingleValue}      
          // testArrayState={this.state.testArrayState} 
        />
      </div>
    );
  }
}
