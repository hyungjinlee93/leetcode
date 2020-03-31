/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let memo = {};
    let output = [];
    let helper = (domain) => {
        let count = domain[0];
        let str = '';
        domain = domain[1].split('.');
        for (let j = domain.length - 1; j >= 0; j--) {
            if (str === '') {
                str = domain[j];
            } else {
                str = domain[j] + '.' + str;
            }
            if (memo[str] === undefined) {
                memo[str] = Number(count);
            } else {
                memo[str] += Number(count);
            }
        }
    }
    for (let i = 0; i < cpdomains.length; i++) {
        helper(cpdomains[i].split(' '));
    }
    for (let key in memo) {
        output.push(`${memo[key]} ${key}`);
    }
    return output;
};
