var percentage = 35;
// prompt("Enter your Percentage: ");
//let percentage = (totalgrades / 400) * 100;
if (percentage <= 100 && percentage >= 80) {
    console.log("A Grade");
} else if (percentage <= 79 && percentage >= 60) {
    console.log("B Grade");
} else if (percentage <= 59 && percentage >= 40) {
    console.log("C Grade");
} else {
    console.log("Fail");
}