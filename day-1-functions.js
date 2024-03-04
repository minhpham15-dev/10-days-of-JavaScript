const factorial = (n) => {
    let fac = 1;
    for (let i = n; i > 0; i--) {
        fac = fac * i;
    }

    return fac;
};
