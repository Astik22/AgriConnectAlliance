document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const userData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        mobile: document.getElementById('mobile').value,
        gender: document.getElementById('gender').value,
        address: document.getElementById('address').value,
        state: document.getElementById('state').value,
        pincode: document.getElementById('pincode').value
    };

    
    localStorage.setItem('user', JSON.stringify(userData));

    
    window.location.href = 'login.html';
});