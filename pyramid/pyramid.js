const pyramid = number => {
    let levels = "";
    const midpoint = number - 1;

    for (let row = 0; row < number; row++) {
        let level = "";
        for (let column = 0; column < 2 * number - 1; column++) {
            level += midpoint - row <= column && column <= midpoint + row ? "#" : " ";
        }
        levels += level + "\n";
    }

    return levels;
};
