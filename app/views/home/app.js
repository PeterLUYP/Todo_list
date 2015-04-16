$(function(){

$('#btn').on('click', function(){
	$('#pp').add($('<del>' + this.innerHTML + '</del>'));
	$(this).text('Undone');
	$(this).addClass('undone').removeClass('done');
});

$('.done').on('click', function(){
	$('#pp').add($('<del>' + this.innerHTML + '</del>'));
	$(this).text('Undone');
	$(this).addClass('undone').removeClass('done');
});

$('.undone').on('click', function(){
	$("#pp").remove($('<del>' + this.innerHTML + '</del>'));
	$(this).text('Done');
	$(this).removeClass('undone').addClass('done');
});

});