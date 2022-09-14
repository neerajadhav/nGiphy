let apiKEY = "ZIIRog8OtmaF3VP3gLIkb5EotVkbD2WF";
let lmt = 10;

let sURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&limit=${lmt}&offset=0&lang=en&q=`;
let tURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKEY}&limit=${lmt}&offset=0&lang=en`;

async function nSearch() {
  let query = document.getElementById('query').value;
  let searchURL = sURL + query;
  const response = await fetch(searchURL);
  const data = await response.json();
  console.log(data);
  let gif = document.getElementById('searchgif');
  gif.innerHTML = "";
  for (let i = 0; i < data.data.length; i++) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.classList.add('h-[200px]');
    div.classList.add('grow');
    div.classList.add('m-1');
    div.classList.add('bg-gray-400');
    div.classList.add('rounded');
    img.src = data.data[i].images.original.url;
    img.classList.add('rounded');
    img.classList.add('h-[200px]');
    img.classList.add('min-w-full');
    img.classList.add('max-w-full');
    img.classList.add('object-cover');
    div.appendChild(img);
    gif.appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded",async () => {
  const res = fetch(tURL);
  const data = await (await res).json();
  console.log(data);
  let gif = document.getElementById('trendinggif');
  for (let i = 0; i < data.data.length; i++) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.classList.add('h-[200px]');
    div.classList.add('grow');
    div.classList.add('m-1');
    div.classList.add('bg-gray-400');
    div.classList.add('rounded');
    img.src = data.data[i].images.original.url;
    img.classList.add('rounded');
    img.classList.add('h-[200px]');
    img.classList.add('min-w-full');
    img.classList.add('max-w-full');
    img.classList.add('object-cover');
    div.appendChild(img);
    gif.appendChild(div);
  }
});