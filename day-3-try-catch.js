function test(s) {
    try {
        let arrFormat = s.split('');
        let reverseArr = arrFormat.reverse().join('');
        console.log(reverseArr);
    } catch (error) {
        console.log(error.message);
        console.log(s);
    }
}

test(Number(1234));
