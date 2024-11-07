/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

function getBMI(weight, height) {
    let bmi = weight / (height) ^ 2

    // if (bmi < 18.5) {
    //     console.log("You are underweight");
    //     console.log(bmi);
    // } else if (bmi >= 18.5 && bmi <= 24.9) {
    //     console.log("You are normal");
    //     console.log(bmi);
    // } else if (bmi >= 25 && bmi <= 29) {
    //     console.log("You are overweight");
    //     console.log(bmi);
    // } else {
    //     console.log("You are obese");
    //     console.log(bmi);
    // }
    const healthCategory = (bmi < 18.5) ? "Underweight" :
        (bmi >= 18.5 && bmi <= 24.9) ? "Normal" :
            (bmi >= 25 && bmi <= 29.9) ? "Overweight" :
                "Obese";

    return healthCategory;
}

console.log(getBMI(60, 3));