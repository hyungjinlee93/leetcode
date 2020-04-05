/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let texts = {};
    let helper = (folder, path) => {
        let index = path.search('[.]txt') + 5;
        let text = path.substring(index, path.length - 1);
        let file = path.substring(0, index - 1);
        if (texts[text] === undefined) {
            texts[text] = [`${folder}/${file}`];
        } else {
            texts[text].push(`${folder}/${file}`);
        }
    }
    for (let i = 0; i < paths.length; i++) {
        let files = paths[i].split(' ');
        let folder = files[0];
        for (let j = 1; j < files.length; j++) {
            helper(folder, files[j]);
        }
    }
    return Object.values(texts).filter(text => text.length > 1);
};
