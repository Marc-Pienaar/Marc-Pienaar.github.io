function loadAdminPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <h1>Welcome, Admin!</h1>
    <p>This is your admin dashboard. Only you can see this.</p>
    `;
}

function loadSubscriberPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <h1>Welcome, Subscriber!</h1>
    <p>This is your subscriber dashboard. Only subscribers can see this.</p>
    `;
}

function loadPublicPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <h1>Welcome, Public User!</h1>
    <p>This is a public page. Anyone can see this.</p>
    `;
}
