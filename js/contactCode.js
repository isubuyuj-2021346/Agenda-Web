//Filling table for page 1
getEmployees();

// Event handler
$('.pagination > li').on("click", function() {
  var p = $(this).attr('data-page');
  getEmployees(p);
})

// Function declaration
function getEmployees(_page) {
  this.page = _page || 1;

  $('.ajax-content').empty();

  $.ajax({
    url: 'https://randomuser.me/api/?page=' + page + '&results=10&?seed=epicode',
    dataType: 'json',
    success: function(data) {
      for (var i = 0; i < data.results.length; i++) {
        $('.ajax-content').append('<tr>' +
          '<td><img src="' + data.results[i].picture.thumbnail + '"></td>' +
          '<td>' + data.results[i].name.first + '</td>' +
          '<td>' + data.results[i].name.last + '</td>' +
          '<td>' + data.results[i].location.city + '</td>' +
          '<td class="toggler"><a href="mailto:' + data.results[i].email + '">' + data.results[i].email + '</a><button>Show email</button></td>' +
          '</tr>')
      }

      //Hidding all emails
      $('.ajax-content .toggler a').each(function() {
        $(this).hide();
      });

      //Toggler to show email on click
      $('.ajax-content .toggler button').on("click", function() {
        $(this).hide();
        $(this).siblings('a').show();
      })
    }
  });
}