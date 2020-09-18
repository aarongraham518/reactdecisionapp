
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
}

const resetBtn = () => {
    count = 0;
    renderCounterApp();
}





//Our manual re-render function before we get to components
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetBtn}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot); 
}

renderCounterApp();