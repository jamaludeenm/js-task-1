
submitbtn=document.getElementById('submit');
 
 
 function setcolor(){
    let x=Math.ceil(Math.random()*256);
	let y=Math.ceil(Math.random()*256);
	let z=Math.ceil(Math.random()*256);
 let bgcolor="rgb("+x+","+y+","+z+")";
 
 document.body.style.background=bgcolor;
  }





function setBg(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}


submitbtn.addEventListener('click',setBg);

