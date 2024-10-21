import './headerImage.scss'

const HeaderImage = (props) => {
    return <div className="header-image" style={{backgroundColor:'black', backgroundImage: `url(${props.image})`}}>
        <h1>{props.title}</h1>
    </div>
}

export default HeaderImage;

