function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const list = [1, 2, 3, 1, 4, 5, 3];
const uniqueList = removeDuplicates(list);

console.log(uniqueList); 
