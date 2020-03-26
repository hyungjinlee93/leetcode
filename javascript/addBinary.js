/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a.length <= 31 && b.length <= 31) {
        return ((parseInt(a, 2) + parseInt(b, 2)) >>> 0).toString(2);
    } else {
        let c = (BigInt(a) + BigInt(b));
        for (let i = 10n; i <= c * 10n; i *= 10n) {
            if (c % i >= 2n * i / 10n) {
                c -= 2n * i / 10n;
                c += i;
            }
        }
        return c.toString();
    }
};
