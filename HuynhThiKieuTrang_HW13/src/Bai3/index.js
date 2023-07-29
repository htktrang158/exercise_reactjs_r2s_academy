import React, { useState } from 'react';

const TinhDienTichHinh = () => {
  const [loaiHinh, setLoaiHinh] = useState('');
  const [chieuDai, setChieuDai] = useState(0);
  const [chieuRong, setChieuRong] = useState(0);
  const [duongCao, setDuongCao] = useState(0);
  const [canhDay, setCanhDay] = useState(0);
  const [dienTich, setDienTich] = useState(0);
 

  const tinhDienTich = () => {
    let dienTich = 0;

    if (loaiHinh === 'hinhVuong') {
      dienTich = tinhDienTichHinhVuong();
    } else if (loaiHinh === 'hinhChuNhat') {
      dienTich = tinhDienTichHinhChuNhat();
    } else if (loaiHinh === 'hinhTamGiac') {
      dienTich = tinhDienTichHinhTamGiac();
    }

    setDienTich(dienTich);
  };

  const tinhDienTichHinhVuong = () => {
    return chieuDai ** 2;
  };

  const tinhDienTichHinhChuNhat = () => {
    return chieuDai * chieuRong;
  };

  const tinhDienTichHinhTamGiac = () => {
    return (canhDay * duongCao) / 2;
  };

  const capNhatLoaiHinh = (event) => {
    setLoaiHinh(event.target.value);
  };

  const capNhatChieuDai = (event) => {
    setChieuDai(Number(event.target.value));
  };

  const capNhatChieuRong = (event) => {
    setChieuRong(Number(event.target.value));
  };

  const capNhatChieuCao = (event) => {
    setDuongCao(Number(event.target.value));
  };
  const capNhatCanhDay = (event) => {
    setCanhDay(Number(event.target.value));
  };

  return (
    <div>
      <h1>3. Tính diện tích các hình</h1>
      <select value={loaiHinh} onChange={capNhatLoaiHinh}>
        <option value="">Chọn hình cần tính</option>
        <option value="hinhVuong">Hình vuông</option>
        <option value="hinhChuNhat">Hình chữ nhật</option>
        <option value="hinhTamGiac">Hình tam giác</option>
      </select>
      {loaiHinh === 'hinhVuong' && (
        <div>
          <label>Cạnh:</label>
          <input type="number" value={chieuDai} onChange={capNhatChieuDai} />
        </div>
      )}
      {loaiHinh === 'hinhChuNhat' && (
        <div>
          <label>Chiều dài:</label>
          <input type="number" value={chieuDai} onChange={capNhatChieuDai} />
          <label>Chiều rộng:</label>
          <input type="number" value={chieuRong} onChange={capNhatChieuRong} />
        </div>
      )}
      {loaiHinh === 'hinhTamGiac' && (
        <div>
          <label>Cạnh đáy:</label>
          <input type="number" value={canhDay} onChange={capNhatCanhDay} />
          <label>Đường cao:</label>
          <input type="number" value={duongCao} onChange={capNhatChieuCao } />
        </div>
      )}
      <button onClick={tinhDienTich}>Tính Diện Tích</button>
      <div>Diện tích: {dienTich}</div>
    </div>
  );
};

export default TinhDienTichHinh;
