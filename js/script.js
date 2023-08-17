const apikey = 'f4ec3654';
const frmPesquisa = document.querySelector("form");
frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();
    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa == ""){
        alert("fill in the empty field!");
        return;
    }
    fetch (`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apikey}`)
    .then(result => result.json())
    .then(json => carregalista(json));
 }
 const carregalista = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";
    if (json.Response =='False'){
        alert("no movie found");
        return
    }

    json.Search.forEach(element => {

       let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2>`;

        lista.appendChild(item);
    });
 }