module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    repeatCheck();

    function repeatCheck() {
        bracketsConfig.forEach(el => {
            el = el.join('');
            if (str.includes(el)) {
                str = str.replace(el, '');
                repeatCheck();
            }
        });
    }

    return str.length === 0;
}
