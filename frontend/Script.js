async function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
                confirmPassword
            })
        });

        if (response.ok) {
            console.log('Registration successful');
            // You can redirect to a success page or perform other actions here
        } else {
            console.error('Registration failed');
            // Handle the error and provide feedback to the user
        }
    } catch (error) {
        console.error('Error during registration:', error);
    }
}
