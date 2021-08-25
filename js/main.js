$(function() {
  $( ".sortable" ).sortable({
    connectWith: ".connectedSortable",
    
  }).disableSelection(); 
  $('.add-button').click(function() {
      var txtNewItem = $('#new_text').val();
      $(this).closest('div.container').find('ul').append('<div><li class="card">'+txtNewItem+'</li><button class="remove"><i class= "fas fa-trash"></i></button></div>');
  });   
  $(".sortable").sortable({
    connectWith: ".connectedSortable"
  }).on("click",".remove", function(e){
    e.preventDefault();
    $(this).parent('div').remove();
  })   
});