
		$(function () {
			var addacervo = new Array();
			$("#botao").click(function () {
			let tituloLivro = $("#titulo").val();
			let descricaoDoLivro = $("#descricao").val();
			let generoDoLivro = $("#genero").val();
			let autorDoLivro = $("#autor").val();
			$("#acervo").append($("<tr>").addClass("livro")
			.append($("<td>").text(tituloLivro)).addClass("titulo")
			.append($("<td>").text(descricaoDoLivro)).addClass("descricao")
			.append($("<td>").text(generoDoLivro)).addClass("genero")
			.append($("<td>").text(autorDoLivro)).addClass("autor")
		 	.append($("<td>").append($("<img>").attr('src', 'lixo.png'))));
			$("#titulo").val("");
			$("#descricao").val("");
			$("#genero").val("");
			$("#autor").val("");
			})


			$("input[name=salvar_bd]").click(function () {
			$('.livro').each(function (idx, obj) {
			let titulo = $(obj).children("td:nth-child(1)").text();
			let descricao = $(obj).children("td:nth-child(2)").text();
			let genero = $(obj).children("td:nth-child(3)").text();
			let autor = $(obj).children("td:nth-child(4)").text();
			var livro = {
			"titulo": titulo, "descricao": descricao,
			"genero": genero, "autor": autor};		
			addacervo.push(livro);
			$("input[name=acervo_post]").val(JSON.stringify(addacervo));
			console.log(addacervo);
				});
			});
		

			$("#botao_apagar").click(function () {
				$("#acervo").empty();
			})
			$("#acervo").on("click", "img", function () {
				$(this).parents("#acervo tr").remove();
			})

		})