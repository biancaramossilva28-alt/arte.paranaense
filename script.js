const botoesCuritir = document.queryelectorAll (".curtir");
botoesCuritir.foreach(function(botoesCuritir)
let curtiu=false;
botoesCuritir.addEventLister("click", curtir);
function curtir(){
    const contador =botoesCuritir.queryelectorAll ("span");
    if (curtiu === false){
        contador.textContent++;
        curtiu = true;}
        else {
            con.textContent--;
            curtiu = false
        }
});



const btnTema= document.querylector(".btn-tema");
btnTema.addEventlistener("click", mudarTema);
function muarTema(){
    document.body.classList.toggle("tema-escuro");
}
