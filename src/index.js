// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    let result = matrix.map((value, index) => {
        if (index % 2 != 0) {
            console.log(value);
            return value.reverse();
        }
        return value;
    });
    return result.flat();
};
