const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritecats.com'
];


const googleSearch=(searchinput)=>{
    const matches = googleDatabase.filter(website=>{
        return website.includes(searchinput);
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

console.log(googleSearch('cats'));