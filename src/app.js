//stateless functional component will be added tonight :)
    //They are fast and do not carry the ReacT overhead
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);        

        this.state = {
            options: []
        };
    }

    /* a method that is passed to a child component 'Options'*/
    handleDeleteOptions(){
        this.setState(() => ({ options: []}));
        //refactored aboved :)
        // this.setState(() =>{
        //     return {
        //         options: []
        //     };
        // });
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            //Function is a predicate, to test each element of the array.
            //Return true to keep the element, false otherwise.
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    //will handle the value sent in from the component, up to the parent state
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    //handlePick - pass down to Action and setup onClick - bind here
    //  randomly pick an option and alert it
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option)
    }
    render(){
        const subtitle = '!Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    opitons: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
        
    );
};

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return(
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            } 
        </div>
    );
};

const Option = props => {
    return (
        <div>            
                {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText)
                    }}
                >
                    remove</button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();

        let inputValue = e.target.elements.option.value.trim();

        //send inputValue up to the parent via this method
        const error = this.props.handleAddOption(inputValue);

        this.setState(() => ({error: error}));
        if(inputValue){
            
        }
    }
    
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));