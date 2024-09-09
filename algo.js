const romantoint = (roman) =>{
    const romanValues ={
        I :1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M  : 1000
    };
    var  output = 0

    for (let i = 0; i < roman.length; i++){
            const current = romanValues[roman[i]]
            const next = romanValues[roman[i + 1]]
            // Accounting for number in front 

            if (next && current < next){
                output -= current
                // if we need to subtract 1st number from the 2nd number
            }
            else {
                output += current;
            }
    }
    return output

}
console.log(romantoint("XC"))