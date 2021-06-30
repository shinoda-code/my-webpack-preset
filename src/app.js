import './sub';
import './app.scss'; 

const init = async() => {
    console.log('this is');
    await asyncFn();
    jQuery();
};

async function asyncFn() {
    console.log("Im async function");
}

init();