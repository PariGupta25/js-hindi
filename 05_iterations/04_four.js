//objects ke liye we use forin loop

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by app'
}
for (const key in myObject) {
    console.log(myObject[key]);
}