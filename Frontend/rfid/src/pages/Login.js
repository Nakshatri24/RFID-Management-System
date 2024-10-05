import React from 'react';
import '../components/Login.css';

function Sample() {
  return (
<body>
    <header>
        <h1>RFID Management System</h1>
    </header>
    <main>
    <div className='bg'>
    <h1>Login</h1>
        
        <section className="login">
            <form action="/login" method="POST">
                <div class="form-group">
                    <label for="userId">User ID:</label>
                    <input type="text" id="userId" name="userId" required />
                </div>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div class="form-group">
                    <label for="role">Role:</label>
                    <input type="text" id="role" name="role" required />
                </div>
                <input type="hidden" name="redirect" value="index.html" /> 
                <a href='/user'>Login</a>
            </form>
            
        </section>
        </div>
    </main>
    
    <footer >
        <p>&copy; 2024 RFID Management System</p>
    </footer>
</body>
  )
}

export default Sample