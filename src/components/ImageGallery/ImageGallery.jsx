import css from './ImageGallery.module.css'
import { ImageGalleryItem } from './ImageGalleryItem'
import PropTypes from 'prop-types';

export const ImageGallery = ({images}) => {
    return (
        <ul className={css.list}>
            {images.map(image => {
                return <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
                />
        })}
            
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.array
}
