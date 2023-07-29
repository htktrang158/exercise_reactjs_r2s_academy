
function CheckPhoneComponent() {
  const checkPhoneNumber = () => {
    const phoneNumber = document.getElementById('phoneInput').value;
    const phoneNumberRegex = /^(098|094|096)\d{7}$/;

    if (phoneNumberRegex.test(phoneNumber)) {
      alert('Số điện thoại hợp lệ!');
    } else {
      alert('Số điện thoại không hợp lệ!');
    }
  };
  return (
    <div>
      <input type="text" id="phoneInput" />
      <button onClick={checkPhoneNumber}>Kiểm tra</button>
    </div>
  );
}

export default CheckPhoneComponent;

