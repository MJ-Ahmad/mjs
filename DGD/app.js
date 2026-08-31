const DASHBOARD_PASSWORD = '23542';
const loginShell = document.getElementById('loginShell');
const dashboardShell = document.getElementById('dashboardShell');
const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');

function unlockDashboard() {
  loginShell.classList.add('hidden');
  dashboardShell.classList.remove('hidden');
  passwordInput.value = '';
  loginError.textContent = '';
}

function lockDashboard() {
  dashboardShell.classList.add('hidden');
  loginShell.classList.remove('hidden');
  passwordInput.value = '';
  loginError.textContent = '';
  passwordInput.focus();
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === DASHBOARD_PASSWORD) {
    unlockDashboard();
    return;
  }

  loginError.textContent = 'Incorrect password. Please try again.';
  passwordInput.focus();
});

logoutBtn.addEventListener('click', lockDashboard);
passwordInput.focus();
