// 1. IS THERE A CORRESPONDING CLOSING PAREN FOR EACH OPENING PAREN
// 2. ARE THE PAREN BEING OPENED BEFORE BEING CLOSED
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES

function parensValid(string) {
    // EARLY EXIT
    if(string.length % 2 == 1){
        return false
    }
    var counter = 0
    for(var i = 0; i < string.length; i++){

        if(string[i] == "("){
            counter++
        }
        else if(string[i] == ")"){
            counter--
        }
        if(counter < 0){
            return false
        }
    }
    if(counter == 0){
        return true
    }
    else{
        return false
    }
}