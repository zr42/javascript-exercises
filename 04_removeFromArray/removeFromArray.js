const removeFromArray = function(initialArray, ...toRemove) 
{
    for(let i = 0;i < toRemove.length; i++)
    {
        let target = initialArray.indexOf(toRemove[i]);
        if(target != -1)
        {
            initialArray.splice(target, 1);
        }
    }
    return initialArray;
};

// Do not edit below this line
module.exports = removeFromArray;
