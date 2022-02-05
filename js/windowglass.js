function shape_glass(){
  var value =  document.getElementById('shapeglass').value;
if(value == "Singlepane"){
    document.getElementById('glass_singlepane').style.display="block";
    document.getElementById('glass_doublepane').style.display="none";
    document.getElementById('glass_type').style.display="none";
}
else if(value == "Doublepane"){
    document.getElementById('glass_singlepane').style.display="none";
    document.getElementById('glass_type').style.display="none";
    document.getElementById('glass_doublepane').style.display="block";
}
}
function back(){
    document.getElementById('glass_singlepane').style.display="none";
    document.getElementById('glass_doublepane').style.display="none";
    document.getElementById('glass_type').style.display="block";
    document.getElementById('shapeglass').value = "";
}