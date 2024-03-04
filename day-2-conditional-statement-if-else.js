function getGrade(score) {
    let grade;
    // if-else
    if (score <= 30 && score > 25) {
        grade = 'A';
    } else if (score <= 25 && score > 20) {
        grade = 'B';
    } else if (score <= 20 && score > 15) {
        grade = 'C';
    } else if (score <= 15 && score > 10) {
        grade = 'D';
    } else if (score <= 10 && score > 5) {
        grade = 'E';
    } else {
        grade = 'F';
    }
    return grade;
}

//other solutions

// const getGrade = (score) => {
//     const grade = String.fromCharCode(70 - parseInt((score-1)/5));
//     return grade
// }

// function getGrade(score) {
//     return 'FEDCBA'[~~((score-1)/5)]
// }
