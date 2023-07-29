import React, { useState, useEffect } from 'react';

const DongHoThucTe = () => {
  const [thoiGian, setThoiGian] = useState(new Date()); 

  useEffect(() => {
  
    const capNhatDongHo = setInterval(() => {
      const thoiGianHienTai = new Date();
      setThoiGian(thoiGianHienTai);
    }, 1000);

    return () => {
      clearInterval(capNhatDongHo);
    };
  }, []);

  const dinhDangThoiGian = thoiGian.toLocaleTimeString();

  return (
    <div>
      <h1>1. Đồng hồ đếm thời gian realtime</h1>
      <h2>{dinhDangThoiGian}</h2>
    </div>
  );
};

export default DongHoThucTe;
