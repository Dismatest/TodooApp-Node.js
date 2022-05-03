$(document).ready(function(){

  $('form').on('submit', function(){

      let item = $('form input');
      let todo = { item: item.val() };
      
      $.ajax({
        type: 'POST',
        url: '/add',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

    $('li').on('click', function () {
      //g means replace the white spaces multiple times
      let item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/add/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});