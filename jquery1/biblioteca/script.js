$(function () {

    function Livro(titulo, descricao, genero, autor) {

        this.titulo = titulo;
        this.genero = genero;
        this.descricao = descricao;
        this.autor = autor;
    }

    let acervoArray = new Array();
    $("#add_acervo").click(function () {
        let tituloLivro = $("#titulo").val();
        let descricaoLivro = $("#descricao").val();
        let generoLivro = $("#genero").val();
        let autorLivro = $("#autor").val();

        let livro = new Livro(tituloLivro, descricaoLivro, generoLivro, autorLivro);
        acervoArray.push(livro);
        $("input[name='acervo_post']").val(JSON.stringify(acervoArray));


        $("#acervo")
            .append(
                $("<tr>")
                    .append(
                        $("<td>")
                            .text(tituloLivro)
                    )
                    .append(
                        $("<td>")
                            .text(descricaoLivro)
                    )
                    .append(
                        $("<td>")
                            .text(generoLivro)
                    )
                    .append(
                        $("<td>")
                            .text(autorLivro)
                    )
                    .append(
                        $("<td>")
                            .append($("<img>").attr('src', 'lixeira.png'))
                    )
            );
    })

    $("#acervo").on("click", "img", function () {
        $(this).parents("#acervo tr").remove();
    })
});