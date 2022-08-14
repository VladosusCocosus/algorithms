const max = string => {
    const t1 = performance.now()
    const pureString = string.replace(/ /g,'')
    const characters = {};

    for (let character of pureString)
        characters[character] = characters[character] + 1 || 1;

    let maxCount = 0;
    let maxCharacter = null;

    for (let character in characters) {
        if (characters[character] > maxCount) {
            maxCount = characters[character];
            maxCharacter = character;
        }
    }

    const t2 = performance.now()
    console.log(t2 - t1)

    return maxCharacter;
};

const _max = string => {
    const t1 = performance.now()
    const pureString = string.replace(/ /g,'')
    const characters = {};

    for (let character of pureString)
        characters[character] = characters[character] + 1 || 1;

    const result = Object.keys(characters).filter(key => characters[key] === Math.max(...Object.values(characters)));

    const t2 = performance.now()

    console.log(t2 - t1)
    return result
};

console.log(max('Just some test string'))

console.log(_max('Just some test string'))
