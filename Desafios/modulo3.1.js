const delay = () => new Promise(resolve => console.log(setTimeout(resolve, 1000)));

async function executaPromise() {
    console.log(await delay());
    console.log(await delay());
    console.log(await delay());
}

executaPromise();