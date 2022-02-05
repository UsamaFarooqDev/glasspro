function show_pair(){
    var value = document.getElementById('sf').value;
    if(value == "Pair"){
        document.getElementById('Pair').style.display="block";
        document.getElementById('sf_sp').style.display="none";
    }
    else{
        document.getElementById('Single').style.display="block";
        document.getElementById('sf_sp').style.display="none";
    }
}
function show_single_silver(){
    var value = document.getElementById('furnish_single').value;
    if(value == "Clear Anodized"){
        document.getElementById('silver_furnish').style.display="block";
    document.getElementById('brown_furnish').style.display="none";
    document.getElementById('sf_single_furnish').style.display="none";
    }
    else{
        document.getElementById('silver_furnish').style.display="none";
        document.getElementById('brown_furnish').style.display="block";
        document.getElementById('sf_single_furnish').style.display="none";
    }
}
function pair_back(){
    document.getElementById('sf_sp').style.display="block";
    document.getElementById('Single').style.display="none";
    document.getElementById('Pair').style.display="none";
    document.getElementById('sf').value="";
}
function furnish_back(){
    document.getElementById('sf_single_furnish').style.display="block";
    document.getElementById('silver_furnish').style.display="none";
    document.getElementById('brown_furnish').style.display="none";
    document.getElementById('furnish_single').value="";
}
function show_double_silver(){
    var value = document.getElementById('furnish_double').value;
    if(value == "Clear Anodized"){
        document.getElementById('silver_furnish_pair').style.display="block";
    document.getElementById('brown_furnish_pair').style.display="none";
    document.getElementById('sf_pair_furnish').style.display="none";
    }
    else{
        document.getElementById('silver_furnish_pair').style.display="none";
        document.getElementById('brown_furnish_pair').style.display="block";
        document.getElementById('sf_pair_furnish').style.display="none";
    }
}
function furnish_back_pair(){
    document.getElementById('sf_pair_furnish').style.display="block";
    document.getElementById('brown_furnish_pair').style.display="none";
    document.getElementById('silver_furnish_pair').style.display="none";
    document.getElementById('furnish_double').value="";
}