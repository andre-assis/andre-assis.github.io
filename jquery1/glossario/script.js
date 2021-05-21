$(function () {
    var glossario = [{
        "id": 1,
        "termo": "W3C",
        "definicao": "World Wide Web Consortium – escritório responsável por desenvolver normas técnicas para a Internet",
        "autor": "José Borges",
        "dataCriacao": "01/04/2015"
    },
    {
        "id": 2,
        "termo": "HTML",
        "definicao": "HyperText Markup Language – linguagem de marcação utilizada para estruturar páginas web",
        "autor": "Pedro Silva",
        "dataCriacao": "12/05/2015"
    },
    {
        "id": 3,
        "termo": "CSS",
        "definicao": "Cascade Style Sheet – Folhas de estilo utilizadas para configurar a visualização de  páginas web.",
        "autor": "Luciana Mendes",
        "dataCriacao": "06/11/2017"
    }
    ];

    $(glossario).each(function (idx, termos) {
        let titulo = termos.termo;
        $("#termos")
            .append(
                $("<li>")
                    .text(titulo).attr("value", idx)
            )

        $("#termos").on("click", "li", function () {
            let id = $(this).val();
            $("#titulo").text("Definição");
            $("#termo").text(glossario[id].termo);
            $("#definicao").text(glossario[id].definicao);
            $("#autor").text(glossario[id].autor);
            $("#dataCriacao").text(glossario[id].dataCriacao);

        })

    })

});