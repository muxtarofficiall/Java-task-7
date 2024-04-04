fetch(
    `https://dummyapi.online/api/movies`
).then((res) =>
    res.json().then((data) => {
        data.map(d=>{console.log(d.movie)});
       
    }));
