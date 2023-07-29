
function CheckEmailComponent() {
  const checkEmail = () => {
    const email = document.getElementById('emailInput').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
      alert('Email hợp lệ!');
    } else {
      alert('Email không hợp lệ!');
    }
  };
  return (
    <div>
      <input type="text" id="emailInput" />
      <button onClick={checkEmail}>Kiểm tra</button>
    </div>
  );
}
export default CheckEmailComponent;
