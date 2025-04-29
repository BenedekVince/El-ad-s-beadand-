onmessage = function(e) {
    let count = 0;
    for (let i = 0; i < 1000000000; i++) {
        count += i;
    }
    postMessage(count);
};
