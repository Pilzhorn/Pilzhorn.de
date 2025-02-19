function openSubpage(currSubpage){
    let subpages = document.getElementsByClassName("subpage")
    for(i = 0; i<subpages.length; i++){
        subpages[i].style.display = "none"
    }
    document.getElementById(currSubpage).style.display = "block"
}
document.getElementById("defaultOpen").click()