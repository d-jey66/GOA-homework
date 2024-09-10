function removeDuplicates(array) {
    return [...new Set(array)];
}

const list = [1, 2, 3, 4, 3, 2, 5, 6, 1];
console.log(removeDuplicates(list));
