document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 간단한 로그인 로직 (백엔드 통신 대신 콘솔 출력)
  if (username === 'testuser' && password === 'password123') {
    alert('Welcome, ' + username + '!');
    history.back();
  } else {
    alert('Invalid username or password.');
  }
});
