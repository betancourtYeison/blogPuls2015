/*$('#publicar_nav').click(function(){
	alert('yeah');
});

$('#avatar').animate({
	opacity: 0.2,
	width: 550
});

$('#avatar').fadeIn();

$('#avatar').slideUp();

$('#avatar').slideDown();*/

var $button = $('#mostrar-form'),
	$form = $('#formulario'),
	$list = $('#contenido'),
	$post = $('.item').first(),
	$titulo = $('#titulo'),
	$url = $('#url');

if(localStorage.getItem('autosave')){
	$url.val(sessionStorage.getItem('url'));
	$titulo.val(sessionStorage.getItem('titulo'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function agregarPost(){
	//e.preventDefault();
	//e.stopPropagation();
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$list.prepend($clone);
	
	mostrarOcultarFormulario();

	$url.val('');
	$titulo.val('');

	$clone.fadeIn();
	//$clone.slideDown();	

	return false;
}

function mostrarOcultarFormulario(){
	//tito.preventDefault();
	//tito.stopPropagation();
	$form.slideToggle();
	$list.slideToggle();
	if($(window).width() > 800){
		$('aside').slideToggle();
	}
	return false;
}

$('nav').on('click', function(){ console.log("Soy un nav y me hicieron click");})
$('nav ul').on('click', function(){ console.log("Soy un ul y me hicieron click");})

//Eventos
var msg = 'https://';
$button.click(mostrarOcultarFormulario);
$form.on('submit', agregarPost)
	.find('#url')
	.on('focus', function(){
		console.log($url.val());
		$url.val(msg);
	})
	.on('blur', function(){
		msg = $url.val();
		console.log(msg);
		$url.val('');
	});