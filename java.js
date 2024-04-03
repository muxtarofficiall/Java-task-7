let movie1 = prompt("Filmin adını daxil et: ");
fetch(
    `https://dummyapi.online/api/movies?q=${movie1}`
).then((res) =>
   res.json().then((data) => {
       console.log(data);
        console.log(
            `${movie1}: ${data.movie} `
        );
    }));

