import { useParams } from "react-router-dom";

const MailBoxDetails = (props) => {
   console.log(props);

//   const params = useParams();
//   console.log(params)


    const { mailboxId } = useParams();
    const singlemailbox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
console.log("Mailbox object:", singlemailbox);
 
return (
    <>
      {!singlemailbox ? (
        " Mailbox not found "
      ) : (

        <>
          <h2>Mailbox Id : {singlemailbox._id}</h2>
          
          <ul>
            <li>Box Holder : {singlemailbox.boxholder}</li>
           
            
            <li>Box Size: {singlemailbox.size}</li>
          
          
          </ul>
        </>
      )}
    </>
  );
};

export default MailBoxDetails;