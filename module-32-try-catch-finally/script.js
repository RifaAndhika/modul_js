// let number = 10;

// try {
//     console.log(num);
// } catch (error) {
//     console.error(error);
// } finally {
//     console.log('finally');
// }

function test(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('a dan b harus berupa angka');
    }
    return a + b;
}

try {
    console.log(test('a', 'b'));
} catch (error) {
    console.error(`Error: ${error.message}`);
}
