function navIndex(address) {    
    const allPages = document.querySelectorAll('[id$="-pg"]');
    allPages.forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(address + "-pg").style.display = "block";
    document.getElementById(address).checked = true;
}

navIndex("main");