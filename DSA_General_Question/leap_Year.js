function isLeapYear(year){
    if((year%4==0)&&(year%100!=0 ||year%400==0)){
        return 'isLeap Year';
    }
    else{
       return 'is Not Year'; 
    }

}

console.log(isLeapYear(1600))
console.log(isLeapYear(1800))