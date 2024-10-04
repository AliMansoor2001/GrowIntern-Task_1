// const dropdown = document.getElementById('language')

function focus() {
    [].forEach.call(this.options, function(o) {
      o.textContent = o.getAttribute('value') + ' (' + o.getAttribute('data-descr') + ')';
    });
  }
  function blur() {
    [].forEach.call(this.options, function(o) {
      console.log(o);
      o.textContent = o.getAttribute('value');
    });
  }
  [].forEach.call(document.querySelectorAll('#country_code'), function(s) {
    s.addEventListener('focus', focus);
    s.addEventListener('blur', blur);
    blur.call(s);
  });

  document.getElementById("mbnum").addEventListener('focus', function() {

    document.getElementById("info_services").style.display = "inline-block";
    document.getElementById("info_services").style.width = "400px";
    document.getElementById("info_services").style.fontSize = "10px";
    document.getElementById("info_services").style.color = "#707a94";
    document.getElementById("info_services").style.textAlign = "left";
    document.getElementById("info_services").style.marginTop = "10px";
    document.getElementById("info_services").style.position = "relative";
    document.getElementById("info_services").style.right = "90px";
    
    
  });

  document.getElementById("mbnum").addEventListener('blur', function() {

    document.getElementById("info_services").style.display = "none";
  })