function speedDetector() {
    let demeritPoints = 0
    let input = parseInt(prompt("enter the speed of the car"))
    if (input < 70) {
        // print to the console
        console.log("OK");
    } else {
        demeritPoints += (input - 70) / 5
        if (demeritPoints > 12) {
            console.log("license suspended");

        } else {
            console.log(demeritPoints);
        }
    }
}
speedDetector()