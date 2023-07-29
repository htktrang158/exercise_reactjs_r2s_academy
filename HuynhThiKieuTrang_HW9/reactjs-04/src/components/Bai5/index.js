
function CheckPasswordComponent() {
  const checkPassword = () => {
    const password = document.getElementById('passwordInput').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (passwordRegex.test(password)) {
      alert('Mật khẩu hợp lệ!');
    } else {
      alert('Mật khẩu không hợp lệ!');
    }
  };

  return (
    <div>
      <input type="password" id="passwordInput" />
      <button onClick={checkPassword}>Kiểm tra</button>
    </div>
  );
}

export default CheckPasswordComponent;