
function loadContent(url) {

  var xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.onload = function() {

    if (xhr.status === 200) {

      var content = document.getElementById('content');

      content.style.display = 'none';

      content.innerHTML = xhr.responseText;

      content.style.display = 'block';

    } 
    else 
    {
 
      console.error('Failed to load content.');

    }

  };

  xhr.send();

}

document.getElementById('retain').addEventListener('click', function(e) 
{
  e.preventDefault();
  loadContent('retain.html');
  
});

document.getElementById('convert').addEventListener('click', function(e) 
{
  e.preventDefault();
  loadContent('convert.html');

});

document.getElementById('prospect').addEventListener('click', function(e) 
{

  e.preventDefault();
  loadContent('prospect.html');

});


