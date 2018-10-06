const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', (done)=>{ //done = waits until the request is done; otherwise it passes with pending promise
    expect.assertions(1);// always use assertions with async calls
    swapi.getPeople(fetch).then(data=>{ 
        expect(data.count).toEqual(87)
        done();
        
    })
})


it ('calls swapi to get people with a promise', ()=>{
    expect.assertions(2);// always use assertions with async calls
    
   return swapi.getPeoplePromise(fetch).then(data=>{
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})