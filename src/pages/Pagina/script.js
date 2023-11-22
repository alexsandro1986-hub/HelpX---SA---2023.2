document.addEventListener("DOMContentLoaded", function () {
    const ocupacao = document.getElementById("ocupacao");
    const formularioPessoal = document.getElementById("formularioPessoal");
    const formularioMedico = document.getElementById("formularioMedico");

    formularioPessoal.style.display = "block";
    formularioMedico.style.display = "none";

    ocupacao.addEventListener("change", function () {
        const selecao = ocupacao.value;

        if (selecao === "bombeiro" || selecao === "policial" || selecao === "medico") {
            
            formularioPessoal.style.display = "block";
            formularioMedico.style.display = "block";
        } else if (selecao === "outras") {
        
            formularioPessoal.style.display = "block";
            formularioMedico.style.display = "none";
        } 
    });
});
