

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
