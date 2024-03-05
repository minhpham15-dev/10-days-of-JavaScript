const getMaxLessThanK = (n, k) => {
    let max = 0;
    let temp = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n + 1; j++) {
            temp = i & j;
            if (temp < k && temp > max) {
                max = temp;
            }
        }
    }

    return max;
};
