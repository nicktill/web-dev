// vertical line of symmetry  
const computeMinXAndMaxX = (a, b, c) => {
    // x point of symmetry 
    var xPointOfSymmetry = -b / (2 * a);
    var maxY;
    if (a < 0) {
        maxY = -Math.abs(y(a, b, c, xPointOfSymmetry)) * 10;
    } else {
        maxY = Math.abs(y(a, b, c, xPointOfSymmetry)) * 10;
    }
    var deltaX = 1;
    var condition1 = true;
    var numberOfBackAndForth = 0;
    const maxNumberOfBackAndForth = 3;
    var currentX = xPointOfSymmetry;
    while (condition1) {
        currentX += deltaX;
        if (a > 0 && y(a, b, c, currentX) > maxY) {
            deltaX /= -10;
            numberOfBackAndForth++;
            if (numberOfBackAndForth > maxNumberOfBackAndForth) {
                condition1 = false;
            }
        } else if (a < 0 && y(a, b, c, currentX) < maxY) {
            deltaX /= -10;
            numberOfBackAndForth++;
            if (numberOfBackAndForth > maxNumberOfBackAndForth) {
                condition1 = false;
            }
        }
    }

    // computing minX and maxX based on the point of symmetry and the currentX value
    // with some margins 
    const minX = xPointOfSymmetry - (currentX - xPointOfSymmetry);
    const maxX = currentX;

    return [minX, maxX];
} 