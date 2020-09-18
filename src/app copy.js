class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }
    handelDeleteOptions(){
        this.setState(() =>{
            return {
                options: []
            }
        });
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }
    //handlePick - pass down to Action and setup onClick - bind here
        //randomly pick an opiton and alert it
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handelDeleteOptions={this.handelDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
class Header extends React.Component{
    render(){
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
            
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );            
    }
}

class Options extends React.Component{
    /*using .bind(this) to capture the same 'this' as above'*/
    render(){
        return (
            <div>
            <button onClick={this.props.handelDeleteOptions}>Remove All</button>
            {  
                this.props.options.map((option) => <Option key={option} optionText={option} />)
            }
            </div>
        );
    }
}

//render new p tag for each option (set text, set key)
class Option extends React.Component{
    render(){
        return (
            <div>
               {this.props.optionText}
            </div>
        );
    }
}

    //setup the form with the text input and submit button
    //wire up onSubmit
    //handleAddOption -> fetch the value typed -> if value, then alert
        //
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        // if(!option){
        //     return 'Enter valid value to add item';
        // }else if(this.state.options.indexOf(option) > -1){
        //     return 'This option already exists'
        // }
        const error = this.props.handleAddOption(option);

        this.setState(() =>{
            return {
                error: error    //or error, 
            };
        });
        if(option){
            
        }
    }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

//Render to the screen
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));