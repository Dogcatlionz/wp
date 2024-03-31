function countChar(str) 
{
    let charCount = {};
    for (let i = 0; i < str.length; i++) 
    {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

console.log(countChar("aaeeijfaaaxb"));
