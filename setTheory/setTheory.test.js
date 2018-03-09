const setTheory = require('./setTheory');

var compare1=[2,4,4,1,9,5];
var compare2=[3,2,5,5,6,11,13];

test('test that the function sorts and removes duplicate elements',() => {
    expect(setTheory.sortAndRemoveDuplicates(compare1)).toEqual([1,2,4,5,9] );
});

test('test that the function outOfUnion returns the elements that are not common to both sets',() => {
    expect(setTheory.outOfUnion(compare1,compare2)).toEqual([1, 3, 4, 6, 9, 11, 13] );
});
