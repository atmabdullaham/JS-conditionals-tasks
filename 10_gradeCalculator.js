/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// ______________________Grade_Calculator_________________________

function getGrade(score) {
    return (score >= 90) ? "A" :
        (score >= 80) ? "B" :
            (score >= 70) ? "C" :
                (score >= 60) ? "D" :
                    "F";
}

console.log(getGrade(100));
console.log(getGrade(91));
console.log(getGrade(90));
console.log(getGrade(89));
console.log(getGrade(81));
console.log(getGrade(80));
console.log(getGrade(79));
console.log(getGrade(71));
console.log(getGrade(70));
console.log(getGrade(60));
console.log(getGrade(30));
console.log(getGrade(0));