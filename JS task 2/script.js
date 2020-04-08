var newArray=[
    {principal:2500, time: 1.8},
    {principal:1000, time:5},
    {principal:3000, time:1},
    {principal:2000, time:3},
];

function interestCalculator(array){
   var interestData =[];
 for (x of array){
       if ((x.principal >= 2500) && (x.time > 1) && (x.time <3)){
            x.rate = 3;   
        }
        else if ((x.principal >= 2500) && (x.time >= 3)){
            x.rate = 4;   
        }
        else if ((x.principal < 2500) || (x.time <=1)){
            x.rate = 2;   
        }
        else{
            x.rate = 1;
        }
        x.interest = (x.principal * x.rate * x.time) / 100;
        interestData.push(x);
   }
   console.log(interestData);
   return interestData;
}

interestCalculator(newArray);