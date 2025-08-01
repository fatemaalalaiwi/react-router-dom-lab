import { useState } from 'react';
import { useFormState } from 'react-dom';
import { useNavigate } from 'react-router';

const initialmail = 
{
  _id: 0,
  boxSize: '',
  boxOwner: '',
};
const MailBoxForm = (props) => {
  const [formData, setFormData] = useState(initialmail);
  const navigate = useNavigate();
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addBox(formData);
    setFormData(initialmail);
    navigate('/mailBoxes');
  };
  const handleChange = ({ target }) => {
   
    setFormData({ ...formData, [target.name]: target.value });
  };

  

 console.log('Form Data', formData)

  return (
    <main>
      <h2 style={{color: '#4c6daaff' , display: 'flex',
        justifyContent: 'center', alignItems: 'center'}}>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder"> Enter a Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.name}
          onChange={handleChange}
          required
        />
       
        <label htmlFor="size">  Select a box Size:  </label>
      
           <select
           id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
          required
          >
            <option value="Small"> Small </option>
            <option value="Medium"> Medium </option>
            <option value="Large"> Large </option>
          
          </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
export default MailBoxForm;