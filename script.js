
const users = [
    { name: "Anna", role: "Senior SEO expert", active: true },
    { name: "Sara", role: "website developer", active: true },
    { name: "George", role: "Being a cutie", active: false },
    { name: "Max", role: "annoying", active: true }
];  //this imitates the real database. 


const cards = document.getElementById("cards");
const stats = document.getElementById("stats");

function renderUsers(list) {
    cards.innerHTML = "";
    list.forEach(user => {
        const card = document.createElement('div');
        card.className = "card";

        card.innerHTML = `<h3>${user.name}</h3>
                <p>${user.role}</p>
                <span>${user.active ? "Active" : "Inactive"}</span>
                `;

        cards.appendChild(card);
    })

}
renderUsers(users);

//Real time statistics
function renderStats() {
    const total = users.length;
    const active = users.filter(u => u.active).length;
    stats.innerHTML = `
            <strong>Total: </strong> ${total} | <strong>Active: </strong> ${active}`;

}
renderStats();

//Live search
const search = document.getElementById('search');
search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    const filtered = users.filter(user => user.name.toLowerCase().includes(value));
    renderUsers(filtered);
})


//toggle theme
let darkMode = false;
const themeBtn = document.getElementById("themeBtn")
themeBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark")
})





