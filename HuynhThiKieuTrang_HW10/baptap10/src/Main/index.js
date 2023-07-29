import Blog from "../Blog";
const Main = (props) => {
    const data = [
        { type: '1', src: 'https://znews-photo.zingcdn.me/w1000/Uploaded/izdmy/2023_05_29/HH_H_Hen_Nie_1.jpeg', title: 'H Hen Niê dẫn đầu Carpet Check tuần nhờ trang phục hiệu ứng xuyên thấu' },
        { type: '1', src: 'https://znews-photo.zingcdn.me/w210/Uploaded/pwivovlb/2022_10_12/vneid.jpeg', title: '5 thắc mắc về tài khoản định danh điện tử và ứng dụng VNeID ' },
        { type: '1', src: 'https://znews-photo.zingcdn.me/w210/Uploaded/ycgvppwi/2023_05_29/e5bca0e4b8b9e5b3b0e6b4aae6aca3e59088e4bd93e9ab98e8b083e69292e78b97e7b2ae_e4b8bbe68c81e4baba1e8b59ee6a8a1e88c83e5a4abe5a6bbe7bd91e78b82.jpg', title: 'Vợ chồng Hồng Hân bị tẩy chay' },
        { type: '1', src: 'https://znews-photo.zingcdn.me/w210/Uploaded/gtnvzv/2023_05_29/4_37_.jpg', title: '6 người đàn ông ngộ độc sau khi ăn trứng cá sấu hỏa tiễn' },
        { type: '1', src: 'https://znews-photo.zingcdn.me/w210/Uploaded/wobjcak/2023_05_29/2023_05_28T155935Z_1924603738_UP1EJ5S18FAQN_RTRMADP_3_SOCCER_ENGLAND_LEI_WHU_REPORT.JPG', title: 'Hành trình lụn bại của Leicester diễn ra thế nào' },
        {
            type: '2',
            src: 'https://znews-photo.zingcdn.me/w1000/Uploaded/spluaaa/2023_05_27/00microsoft_smith_03_1_1832_jumb.jpg',
            title: 'Chủ tịch Microsoft nêu mối nguy lớn nhất của AI',
            content: 'Ông khẳng định cần phải có ai đó chịu trách nhiệm cho các nội dung AI để bảo vệ con người trước những nguồn thông tin giả mạo, tránh bị lừa đảo bởi công nghệ cao.',
            li: 'Dấu hiệu nhận biết cuộc gọi deepfake lừa tiền'
        },
        { type: '3', src: 'https://znews-photo.zingcdn.me/w480/Uploaded/ifyyy/2023_05_28/AMTR454GB3UG4TKOWRU3YTNZ7Q.jpg', title: '5 điểm mấu chốt trong thỏa thuận tránh vỡ nợ của Mỹ' },
        { type: '3', src: 'https://znews-photo.zingcdn.me/w480/Uploaded/aohunkx/2022_10_31/tien_mat_seabank_zing_1.JPG', title: 'ĐBQH: Ngân hàng hãy nghĩ đến tín nghĩa với doanh nghiệp lúc khó khăn' }
    ]
    const dataType1 = data.filter(item => item.type === "1");
    const dataType2 = data.filter(item => item.type === "2");
    const dataType3 = data.filter(item => item.type === "3")
    return <div className='container'>
        <div>

            <div className='weather'>
                <ul className='ul' type="none">
                    <div className="logo">
                        <img src="https://static-znews.zingcdn.me/images/stat.svg" alt="logo" />
                    </div>

                    <li>
                        # Bầu cử Thái Lan
                    </li>
                    <li className='weather1'>
                        <span style={{ fontWeight: 'bold' }}>TP. Hồ Chí Minh</span>  28°C/ 26-30°C
                        <img src="	https://static-znews.zingcdn.me/images/icons/weather/v2/hazy.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
        <div className='row'>
            <div className='col-4'>
                {
                    dataType1.map((item, index) => <Blog type={item.type} src={item.src} title={item.title} content={item.content} li={item.li} />)
                }
            </div>
            <div className='col-8'>
                <div className='row'>
                    <div className='col-8'>
                        {
                            dataType2.map((item, index) => <Blog type={item.type} src={item.src} title={item.title} content={item.content} li={item.li} />)
                        }
                    </div>
                    <div className='col-4'>
                        {
                            dataType3.map((item, index) => <Blog type={item.type} src={item.src} title={item.title} content={item.content} li={item.li} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Main