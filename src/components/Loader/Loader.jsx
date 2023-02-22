import { ColorRing } from 'react-loader-spinner'


export const Loader = () => {
    return (
        <ColorRing
        visible={true}
        height="400"
        width="400"
        ariaLabel="blocks-loading"
        wrapperStyle={{ marginLeft: '30%'}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
    )
}