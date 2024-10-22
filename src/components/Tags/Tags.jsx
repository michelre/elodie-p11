import './tags.scss';


const Tags = ({tags }) => {
    return (
        <div className="tags">
            {tags.map((tag, idx) => (
                <span key={`tag-${idx}`} className="tag">{tag}</span>
            ))}
        </div>
    );
};

export default Tags;