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
<<<<<<< HEAD
        const list = document.querySelector('#olympian-list');
        data.forEach((item) => {
            const charDiv = document.createElement('div');
            const lineBreak = document.createElement('hr');
            const navLink = document.createElement('a');
=======
        const list = document.querySelector("#olympian-list");
        data.forEach((item) => {
            const charDiv = document.createElement('div');
            const lineBreak = document.createElement('hr');
            const linkNav = document.createElement("a");

>>>>>>> b08379e6a0728d353d2cc67f16ccfbe93c815ebb
            lineBreak.style.border = "1px solid var(--text)";
            lineBreak.style.marginBlock = "20px";
            charDiv.classList.add('detail', 'reveal');
            charDiv.setAttribute("id", item.id);
            charDiv.innerHTML = `
                <h2>${item.title}</h2><span>${item.description}</span>
                <p><img src="${item.image}" alt="${item.title}">${item.caption}</p>
            `;
<<<<<<< HEAD
            navLink.setAttribute('href', '#'+item.id);
            navLink.innerHTML = item.title;

            list.appendChild(navLink);
=======
            linkNav.setAttribute("href", "#"+item.id);
            linkNav.textContent = item.title;

            list.appendChild(linkNav);
>>>>>>> b08379e6a0728d353d2cc67f16ccfbe93c815ebb
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
<<<<<<< HEAD
        const list = document.querySelector('#titan-list');
        data.forEach((item) => {
            const charDiv = document.createElement('div');
            const lineBreak = document.createElement('hr');
            const navLink = document.createElement('a');
=======
        const list = document.querySelector("#titan-list")
        data.forEach((item) => {
            const charDiv = document.createElement('div');
            const lineBreak = document.createElement('hr');
            const linkNav = document.createElement("a");

>>>>>>> b08379e6a0728d353d2cc67f16ccfbe93c815ebb
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
<<<<<<< HEAD
            navLink.setAttribute('href', '#'+item.id);
            navLink.innerHTML = item.title;

            list.appendChild(navLink);
            container.appendChild(charDiv);
            container.appendChild(document.createElement('br'));
            container.appendChild(lineBreak);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));

fetch('data/creature-data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('#creature-char');
        const list = document.querySelector('#creature-list');
        data.forEach((item) => {
            const charDiv = document.createElement('div');
            const lineBreak = document.createElement('hr');
            const navLink = document.createElement('a');
            lineBreak.style.border = "1px solid var(--text)";
            lineBreak.style.marginBlock = "20px";
            charDiv.classList.add('detail', 'reveal');
            charDiv.setAttribute("id", item.id);
            charDiv.innerHTML = `
                <h2>${item.title}</h2>
                <p><img src="${item.image}" alt="${item.title}">${item.description}</p>
            `;
            navLink.setAttribute('href', '#'+item.id);
            navLink.innerHTML = item.title;

            list.appendChild(navLink);
=======
            linkNav.setAttribute("href", "#"+item.id);
            linkNav.textContent = item.title;

            list.appendChild(linkNav);
>>>>>>> b08379e6a0728d353d2cc67f16ccfbe93c815ebb
            container.appendChild(charDiv);
            container.appendChild(document.createElement('br'));
            container.appendChild(lineBreak);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));