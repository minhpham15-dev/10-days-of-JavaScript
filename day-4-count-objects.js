function getCount(objects) {
    //    let count = 0;

    //    for (let o of objects) {
    //      count += (o.x === o.y);
    //    }

    //    return count;

    //one-line code
    return objects.filter((o) => o.x == o.y).length;
}
