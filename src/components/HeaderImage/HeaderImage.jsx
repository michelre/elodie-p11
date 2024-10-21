import './headerImage.scss'

const HeaderImage = (props) => {
    return <div className="header-image" style={{backgroundImage: `url(${props.image})`}}>
        <h1>{props.title}</h1>
    </div>
}

export default HeaderImage;

