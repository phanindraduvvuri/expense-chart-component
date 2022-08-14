import logo from '../images/logo.svg';

const TopCard = () => {
    return (
        <div className="top-container">
            <div className="top-text">
                <p>My balance</p>
                <p className="total-balance">$921.48</p>
            </div>
            <img src={logo} alt="" />
        </div>
    )
}

export default TopCard;
