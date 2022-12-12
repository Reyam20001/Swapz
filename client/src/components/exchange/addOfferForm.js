import React from 'react'
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextAreaInput from '../../UI/form/TextAreaInput';
import TextInput from '../../UI/form/TextInput';

const AddOfferForm = (props) => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/exchange/offer/:itemID', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }

      console.log(data);
      navigate('/exchange/item/:itemID');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextInput
        label="User ID"
        type="text"
        name="userID"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.userID && (
        <FormInputError>User ID must be valid</FormInputError>
      )}
      <TextInput
        label="Item ID"
        type="text"
        name="itemID"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.itemID && (
        <FormInputError>Item ID must be valid</FormInputError>
      )}

      <TextAreaInput
        label="Comment"
        name="comment"
        register={register}
        validation={{ required: true }}
      />

        <TextInput
        label="Status"
        type="text"
        name="status"
        register={register}
        validation={{ required: true}}
      />
      {formState.errors.status && (
        <FormInputError>status must be entered</FormInputError>
      )}

      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Add Offer
      </button>
    </form>
  );
};

export default AddOfferForm;
