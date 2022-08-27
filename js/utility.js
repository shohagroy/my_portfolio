
// toggle menu bar start 
document.getElementById('toggle-strat').addEventListener('click', ()=>{
    document.getElementById('navigation-menu').style.left = "0%";
    document.getElementById('toggle-strat').style.display = "none";
    document.getElementById('toggle-end').style.display = "block";
})

document.getElementById('toggle-end').addEventListener('click', ()=>{
    document.getElementById('navigation-menu').style.left = "100%";
    document.getElementById('toggle-strat').style.display = "block";
    document.getElementById('toggle-end').style.display = "none";
})

// toggle menu bar end 


// animation strat 

const text = document.querySelector('.secend-text');
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer..";
        
    }, 0);
    setTimeout(() => {
        text.textContent = "Software Developer..";
        
    }, 4000);
    setTimeout(() => {
        text.textContent = "MERN Stack Developer..";
        
    }, 12000);

}
textLoad();
setInterval(textLoad, 16000)
