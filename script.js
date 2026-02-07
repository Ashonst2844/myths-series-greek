function navIndex(address) {    
    const allPages = document.querySelectorAll('[id$="-pg"]');
    allPages.forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(address + "-pg").style.display = "block";
    document.getElementById(address).checked = true;
}

navIndex("main");

fetch('data/olympian-data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('#olympian-char');
        data.forEach((item) => {
            const charDiv = document.createElement('div');
            const lineBreak = document.createElement('hr');
            lineBreak.style.border = "1px solid var(--text)";
            lineBreak.style.marginBlock = "20px";
            charDiv.classList.add('detail', 'reveal');
            charDiv.setAttribute("id", item.id);
            charDiv.innerHTML = `
                <h2>${item.title}</h2><span>${item.description}</span>
                <p><img src="${item.image}" alt="${item.title}">${item.caption}</p>
            `;
            container.appendChild(charDiv);
            container.appendChild(lineBreak);
            container.appendChild(document.createElement("br"));
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));

fetch('data/titan-data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('#titan-char');
        data.forEach((item) => {
            const charDiv = document.createElement('div');
            const lineBreak = document.createElement('hr');
            lineBreak.style.border = "1px solid var(--text)";
            lineBreak.style.marginBlock = "20px";
            charDiv.classList.add('detail', 'reveal');
            charDiv.setAttribute("id", item.id);
            charDiv.innerHTML = `
                <h2>${item.title}</h2><span>${item.role}</span>
                <br>
                <p>${item.description}</p>
                <br>
                <br>
                <br>
                <span>Pasangan:</span> ${item.lover}<br>
                <span>Anak-anak:</span> ${item.child.join(', ')}
            `;
            container.appendChild(charDiv);
            container.appendChild(document.createElement('br'));
            container.appendChild(lineBreak);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));