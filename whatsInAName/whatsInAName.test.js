const whatIsInAName = require("./whatIsInAName.js");

test("whatIsInAName test 1",function(){
    expect(whatIsInAName.whatIsInAName(
        [
            { first: "Romeo", last: "Montague" }, 
            { first: "Mercutio", last: null }, 
            { first: "Tybalt", last: "Capulet" }
        ], { last: "Capulet" })
        .toEqual([
            { first: "Tybalt", last: "Capulet" }]))
});

test('whatIsInAName test 2', function(){
    expect(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })).toEqual([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }])});  

test('whatIsInAName test 3', function(){
    expect(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })).toEqual([{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }])});

test('whatIsInAName test4', function(){
    expect(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })).toequal([{ "a": 1, "b": 2, "c": 2 }])}); 
