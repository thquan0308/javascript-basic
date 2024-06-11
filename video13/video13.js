console.log(`Hello world from HTML`)

let arrTop4 = [`Live`, `Chelsea`, `Mu`, 'Man city']

let i = 0;
while (i < arrTop4.length) {
    // if (arrTop4[i].length === 2) {
    //     console.log(`Top club: `, i + 1, arrTop4[i]);
    // } else if (arrTop4[i].length === 4) {
    //     console.log(`Top club: `, i + 1, arrTop4[i]);
    // } else {
    // }
    i++;
    if (arrTop4[i] === `Chelsea`) {
        console.log(`Found it: `, arrTop4[i])
        continue;
    }
    console.log(`>>> Check i: `, i);

}