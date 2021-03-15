function isPalindrome(string) {
    for(var i = 0; i < Math.floor(string.length/2); i++){
        if(string[i] != string[string.length - 1 - i] ){
            return false
        }
    }
    return true
}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE
// "DAD" => TRUE

function isAnagram(string1, string2) {
    if(string1.length != string2.length){
        return false
    }
    var obj  = {}
    for(var i = 0; i < string1.length; i++){
        if(string1[i] in obj ){
            obj[string1[i]] += 1
        }
        else{
            obj[string[i]] = 1
        }
    }
    for(var i = 0; i < string2.length;i++){
        if(string2[i] in obj){
            obj[string2[i]] -= 1
            if(obj[string2[i]] < 0){
                return false
            }
        }
        else{
            return false
        }
    }
    return true
}