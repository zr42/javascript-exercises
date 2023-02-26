const sumAll = function(start, end) 
{
    let sum = 0;
    lowEnd = Math.min(start, end);
    highEnd = Math.max(start, end);
    if(lowEnd < 0)
    {
        return 'ERROR';
    }
    if(typeof start != 'number' || typeof end != 'number')
    {
        return 'ERROR';
    }

    for(let i = lowEnd; i <= highEnd; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
