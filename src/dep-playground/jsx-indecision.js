console.log("app.js is running now");

const app = {
    title: 'Indecision App',
    subtitle: 'This is our subtitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApplication();
    }
}

//JSX - JavaScript XML
const appRoot = document.getElementById('app');

const removeOptions = () => {
    app.options = [];
    renderApplication();
};

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};
const renderApplication = () => {
    const template = 
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}

    <p>{app.options.length > 0 ? "Here are your options":"no options"}</p>

    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
    <button onClick={removeOptions}>Remove Options</button>

    <ol>
        {
            app.options.map((index) => {
                return <li key={index}>{index}</li>
            })   
        }
    </ol>

    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
</div>
;
ReactDOM.render(template, appRoot);
};

renderApplication();
