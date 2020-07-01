let projects = document.getElementById('projects')
let resume = document.getElementById('resume')
let contact = document.getElementById('contact')
let projectsButton = document.getElementById('projectsbutton')
let contactButton = document.getElementById('contactbutton')
let resumeButton = document.getElementById('resumebutton')
let wiserApp = document.getElementById('wiserapp')
let trumpLibsApp = document.getElementById('trumplibsapp')
let classyPostItApp = document.getElementById('classypostitapp')
let imgBlock = document.getElementById('imgblock');
let i1 = document.getElementById('i1');
let i2 = document.getElementById('i2');
let i3 = document.getElementById('i3');
let phone = document.getElementById('phone');

const openContact = (win) => {
    projectsButton.className = 'unselected';
    contactButton.className = 'unselected';
    resumeButton.className = 'unselected';
    if (win == projects) {
        projectsButton.className = 'selected';
    }
    if (win == resume) {
        resumeButton.className = 'selected';
    }
    if (win == contact) {
        contactButton.className = 'selected';
    }
    console.log(win)
    projects.style.display = 'none';
    resume.style.display = 'none';
    contact.style.display = 'none';
    win.style.display = 'block';
}

const openApp = (appName) => {
    if (appName == 'wiser') {
            var win = window.open('http://wiser.earth', '_blank');
            win.focus();
    }

    if (appName == 'trumplibs') {
        var win = window.open('https://trumplibsrt.herokuapp.com/', '_blank');
        win.focus();
    }

    if (appName == 'classypostit') {
        var win = window.open('https://fancypostit.herokuapp.com/index.html', '_blank');
        win.focus();
    }
}

contactButton.addEventListener('click', () => openContact(contact))
projectsButton.addEventListener('click', () => openContact(projects))
resumeButton.addEventListener('click', () => openContact(resume))
wiserApp.addEventListener('click', () => openApp('wiser'))
trumpLibsApp.addEventListener('click', () => openApp('trumplibs'))
classyPostItApp.addEventListener('click', () => openApp('classypostit'))

imgBlock.onmouseover = function() {
    i1.src = 'img3.jpg'
    i2.src = 'img1.jpg'
    i3.src = 'img4.jpg'
}

imgBlock.onmouseout = function() {
    i1.src = 'blueimg3.jpg'
    i2.src = 'blueimg1.jpg'
    i3.src = 'blueimg4.jpg'
}

phone.addEventListener('click', () => {
    phone.innerHTML = 'phone: (914) 309-1984';
    phone.style.cursor = 'default';
} )