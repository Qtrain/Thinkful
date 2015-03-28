console.log("array apply",
    Array.apply(null, {length: 100}).map(function(val, index) {
        index++;
        if (index % 15 == 0){return "FizzBuzz";}
        if (index % 3 == 0){return "Fizz";}
        if (index % 5 == 0){return "Buzz";}
        return index;
    }).join('\n')
);

for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}