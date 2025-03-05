const month = "nov";
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;
    case "may":
        console.log("May");
        break;
    case "june":
        console.log("June");
        break;
    case "july":
        console.log("July");
        break;
    case "aug":
        console.log("August");
        break;
    case "sept":
        console.log("September");
        break;
    case "oct":
        console.log("October");
        break;
    case "nov":
        console.log("November");
        break;
    case "dec":
        console.log("December");
        break;
    default:
        console.log("Default case match");
        break;
}
// Kind of a language flaw that even if a case matches, all the remaining cases are also executed un-necessarily.
// In order to fix this, break keyword is used which stops execution once a case matches.
// default case is executed if no cases match.