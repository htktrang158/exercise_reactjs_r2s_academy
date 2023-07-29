import React, { useState } from 'react';

function SoNguyenTo() {
  const [soNhap, setSoNhap] = useState('');
  const [soNguyenTo, setSoNguyenTo] = useState([]);

  const capNhatSoNhap = (event) => {
    setSoNhap(event.target.value);
  };

  const laySoNguyenTo = () => {
    const so = parseInt(soNhap);

    if (isNaN(so) || so < 2) {
      alert('Vui lòng nhập số lớn hơn 2.');
      return;
    }

    const soNT = timSoNguyenTo(so);

    setSoNguyenTo(soNT);
  };

  const timSoNguyenTo = (soMax) => {
    const soNT = [];

    for (let so = 2; so < soMax; so++) {
      if (laSoNguyenTo(so)) {
        soNT.push(so);
      }
    }

    return soNT;
  };

  const laSoNguyenTo = (so) => {
    if (so < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(so); i++) {
      if (so % i === 0) {
        return false;
      }
    }
  
    return true;
  };
  

  return (
    <div>
      <h1>2. Kiểm tra số nhập vào có bao nhiêu số nguyên tố trước nó </h1>
      <input type="number" value={soNhap} onChange={capNhatSoNhap} />
      <button onClick={laySoNguyenTo}>Lấy Số Nguyên Tố</button>
      <div> Những số nguyên tố đứng trước số {soNhap} là : {soNguyenTo.join(', ')}</div>
    </div>
  );
}

export default SoNguyenTo;
