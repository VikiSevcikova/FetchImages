fetch('https://jsonplaceholder.typicode.com/photos/?_limit=15').then(response => {
    if(response.status !== 200){
        console.log('There is an issue. Status code:' + response.status);
        return;
    }
    response.json().then((data) => {
        getImages(data);
    });

}).catch(e => console.log('Fetch error: ' + e));

let images = document.getElementById('images');

const getImages = ((data) => {
    for (const d of data) {
        let anchor = document.createElement("a");
        anchor.href = d.url;
        anchor.target = '_blank';

        let thumbnail = document.createElement("img");
        thumbnail.classList.add('thumbnail');
        thumbnail.src = d.thumbnailUrl;
        thumbnail.alt = d.title;

        anchor.appendChild(thumbnail);

        let div = document.createElement("div");
        div.classList.add('imageTitle');

        let p = document.createElement("p");
        p.textContent = d.title;
        div.appendChild(p);

        anchor.appendChild(div);

        images.appendChild(anchor);

    }
});
