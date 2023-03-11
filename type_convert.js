const typeConvert = [false, true, 0, 1, '0', '000', '1', NaN, Infinity, -Infinity, '', '20', 'Twenty', null, undefined];
for (let item of typeConvert) {
    console.log("---------------------------------------------");
    console.log(item);
    console.log("Number(x): " + Number(item));
    console.log("String(x): " + String(item));
    console.log("Boolean(x): " + Boolean(item));
    console.log("---------------------------------------------");
}