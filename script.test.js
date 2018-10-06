const googleSearch = require("./script");

//mocking a database
dbMock = [
    'dog.com',
    "cheesepuff.com",
    "disney.com",
    'dogpictures.com'
]
it('this is a test', ()=>{
    //    googleSearch("testtest", dbMock);

    expect("hello").toBe("hello");
})

it('it is searching google', ()=>{
   
expect(googleSearch("testtest", dbMock)).toEqual([]);
expect(googleSearch("dog", dbMock)).toEqual(['dog.com']);

})