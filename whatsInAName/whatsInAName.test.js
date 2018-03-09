const whatIsInAName = require("./whatIsInAName.js");

test("whatIsInAName should return the correct dictionary object",function(){
    expect(whatIsInAName.whatIsInAName(
        [
            { first: "Romeo", last: "Montague" }, 
            { first: "Mercutio", last: null }, 
            { first: "Tybalt", last: "Capulet" }
        ], { last: "Capulet" })
        .toEqual([
            { first: "Tybalt", last: "Capulet" }]))
})
 
/* 
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }] */

