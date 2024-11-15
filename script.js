// Menu functions
function openMenu() {
    document.getElementById('sidemenu').style.right = '0';
}

function closeMenu() {
    document.getElementById('sidemenu').style.right = '-200px';
}

// Tab switching functions
function openTab(tabName, event) {
    // Remove active classes from all tabs and links
    const tabs = document.querySelectorAll(".tab-contents");
    tabs.forEach(tab => tab.classList.remove("active-tab"));

    const tabLinks = document.querySelectorAll(".tab-links");
    tabLinks.forEach(link => link.classList.remove("active-link"));

    // Add active class to the clicked tab and link
    document.getElementById(tabName).classList.add("active-tab");
    event.target.classList.add("active-link");
}
