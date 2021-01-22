// when clicked
function myFunction(){
    // arrays to play with
    const array1 = ["0","1","2","3","4","5","6","7","8","9"]const array1 = ("0","1","2","3","4","5","6","7","8","9");
    console.log(array1);;
       console.log(array1);

    const small = 'abcdefghijklmnopqrstuvwxyz';
    var array2 = Array.from(small);
    console.log(array2);

    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var array3 = Array.from(upper);
    console.log(array3);
    
    var array4 = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+","`","~"];
    console.log(array4);

    // user chooses the length of password
    var length = parseInt(prompt("type a number from 8-127"));
    if (isNaN(length)===true || length<8 || length>=128){
        alert("You did not choose a number 8-127.");
        console.log("You failed to choose a length.")
    }
    else
    let confirmNum = confirm("Click Ok if you want numbers in your password.");
    let confirmSpecial = confirm("click OK if you want special characters included.");
    let confirmSmall = confirm("click OK if you want small case English characters included.");
    let confirmUpper = confirm("click OK if you want special characters included.");


    // var passwordData={
    //     length:length, confirmNum: confirmNum, 
    //     confirmSpecial: confirmSpecial
    // }
    // // add up arrays
    // //do random optimize 
    // var result=[];

    // if (passwordData.confirmNum){
    //     result=result.concat(number);
    // }

}

