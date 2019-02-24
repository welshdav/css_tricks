const root = document.documentElement; 
const color = root.style.getPropertyValue('--bg-color'); 
console.log(color); 

root.style.setProperty('--bg-color', '#ff0000'); 
