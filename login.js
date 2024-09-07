document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    
    if (storedUser && storedUser.username === enteredUsername && storedUser.password === enteredPassword) {
        
        if (userType === 'farmer') {
            window.location.href = 'index.html'; 
        } else if (userType === 'buyer') {
            window.location.href = 'Market.html'; // Open only marketplace section
        }
    } else {
        alert('Invalid username or password.');
    }
});