import PropTypes from 'prop-types';
import { FeedbackBtn, List } from './FeedbackOptions.styled.jsx';

export const FeedbackOptions = ({ options, onBtnClick }) => (
  <List>
    {options.map(option => (
      <FeedbackBtn type="button" key={option} onClick={() => onBtnClick(option)}>
        {option}
      </FeedbackBtn>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

