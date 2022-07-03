import {addAllPhotos} from "../reducers/actions/actions";

export const fetchPhotos = () => {
    return (dispatch) => {
        fetch(`https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043`)
            .then((response) => response.json())
            .then((json) => dispatch(addAllPhotos(json)));
    };
};