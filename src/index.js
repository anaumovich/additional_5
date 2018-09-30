module.exports = function check(str, bracketsConfig) {
    let close = [],
        index = 0,
        a = 0;
    let arr = str.split('');
    for (let i = 0; i < bracketsConfig.length; i++) {
        close.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }
    while (true) {
        close.forEach((n) => {
            index = str.indexOf(n);
            if (index !== -1) {
                arr.splice(index, 2);
                str = arr.join('');
            }
        });
        if (a === 50) break;
        a++;
    }
    return (arr.length === 0) ? true : false;
};