import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options,  onLeaveFeedback }) => {

    return (
        <>
    <List>
        {options.map(name => { 
            return (
            <li key={name}>
                <Button name={name} onClick={onLeaveFeedback} type="button">{name}
                </Button>
            </li>
            )})}
    </List></>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}