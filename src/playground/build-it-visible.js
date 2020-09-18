console.log('App.js is running');

const appRoot = document.getElementById('app');

// let msg = {
//     text: 'Show Details',
//     show: false
// }

// const toggleMessage = () => {
//     changeText();
//     msg.show = !msg.show;    
//     reRenderApp();
// }

// let changeText = () => {
//     if(msg.show){
//         msg.text = 'Show Details'
//     }else{
//         msg.text = 'Hide Details'
//     }
// }

/*
  <h1>Visibility Toggle</h1>                     
            <button onClick={toggleMessage}>{msg.text}</button>
            {msg.show && <p>Here are some details you can see now.</p>}
*/
let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    reRenderApp();
}
const reRenderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <p>Here are some details you can see now.</p>
            )}
            
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

reRenderApp();


//Create visibility toggle
//test toggle
