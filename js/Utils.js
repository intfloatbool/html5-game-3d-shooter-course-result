let sleep = ms => new Promise(r => setTimeout(r, ms));
export const WaitUntil = async function waitFor(f){
    while(!f()) await sleep(1000);
    return f();
};