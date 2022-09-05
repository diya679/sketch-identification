
function preload(){
classifier=ml5.imageClassifier('DoodleNet');
}
function clearCanvas(){
    background("white");
}
function setup(){
 canvas= createCanvas(400,400);
 canvas.center();
 background("white");
 canvas.mouseReleased(Classifycanvas);
 synth=window.speechSynthesis;

}
function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    }
    }
    
function Classifycanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
    console.log(result);
    document.getElementById('label').innerHTML='Label:'+result[0].label;
    document.getElementById('confidence').innerHTML='Confidence:'+Math.round(result[0].confidence*100)+'%';

    utterThis=new SpeechSynthesisUtterance(result[0].label);
    synth.speak(utterThis);

}

