window.addEventListener('load', function () {

  capitalize(firstname);
  capitalize(lastname);
  document.getElementById("greeting").textContent = 'Hello, ' + capitalize(firstname) + ' ' + capitalize(lastname);
  document.getElementById("nameInfo").textContent = 'Name:  ' + capitalize(firstname) + ' ' + capitalize(lastname);


    

function capitalize(str)
{
  var arrayName = str.trim().split(/\s+/)
    
  for(var i = 0; i < arrayName.length; i++){
      arrayName[i] = arrayName[i].charAt(0).toUpperCase()+arrayName[i].slice(1);
  }
  return arrayName.join(' ');
}

});

