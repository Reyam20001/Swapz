/* import {useContext} from 'react'; */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
/* import AuthContext from '../../store/authContext'; */
import TextAreaInput from "../../UI/form/TextAreaInput";
import FormInputError from "../../UI/form/FormInputError";
import SelectInput from '../../UI/form/SelectInput';
import TextInput from '../../UI/form/TextInput';

const AddFeedbackForm = (props) =>
{
    const {register, handleSubmit, formState} = useForm();
    const navigate = useNavigate();

    /* const authContext = useContext(AuthContext); */

    const submitHandler = async (formData) =>
    {
        try
        {
            const response = await fetch('http://localhost:5000/evaluations/AddFeedback', 
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json',
                    /* Authorization: `BEARER ${authContext.token}` */
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if(!response.ok)
            {
                throw Error(data.error);
            }

            console.log(data);
            navigate('/AllFeedback');

        }
        catch(err)
        {
            console.log(err.message);
        }
    };

    return(
        <form className="flex flex-col p-10 gap-5 bg-gray-800 w-fit"
              onSubmit = {handleSubmit(submitHandler)}>

                <TextAreaInput label = "Feedback" type = "text" name = "feedback"  register={register} validation = {{required: true}}/>
                {formState.errors.feedback && 
                (
                    <FormInputError>Cannot post an empty feedback.</FormInputError>
                )}

                <TextInput label = "Rating" type = "text" name = "rating"  register={register} validation = {{required: true}}/>
                {formState.errors.feedback && 
                (
                    <FormInputError>Cannot post an empty rating.</FormInputError>
                )}

                <TextInput label = "User ID" type = "text" name = "userId"  register={register} validation = {{required: true}}/>
                {formState.errors.feedback && 
                (
                    <FormInputError>Cannot post an empty User ID.</FormInputError>
                )}

                <button type = "submit"
                        className="bg-white rounded-xl my-4 py-2 px-8 self-center">
                    Add Feedback
                </button>

        </form>
    );
};

export default AddFeedbackForm;