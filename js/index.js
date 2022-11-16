const residuos = document.querySelectorAll(".residuos");
const contenedores = document.querySelectorAll(".contenedores");
const divResiduos = document.querySelector(".divResiduos");
let contador = 0;

residuos.forEach(item => {
    item.addEventListener("dragstart", (e) => {
        item.classList.add("dragging");
        item.classList.add("eliminar");
        e.dataTransfer.setData("id", item.id);
    })
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    })
})

contenedores.forEach(cont => {
    cont.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    cont.addEventListener("drop", (e) => {
        const idRes = e.dataTransfer.getData("id");
        const idCont = cont.id;
        const eliminar = document.querySelector(".eliminar");
        if (idRes == idCont){
            eliminar.remove();
            contador += 1;
            contador == 20 ? felicitaciones() : false;
        }
    })
})

function felicitaciones () {
    divResiduos.innerHTML = `
    <p>¡Felicitaciones! Has reciclado todos los residuos!</p>`;
    divResiduos.classList.add("felicitaciones");

}
