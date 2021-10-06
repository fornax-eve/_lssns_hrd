const func = function (arg) {
    if (typeof arg != 'string') {
        console.log('В качестве аргумента передана не строка.');
        return;
    }
    let argN = arg.trim();
    if (argN.length > 30) {
        argN = argN.substr(0,30) + '...';
    }
    return argN;
}
