import css from './SearchBar.module.css'
import PropTypes from 'prop-types';

export const SearchBar = ({onSubmit}) => {
    return (
    <header className={css.header}>
        <form className={css.form} onSubmit={onSubmit}>
            <button type="submit" className={css.button}>
            <span >Search</span>
            </button>

            <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            name='searchInput'
            placeholder="Search images and photos"
            />
        </form>
    </header>
    )
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}


