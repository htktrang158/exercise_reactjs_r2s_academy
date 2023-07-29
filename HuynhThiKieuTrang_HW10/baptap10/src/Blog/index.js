const Blog = (props) => {
    console.log(props);

    if (props.type === '1') {
        return (
            <div className="type1">
                <img src={props.src} alt="" />
                <h5>{props.title}</h5>
            </div>
        );
    } else if (props.type === '2') {
        return (
            <div className='type2'>
                <img src={props.src} alt='' />
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <li>{props.li}</li>
            </div>
        );
    } else {
        return (
            <div className='type3'>
                <img src={props.src} alt='' />
                <h5>{props.title}</h5>
            </div>
        );
    }
};

export default Blog;
