import css from './Button.module.css'
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
    return (
        <button className={css.button} type="button" onClick={loadMore}>Load More</button>
    )
}

Button.propTypes = {
    loadMore: PropTypes.func.isRequired
}