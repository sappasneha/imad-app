/*console.log('Loaded!');
//change the text of the main text div
var element=document.getElementById('maintext');
element.innerHTML='new value';

//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
    
};*/
var button=document.getElementById('counter');

button.onlick=function(){
    //create a request object
    var request=new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if (request.readystate === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
             var counter=request.responseText;
             var span=document.getElementById('count');
              span.innerHTML=counter.toString();
             }
        
            }
    
   
};
//make the request
request.open('sappasneha.imad.hasura-app.io/counter',true);
request.send(null);
};
//submit name
var nameInput=document.getElementById();
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
 //make a request to the server and send the name
 //capture a list of names and render it as a list
 var names=['name1','name2','name3','name4'];
 var list='';
 for(var i=0;i<names.length;i++){
  list+='<li>'+names[i]+'</li>';
 }
 var ul=document.getElementById('namelist');
 ul.innerHTML=list;
 
    
};