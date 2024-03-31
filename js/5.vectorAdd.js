function vectorAdd(a, b)
{
    var c = [];

    for(let i = 0; i < a.length; i++)
    {
        c[i] = a[i] + b[i];
    }
    return c;
}

console.log(vectorAdd([456, 123], [-450, 100]));
