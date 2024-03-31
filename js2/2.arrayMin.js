var a=[9,16,10,6,8,12,7];

for (var i=0;i<a.length;i++) 
{
  if(a[i] < a[i+1])
    a[i+1] = a[i];
    
}

console.log("Min=%d",a[a.length-1]);
