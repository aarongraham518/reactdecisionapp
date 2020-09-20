/* React Component State
    1)Setup default state object
    2)Component rendered with default state values
    3)Change state based on event
    4)Component re-rendered using new state values
    5)Start again at step 3!!!
*/
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    
    handleReset(){
        this.setState(() =>{
            return {
                count: 0
            };
        });

    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));
//note, we can pass in count={-10} for default prop count.


// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const resetBtn = () => {
//     count = 0;
//     renderCounterApp();
// }

// //Our manual re-render function before we get to components
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetBtn}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot); 
// }

// renderCounterApp();