let age =15
let movie ="frozen"
let basePrice = 0
let finalPrice = 0

if(movie == "avenger")
{
    basePrice=12
}
else if(movie == "frozen")
{
    basePrice=8
}
else if(movie == "inception")
{
    basePrice=10
}
else
{
console.log("no ticket for this movie")
}

if(basePrice>0)
{
    if(age<12)
    {
        finalPrice=basePrice*0.5
    }
    else if(age<=18)
    {
        finalPrice=basePrice*0.8
    }
    else if(age>=60)
    {
        finalPrice=basePrice*0.7
    }
    else{
        console.log("movie no avaialble")
    }
}

console.log("movie ::",movie)
console.log("age ::",age)
console.log("finalPrice ::",finalPrice)