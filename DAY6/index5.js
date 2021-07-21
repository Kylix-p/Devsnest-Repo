var xyz=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var freq = 1;
var c = 0;
var item;
for (var i=0; i<xyz.length; i++)
{
        for (var j=i; j<xyz.length; j++)
        {
                if (xyz[i] == xyz[j])
                 c++;
                if (freq<c)
                {
                  freq=c;
                  item = xyz[i];
                }
        }
        c=0;
}
console.log(item+" ( " +freq +" times ) ") ;