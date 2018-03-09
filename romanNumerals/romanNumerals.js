var convert = function(powerOfTen) {

    if (powerOfTen === 'ones'){
        this.symbolForOne = "I";
        this.symbolForFive = "V";
        this.symbolForTen = "X";
    }

    if (powerOfTen === 'tens'){
        this.symbolForOne = "X";
        this.symbolForFive = "L";
        this.symbolForTen = "C";
    }

    if (powerOfTen === 'hundreds'){
        this.symbolForOne = "C";
        this.symbolForFive = "D";
        this.symbolForTen = "M";
    }

    if (powerOfTen === 'thousands'){
        this.symbolForOne = "M";
        this.symbolForFive = "V";
        this.symbolForTen = "X";
    }
};

function build(digit,powerOfTen) {
    
    switch (digit) {

        case 0:
            return '';
            break;
        case 1:
            return powerOfTen.symbolForOne;
            break;
        case 2:
            return powerOfTen.symbolForOne+powerOfTen.symbolForOne;
            break;
        case 3:
            return powerOfTen.symbolForOne+powerOfTen.symbolForOne+powerOfTen.symbolForOne;
            break;
        case 4:
            return powerOfTen.symbolForOne+powerOfTen.symbolForFive;
            break;
        case 5:
            return powerOfTen.symbolForFive;
            break;
        case 6:
            return powerOfTen.symbolForFive+powerOfTen.symbolForOne;
            break;
        case 7:
            return powerOfTen.symbolForFive+powerOfTen.symbolForOne+powerOfTen.symbolForOne;
            break;
        case 8:
            return powerOfTen.symbolForFive+powerOfTen.symbolForOne+powerOfTen.symbolForOne+powerOfTen.symbolForOne;
            break;
        case 9:
            return powerOfTen.symbolForOne+powerOfTen.symbolForTen;
            break;
    }
}

function convertToRoman(num) {
    var thousands = Math.floor(num/1000 % 10);
    var hundreds = Math.floor(num/100)%10;
    var tens = Math.floor(num/10)%10;
    var ones = Math.floor(num%10);

    var romanAnswer=[];
    
    romanAnswer.push(build(thousands,new convert('thousands')));
    romanAnswer.push(build(hundreds, new convert('hundreds')));
    romanAnswer.push(build(tens,new convert('tens')));
    romanAnswer.push(build(ones,new convert('ones')));

    return romanAnswer.join('');
} 

  
 console.log(convertToRoman(36));
  