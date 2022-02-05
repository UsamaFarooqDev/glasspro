function show_prep() {
    var value = document.getElementById('preps').value;
    if (value == 'Yes') {
        document.getElementById('prepoption').style.display = "block";
    }
    else {

    }
}
function show_labour(){
    var value = document.getElementById('ins').value;
    if(value == 'Installation'){
        document.getElementById('labour').style.display ="block";
    }
}
function show_shape(){
    document.getElementById('mirror_shape').style.display="block";
    document.getElementById('mirror_dimensions').style.display="none";
    document.getElementById('mirror_thickness').style.display="none";
    document.getElementById('mirror_edgework').style.display="none";
    document.getElementById('mirror_installation').style.display="none";
}
function show_dimen(){
    document.getElementById('mirror_shape').style.display="none";
    document.getElementById('mirror_dimensions').style.display="block";
    document.getElementById('mirror_thickness').style.display="none";
    document.getElementById('mirror_edgework').style.display="none";
    document.getElementById('mirror_installation').style.display="none";
}
function show_thickness(){
    document.getElementById('mirror_shape').style.display="none";
    document.getElementById('mirror_dimensions').style.display="none";
    document.getElementById('mirror_thickness').style.display="block";
    document.getElementById('mirror_edgework').style.display="none";
    document.getElementById('mirror_installation').style.display="none";
}

function show_edgework(){
    document.getElementById('mirror_shape').style.display="none";
    document.getElementById('mirror_dimensions').style.display="none";
    document.getElementById('mirror_thickness').style.display="none";
    document.getElementById('mirror_edgework').style.display="block";
    document.getElementById('mirror_installation').style.display="none";
}

function show_installation(){
    document.getElementById('mirror_dimensions').style.display="none";
    document.getElementById('mirror_thickness').style.display="none";
    document.getElementById('mirror_edgework').style.display="none";
    document.getElementById('mirror_installation').style.display="block";
}