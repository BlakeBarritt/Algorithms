// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD

var string = "HAPPY NEW YEAR"
var stringArr = string.split(" ") // ["Happy", "New", "Year"]

function acronyms(string) {
    var wordArr = string.split(" ")
    var returnString = ""
    for(var i = 0;i < wordArr.length; i+=2){
        returnString += wordArr[i][0]
    }
    return returnString
}