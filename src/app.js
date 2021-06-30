import './sub';
import './app.scss';
// import './index.html';
// import 'regenerator-runtime';
// import 'core-js';

const init = async() => {
    console.log('this is');
    await asyncFn();

};

async function asyncFn() {
    console.log("Im async function");
}

init();