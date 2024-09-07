import { FC } from "react";
type inputType = {
  label: string;
  id: string;
  placeholder: string;
}
const InputField: FC<inputType> = ({ label, id, placeholder }) => {
  return (
    <div>
      <form className="mb-4">
      <label className="block text-gray-500 text-xs font-bold mb-1" htmlFor={id}>{label}</label>
      <input 
      className="border rounded text-gray-700 py-2 px-3 shadow appearance-none w-full"
      type="text"
      id={id}
      placeholder={placeholder} 
      />
      </form>
    </div>
  )
}
const AddContact = () => {
  return (
    <div className="bg-gray-200 shadow-md rounded pt-6 mb-4 px-8">
      <InputField label='Name' id='name' placeholder='Name...' />
      <InputField label='Email' id='email' placeholder='Email...' />
      <InputField label='Phone' id='phone' placeholder='Phone...' />
      <button className="bg-blue-500 hover:bg-blue-800 text-white rounded py-2 px-4 font-bold mb-4">Create</button>
    </div>
  )
}

export default AddContact
