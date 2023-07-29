
import './App.css';
import CheckPhoneComponent from './components/Bai2';
import CheckEmailComponent from './components/Bai3';
import ArrNumberComponent from './components/Bai4';
import CheckPasswordComponent from './components/Bai5';
function App() {
  return (
    <div>
      <h2>Kiểm tra số điện thoại</h2>
      <CheckPhoneComponent />

      <h2>Kiểm tra địa chỉ email</h2>
      <CheckEmailComponent />
      <h2>Danh sách số từ 1 đến 50 (loại bỏ số 4, 16, 21 và 36)</h2>

      < ArrNumberComponent />
      <h2>Kiểm tra mật khẩu</h2>
      <CheckPasswordComponent />
    </div>
  );
}

export default App;
