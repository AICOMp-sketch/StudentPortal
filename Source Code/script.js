// Show/hide password functionality
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');
        
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
        });
        
        // Form submission
        const loginForm = document.getElementById('loginForm');
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const studentId = document.getElementById('studentId').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Here you would typically send this data to your backend for authentication
            console.log({
                studentId,
                password,
                rememberMe
            });
            
            // Show loading state
            const submitBtn = loginForm.querySelector('[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // This is just a simulation - in a real app you would handle the actual login response
                alert('Login successful! (This is a demo - no actual authentication occurred)');
                
                // Reset button
                submitBtn.innerHTML = 'Sign In';
                submitBtn.disabled = false;
                
                // Redirect to dashboard in a real app
                // window.location.href = '/dashboard';
            }, 1500);
        });
        
        // Forgot password click handler
        document.getElementById('forgotPassword').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Password reset link will be sent to your registered email.');
        });
        
        // Register new account click handler
        document.getElementById('registerNow').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecting to registration page...');
        });
        
        // Add subtle animation to social buttons on hover
        const socialBtns = document.querySelectorAll('.social-btn');
        socialBtns.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                if (icon.classList.contains('fa-google')) {
                    this.style.backgroundColor = '#DB443710';
                } else if (icon.classList.contains('fa-microsoft')) {
                    this.style.backgroundColor = '#0078D710';
                } else if (icon.classList.contains('fa-apple')) {
                    this.style.backgroundColor = '#00000010';
                }
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'white';
            });
        });
        
        // Add focus styles dynamically
        const formControls = document.querySelectorAll('.form-control');
        formControls.forEach(control => {
            control.addEventListener('focus', function() {
                this.parentElement.querySelector('label').style.color = 'var(--primary)';
            });
            
            control.addEventListener('blur', function() {
                this.parentElement.querySelector('label').style.color = '#495057';
            });
        });
