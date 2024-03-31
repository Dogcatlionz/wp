var days = {'Sunday': '0', 'Monday': '1', 'Tuesday': '2', 'Wednesday': '3', 'Thursday': '4', 'Friday': '5', 'Saturday': '6'};

function weekday(str) 
{
    var a = [];
    for (let i in str) 
    {
        var b = str[i];
        var c = days[b];
        a.push(c);
    }
    return a;
}

console.log('weekday(["Monday", "Wednesday", "Friday"]):', weekday(["Monday", "Wednesday", "Friday"]));
console.log('Day of the week=', Deno.args);
console.log(weekday(Deno.args));
