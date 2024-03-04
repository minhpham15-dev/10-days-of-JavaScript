function isPositive(a) {
    switch (true) {
        case a === 0:
            throw new Error('Zero Error');
        case a < 0:
            throw new Error('Negative Error');
        default:
            return 'YES';
    }
}
