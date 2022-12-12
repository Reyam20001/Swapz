// //import { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// // import { Navigate } from 'react-router-dom';
// import FormInputError from '../../UI/card/form/FormInputError';
// import TextAreaInput from '../../UI/card/form/TextAreaInput';
// import TextInput from '../../UI/card/form/TextInput';

// const AddOfferForm = (props) => {
//   const { register, handleSubmit, formState } = useForm();
//   const navigate = useNavigate();

//   //the customer clicks on add offer button to add a price to negotiate
//   const params = useParams();
//   const item_ID = params.itemID;

//   const submitHandler = async (formData) => {
//     try {
//       const response = await fetch(`http://localhost:5000/resell/negotiate/${item_ID}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
       
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw Error(data.error);
//       }

//       console.log(data);
//       navigate('/resell');
     
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   return (
//     <form
//       className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
//       onSubmit={handleSubmit(submitHandler)}
//     >
//       <TextInput
//         label="User ID"
//         type="Number"
//         name="userID"
//         register={register}
//         validation={{ required: true }}
//       />
//       {formState.errors.name && (
//         <FormInputError>user ID name must not be empty</FormInputError>
//       )}

//       <TextAreaInput
//         label="Price"
//         type = "number"
//         name="price"
//         register={register}
//         validation={{ required: true }}
//       />
//       {formState.errors.prce && (
//         <FormInputError>Price must not be empty</FormInputError>
//       )}

//       <button
//         type="submit"
//         className="bg-white rounded-xl my-4 py-2 px-8 self-center"
//       >
//         Add Item
//       </button>
//     </form>
//   );
// };

// export default AddOfferForm;
//import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextAreaInput from '../../UI/form/TextAreaInput';
import TextInput from '../../UI/form/TextInput';
//cors
const AddOfferForm = (props) => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const params = useParams();
  const item_ID = params.itemID;

  const submitHandler = async (formData) => {
    try {
      const response = await fetch( `http://localhost:5000/resell/negotiate/${item_ID}`, {
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
      navigate('/resell');
     
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
        label="userID"
        type="number"
        name="userID"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Item name must not be empty</FormInputError>
      )}

      {/* <TextAreaInput
        label="Description"
        name="description"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.description && (
        <FormInputError>Item description must not be empty</FormInputError>
      )} */}

      <TextInput
        label="Price"
        type="number"
        name="price"
        register={register}
        validation={{ required: true, min: 0 }}
      />
      {formState.errors.price && (
        <FormInputError>Item price must be greater than 0.</FormInputError>
      )}

      {/* <TextInput
        label="Image URL"
        type="text"
        name="imgURL"
        register={register}
      /> */}

      {/* <TextInput
        label="Price"
        type="number"
        name="price"
        register={register}
        validation={{ required: true, min: 0 }}
      /> */}
      {/* {formState.errors.price && (
        <FormInputError>Item price must be greater than 0.</FormInputError>
      )} */}
      
      {/* <TextInput
        label="Added at"
        type="Date"
        name="addedAt"
        register={register}
        validation={{ required: true, min: 0 }}
      /> */}
      {/* {formState.errors.addedAt && (
        <FormInputError>Item date must be greater than 0.</FormInputError>
      )} */}
    
    {/* <TextInput
        label="Status"
        type="text"
        name="status"
        register={register}
        validation={{ required: true, min: 0 }}
      />
      {formState.errors.status && (
        <FormInputError>status must be entered</FormInputError>
      )} */}
      
      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Add
      </button>
    </form>
  );
};

export default AddOfferForm;
