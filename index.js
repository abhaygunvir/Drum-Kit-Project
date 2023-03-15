 





//----------------------------------------------------



function btn_animation(currentkey){
   var curr_button= document.querySelector("."+currentkey);
    console.log("curr_button is ",curr_button);
        
    curr_button.classList.add("pressed");
    
   
    // for goes back to orignal state 
    
    setTimeout(function(){ curr_button.classList.remove("pressed");},100);
               
               
}





    // USING ANANOMYS FUNCTION

for(var i=0;i<document.querySelectorAll(".drum").length;i++){ // but it will also give another button rather than only w,a,s,d etc buttons

    
   
    
   
document.querySelectorAll("button")[i].addEventListener("click",function(){
    
    console.log("this is ",this);
   //  this.style.color="white"; //changing button color
    
    
    var inner_HTML=this.innerHTML;
   console.log(inner_HTML);
    
    switch(inner_HTML){
        case "w":
             var audio= new Audio("sounds/tom-1.mp3"); // creating a variable that stores audio object
             //console.log(audio);
             btn_animation("w");
             audio.play();
        break;
        
        case "a":
            var audio= new Audio("sounds/tom-2.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("a");
        break;
            
        
        case "s":
            var audio= new Audio("sounds/tom-3.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("s");
            
        break;
        
        case "d":
            var audio= new Audio("sounds/tom-4.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("d");
        break;
            
        case "j":
            var audio= new Audio("sounds/snare.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("j");
        break;
            
        case "k":
            var audio= new Audio("sounds/crash.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("k");
            
        break;
        
        case "l":
            var audio= new Audio("sounds/kick-bass.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("l");
            
        break;
    }
    
});
}



// FOR KEYS 
document.addEventListener("keypress",function(event){
   
    
    console.log("event is ",event); // this prints which has happen
   // alert("key is pressed");
    
    console.log(event.key);
    var a=event.key;
    
     switch(a){
        case "w":
             var audio= new Audio("sounds/tom-1.mp3"); // creating a variable that storses audio object
             //console.log(audio);
             audio.play();
             btn_animation("w");
        break;
        
        case "a":
            var audio= new Audio("sounds/tom-2.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("a");
        break;
            
        
        case "s":
            var audio= new Audio("sounds/tom-3.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("s");
        break;
        
        case "d":
            var audio= new Audio("sounds/tom-4.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("d");
        break;
            
        case "j":
            var audio= new Audio("sounds/snare.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("j");
        break;
            
        case "k":
            var audio= new Audio("sounds/crash.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("k");
        break;
        
        case "l":
            var audio= new Audio("sounds/kick-bass.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("l");
        break;}
    
});







