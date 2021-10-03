import './Product.css'
export default function Product({product: {id, title, description, productImageUrl, submitterAvatarUrl, votes}, onVote}) {
    return (
        <div className="item">
            <div className="image">
                <img src={productImageUrl} alt="Aqua" />
            </div>
            <div className="content">
                <div className="voting">
                    <button onClick={() => onVote(id)}>+1</button>
                    <span> {votes === 1 ? votes + ' vote' : votes + ' votes'}</span>
                </div>
                <div className="description">
                    <a href="/">{title}</a>
                    <p>{description}</p>
                </div>
                <div className="extra">
                    <span>Submitted by:</span>
                    <img src={submitterAvatarUrl} alt="Daniel"/>
                </div>
            </div>
        </div>
    )
}