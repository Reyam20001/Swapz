import React from 'react'
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextAreaInput from '../../UI/form/TextAreaInput';
import TextInput from '../../UI/form/TextInput';

const AddExchangeForm = (props) => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/exchange/insert', {
        method: 'POST',
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
      navigate('/exchange');
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
        label="Title"
        type="text"
        name="title"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.title && (
        <FormInputError>Item title must not be empty</FormInputError>
      )}

<TextInput
        label="Category"
        type = "text"
        name="category"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.category && (
        <FormInputError>Category must not be empty.</FormInputError>
      )}

      <TextAreaInput
        label="Description"
        name="description"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.description && (
        <FormInputError>Item description must not be empty</FormInputError>
      )}

      <TextInput
        label="City"
        type="text"
        name="city"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.city && (
        <FormInputError>City must not be empty.</FormInputError>
      )}

      <TextInput
        label="Image URL"
        type="text"
        name="image"
        validation={{ required: true }}
        register={register}
      />

      <TextInput
        label="Added at"
        type="Date"
        name="addedAt"
        register={register}
        validation={{ required: true}}
      />
      {formState.errors.addedAt && (
        <FormInputError>Item date must be valid</FormInputError>
      )}

      <TextAreaInput
        label="Comment"
        name="comment"
        register={register}
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
        Add Item
      </button>
    </form>
  );
};

export default AddExchangeForm;
