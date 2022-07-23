import PropTypes from "prop-types";
import './appButton.css';

const AppButton = props => {
    const {handleClick, label, disabled} = props;
    return <button className='button-form' onClick={handleClick} disabled={disabled}>{label}</button>
}
AppButton.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}
export default AppButton;
