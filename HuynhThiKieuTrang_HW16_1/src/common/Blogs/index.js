const Blogs = (props) => {
    const blogLeft = <div style={{ display: 'flex' }}>
        <div className="item">
        <img width={120} src={props.srcImg} alt="" />
        <span style={{ marginLeft: 8 }}>{props.title}</span>
        </div>
    </div>
    const blogCenter = <div>
        <img src={props.srcImg} style={{ width: '100%' }} alt="" />
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <li>{props.li}</li>
    </div>
    const blogRight = <div>
        <img src={props.srcImg} style={{ width: '100%' }} alt="" />
        <span style={{ marginLeft: 8 }}>{props.title}</span>
    </div>
    return props.type === 1 ? blogLeft : props.type === 2 ? blogCenter : blogRight
}
export default Blogs

