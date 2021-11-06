import axios from 'axios';

import {
    CONTACT_FORM_REQUEST,
    CONTACT_FORM_SUCCESS ,
    CONTACT_FORM_FAIL,
} from '../constants/ContactFormConstants';

export const submitForm = ({firstName, lastName, email, mobileNumber, query}) => async (dispatch) => {
    try{
        dispatch({ type: CONTACT_FORM_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'https://api.trichtertje.nl/api/v1/event/contactInfo/submitContactInfo',
            {firstName, lastName, email, mobileNumber, query},
            config
        )

        console.log('Data : ', data)

        dispatch({ 
            type: CONTACT_FORM_SUCCESS,
            payload: data
        })

    } catch (error){
        console.error(error);
        console.log("this is error in contact Actions", error);
        dispatch({ 
            type: CONTACT_FORM_FAIL,
            payload: error.response && error.response.data
                ? error.response.data
                : error.message
        })
    }
}