// function declaraction
function calculateGrade() {
    let input = parseInt(prompt("enter the student's marks (0-100)"))
    if (0 <= input && input <= 100) {
        if (input > 79) {
            return "A"

        } else if (60<= input && input <= 79) {
            return "B"

        } else if (50<= input && input <= 59) {
            return "C"
        } else if (40< input && input <= 49) {
            return "D"
        } else {
            return "E"
        }
    } else {
        console.log("input should be between 0 & 100")


    }


}
calculateGrade()