//our goal is to implement an difference function, which subtracts one list from another.
//It should remove all values from list a, which are present in list b.


function array_diff(a, b) {
a.map(function(element){
for(var i =0; i <b.length; i++){
if(element === b[i]){
a[a.indexOf(element)]=null;
break;
}
}});
a = a.filter(function(n){ return n !=null });

return a;
}
console.log((array_diff([1,2,4,5,2], [2])))