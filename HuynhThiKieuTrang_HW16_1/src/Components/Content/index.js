import React, { useState } from 'react';
import Blogs from '../../common/Blogs';
import { Button, Modal } from 'antd';

const arrBlogs = [
  {
    img: 'https://znews-photo.zingcdn.me/w210/Uploaded/rotnba/2023_05_24/e68e9f02ffc0219e78d1.jpg',
    title: 'Nhân viên và sếp không ai chịu ai',
    type: 1,
    content: 'Phát biểu vào chiều 26/5, Thứ trưởng Bộ Ngoại giao Đỗ Hùng Việt cho biết Việt Nam đặt mục tiêu có 40% lượng điện tiêu thụ trong nước đến từ nguồn năng lượng tái tạo vào năm 2030.',
    li: 'Đề nghị G7 hỗ trợ Việt Nam trở thành trung tâm năng lượng tái tạo',
    isShow: true
  },
  {
    img: 'https://znews-photo.zingcdn.me/w210/Uploaded/pnbcuhbatgunb/2023_05_30/fbd9daa9_9462_45c7_b920_51debb55cc0a_1.jpg',
    title: 'Diễn viên Gong Hyo Jin: Tôi quá xấu',
    type: 1,
    content: 'Phát biểu vào chiều 26/5, Thứ trưởng Bộ Ngoại giao Đỗ Hùng Việt cho biết Việt Nam đặt mục tiêu có 40% lượng điện tiêu thụ trong nước đến từ nguồn năng lượng tái tạo vào năm 2030.',
    li: 'Đề nghị G7 hỗ trợ Việt Nam trở thành trung tâm năng lượng tái tạo',
    isShow: true
  },
  {
    img: 'https://znews-photo.zingcdn.me/w210/Uploaded/bfjysesfzyr/2023_05_30/vubin_1.jpg',
    title: 'Lâm Đồng xem xét thu hồi 15.529 m2 đất dự án của Trung Nguyên Legend',
    type: 1,
    content: 'Phát biểu vào chiều 26/5, Thứ trưởng Bộ Ngoại giao Đỗ Hùng Việt cho biết Việt Nam đặt mục tiêu có 40% lượng điện tiêu thụ trong nước đến từ nguồn năng lượng tái tạo vào năm 2030.',
    li: 'Đề nghị G7 hỗ trợ Việt Nam trở thành trung tâm năng lượng tái tạo',
    isShow: true
  },
  {
    img: 'https://znews-photo.zingcdn.me/w210/Uploaded/bpivpawv/2023_01_13/2023_chelseas_joao_felix_reacts_788090216_1.jpg',
    title: 'Chelsea trả Joao Felix về Atletico',
    type: 1,
    content: 'Phát biểu vào chiều 26/5, Thứ trưởng Bộ Ngoại giao Đỗ Hùng Việt cho biết Việt Nam đặt mục tiêu có 40% lượng điện tiêu thụ trong nước đến từ nguồn năng lượng tái tạo vào năm 2030.',
    li: 'Đề nghị G7 hỗ trợ Việt Nam trở thành trung tâm năng lượng tái tạo',
    isShow: true
  },
  {
    img: 'https://znews-photo.zingcdn.me/w210/Uploaded/wobjcak/2023_05_30/sar.jpeg',
    title: 'CĐV MU kêu gọi lãnh đạo chiêu mộ Van der Sar',
    type: 1,
    content: 'Phát biểu vào chiều 26/5, Thứ trưởng Bộ Ngoại giao Đỗ Hùng Việt cho biết Việt Nam đặt mục tiêu có 40% lượng điện tiêu thụ trong nước đến từ nguồn năng lượng tái tạo vào năm 2030.',
    li: 'Đề nghị G7 hỗ trợ Việt Nam trở thành trung tâm năng lượng tái tạo',
    isShow: true,
  },
  {
    img: 'https://znews-photo.zingcdn.me/w1000/Uploaded/qxjwpprjv/2023_05_30/thahoadang_.jpeg',
    title: 'Người dân TP.HCM đổ về chùa Pháp Hoa thả hoa đăng mừng lễ Phật Đản',
    type: 2,
    content: 'Chùa Pháp Hoa được trang trí nhiều hoa đèn rực rỡ và đón hàng chục nghìn người dân TP.HCM đổ về tham dự hoạt động thả hoa đăng mừng lễ Phật Đản.',
    li: 'Người dân TP.HCM chen chúc đi thả hoa đăng mừng Phật Đản',
    isShow: true
  },

  {
    img: 'https://znews-photo.zingcdn.me/w480/Uploaded/jopluat/2023_02_15/Van_Hau.jpg',
    title: 'Văn Hậu và CAHN bất lực dù có 11 phút bù giờ',
    type: 3,
    content: 'Phát biểu vào chiều 26/5, Thứ trưởng Bộ Ngoại giao Đỗ Hùng Việt cho biết Việt Nam đặt mục tiêu có 40% lượng điện tiêu thụ trong nước đến từ nguồn năng lượng tái tạo vào năm 2030.',
    li: 'Đề nghị G7 hỗ trợ Việt Nam trở thành trung tâm năng lượng tái tạo',
    isShow: true
  },

  {
    img: 'https://znews-photo.zingcdn.me/w480/Uploaded/asfzyreslz2/2023_03_19/1x_1.jpg',
    title: 'USD bị bán tháo, giá vàng tăng vọt',
    type: 3,
    content: 'Phát biểu vào chiều 26/5, Thứ trưởng Bộ Ngoại giao Đỗ Hùng Việt cho biết Việt Nam đặt mục tiêu có 40% lượng điện tiêu thụ trong nước đến từ nguồn năng lượng tái tạo vào năm 2030.',
    li: 'Đề nghị G7 hỗ trợ Việt Nam trở thành trung tâm năng lượng tái tạo',
    isShow: true
  },


]

function Content(props) {
  const [showType1, setShowType1] = useState(true);
  const [showType2, setShowType2] = useState(true);
  const [showType3, setShowType3] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState(1);
  const [imageUrl, setImageUrl] = useState('');
  const [selectedOption, setSelectedOption] = useState('');



  const handleCreate = () => {
    const newBlog = {
      img: imageUrl, // use the entered image URL
      title: title,
      type: type,
      content: description,
      li: 'Lorem ipsum',
      isShow: true
    };

    arrBlogs.push(newBlog);
    setTitle('');
    setDescription('');
    setType(1);
    setImageUrl('');
  };


  const handleDelete = () => {
    const updatedBlogs = arrBlogs.filter(item => item.type !== parseInt(selectedOption));
    arrBlogs.length = 0; // Clear the original array
    arrBlogs.push(...updatedBlogs);
    setSelectedOption(''); // Reset the selected option
  };





  const arrLeft = arrBlogs.filter(
    item => item.type === 1 && item.isShow && showType1
  );
  const arrCenter = arrBlogs.filter(
    item => item.type === 2 && item.isShow && showType2
  );
  const arrRight = arrBlogs.filter(
    item => item.type === 3 && item.isShow && showType3
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <button onClick={() => setShowType1(!showType1)}>
            Show Type 1
          </button>

          {arrLeft.map((item, index) => (
            <Blogs srcImg={item.img} title={item.title} type={item.type} />
          ))}
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-8">
              <button onClick={() => setShowType2(!showType2)}>
                Show Type 2
              </button>

              {arrCenter.map((item, index) => (
                <Blogs
                  srcImg={item.img}
                  title={item.title}
                  type={item.type}
                  content={item.content}
                  li={item.li}
                />
              ))}
            </div>
            <div className="col-4">
              <button onClick={() => setShowType3(!showType3)}>
                Show Type 3
              </button>

              {arrRight.map((item, index) => (
                <Blogs
                  srcImg={item.img}
                  title={item.title}
                  type={item.type}
                  content={item.content}
                  li={item.li}
                />
              ))}
            </div>
          </div>
        </div>
      </div>



      <div className='delete'>
        <div>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">Select Type 1 Blog</option>
            {arrLeft.map((item, index) => (
              <option key={index} value={item.type}>{item.title}</option>
            ))}
          </select>

          <button onClick={handleDelete}>Delete</button>

        </div>

        <div> <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Select Type 2 Blog</option>
          {arrCenter.map((item, index) => (
            <option key={index} value={item.type}>{item.title}</option>
          ))}
        </select>
          <button onClick={handleDelete}>Delete</button></div>
        <div> <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Select Type 3 Blog</option>
          {arrRight.map((item, index) => (
            <option key={index} value={item.type}>{item.title}</option>
          ))}
        </select>
          <button onClick={handleDelete}>Delete</button></div>

      </div>
      <Button type="primary" onClick={showModal}>
        Create
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            value={type}
            onChange={(e) => setType(parseInt(e.target.value))}
          >
            <option value={1}>Type 1</option>
            <option value={2}>Type 2</option>
            <option value={3}>Type 3</option>
          </select>

        </div>
      </Modal>
    </div>
  );
}

export default Content;

