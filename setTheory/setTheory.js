
function sortAndRemoveDuplicates (arrUnsortedWithDuplicates){
    arrUnsortedWithDuplicates.sort((a,b)=> (a-b));
    return arrUnsortedWithDuplicates.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    },[]); 
}

function outOfUnion(arr1,arr2) {
    
    var union=sortAndRemoveDuplicates(arr1.concat(arr2));
    var intersection=[];
    var nonIntersection=[];
    var memberOfArr1;
    var memberOfArr2;
    for(i=0;i<union.length;i++){
        memberOfArr1 = arr1.indexOf(union[i])!==-1 ? true : false;
        memberOfArr2 = arr2.indexOf(union[i])!==-1 ? true : false;
        if (memberOfArr1 && memberOfArr2) {
            intersection.push(union[i]);
        }
        if ((memberOfArr1 && !memberOfArr2) ||  (!memberOfArr1 && memberOfArr2)){
           nonIntersection.push(union[i]);
        }
    }
   return nonIntersection; 
}

exports.sortAndRemoveDuplicates = sortAndRemoveDuplicates;
exports.outOfUnion = outOfUnion; 


/* function sortAndRemoveDuplicates (arrUnsortedWithDuplicates){
    arrUnsortedWithDuplicates.sort((a,b)=> (a-b));
    return arrUnsortedWithDuplicates.reduce(function(prev, curr){
        
        if (prev[prev.length-1]!==curr){
            return prev.concat(curr);
        } 
        
    },[])
}
 */
/* function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
} */


//form the space of all elements. make it a set
//var allSpace = arr1.concat(arr2);
// make it a set

//then form the logical combinations of two sets
