class VisibilityToggle extends React.Component {
  constructor(props){
      super(props);
      this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

      this.state = {
          visibility: false,
          text: 'Hide Details'
      }
  }  

  handleToggleVisibility(){
      console.log('inside handler');
      this.setState((prevState) => {
        return {
            visibility: !prevState.visibility,
            text: prevState.text = prevState.visibility ? 'Show Details' : 'Hide Details'
        }
      })
  }

  render(){
      return (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
            <p>Here are some details you can see now.</p>
        )}
        </div>        
      );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));