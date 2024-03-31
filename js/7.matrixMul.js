function Mul(a, b) 
{
    var c = []

    for (let i = 0; i < a.length; i++) 
    {
        c[i] = []
        for (let j=0; j<a[i].length; j++) 
        {
            c[i][j] = a[i][j] * b[i][j]
        }
    }
    return c
}

console.log(Mul([[2,3],[1,6]], [[5,9],[6,5]]))
