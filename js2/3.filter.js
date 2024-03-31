function filter(a, f) 
{
    let result = [];
    for (let i = 0; i < a.length; i++) 
    {
        if (f(a[i])) 
        {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(filter([66, 37, 54, 71], function(x) { return x % 2 == 1; })); 
