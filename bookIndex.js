// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN A NEW ARRAY WITH INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

function bookIndex(arr) {
    // INITIALIZE AN EMPTY ARRAY
    var returnArr = []
    // ITERATE THROUGH THE ARR
    for(var i = 0; i < arr.length; i++){
        // LOOK FOR CONSECUTIVE NUMBERS
        // IF WE FIND A CONSECUTIVE NUMS, TAKE BEGINNING AND END NUMBERS AND CONCAT THEM
        if( (arr[i+1] - arr[i]) == 1 ){
            var temp = ""
            temp += arr[i].toString()
            while( (arr[i+1] - arr[i]) == 1 ){
                i++
            }
            temp += "-"
            temp += arr[i]
            returnArr.push(temp)
        }
        else{
            returnArr.push( arr[i].toString() )
        }
    }
    return returnArr
}