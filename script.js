function showRegister() {
  document.getElementById('login-box').style.display = 'none';
  document.getElementById('register-box').style.display = 'block';
  clearMessages();
}

function showLogin() {
  document.getElementById('register-box').style.display = 'none';
  document.getElementById('login-box').style.display = 'block';
  clearMessages();
}

function clearMessages() {
  document.getElementById('login-message').textContent = '';
  document.getElementById('register-message').textContent = '';
}

// تسجيل الدخول
function login(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const message = document.getElementById('login-message');

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username] && users[username] === password) {
    // نجاح تسجيل الدخول
    localStorage.setItem("currentUser", username);
    window.location.href = "dashboard.html";
  } else {
    // فشل
    message.style.color = "red";
    message.textContent = "اسم المستخدم أو كلمة السر غير صحيحة!";
  }
}

// إنشاء حساب جديد
function register(event) {
  event.preventDefault();
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  const message = document.getElementById('register-message');

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username]) {
    message.style.color = "red";
    message.textContent = "هذا الاسم مستعمل مسبقًا!";
  } else {
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    message.style.color = "green";
    message.textContent = "تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.";
  }
}
