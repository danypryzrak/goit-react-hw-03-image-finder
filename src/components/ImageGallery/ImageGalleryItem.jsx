import css from './ImageGallery.module.css'
import { Component } from 'react'
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {

    state = {
    isShowModal: false,
    };

    toggleModal = () => {
    this.setState(prevState => {
        return {
        isShowModal: !prevState.isShowModal,
        };
    });
    };

    closeModal = () => {
    this.setState(prevState => {
        return {
        isShowModal: false,
        };
    });
    };

    render() {
        return (
        <li className={css.li}>
            <img onClick={this.toggleModal} className={css.image} src={this.props.webformatURL} alt="" />
            {this.state.isShowModal && (
            <Modal
                largeImageURL={this.props.largeImageURL}
                toggleModal={this.toggleModal}
                closeModal={this.closeModal}
            >
                <img src={this.props.largeImageURL} alt="" />
            </Modal>
            )}
        </li>
    )  
}

}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};