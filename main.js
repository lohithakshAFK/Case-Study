Webcam.set({
    height:300,
    width:300,
    img_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("camera");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("outputt").innerHTML = '<img id="img_captured" src="'+data_uri+'">';
    });
}