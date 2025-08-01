import {Link} from 'react-router'


const MailBoxList = props => {
  
  
    return (

    <>
    <main style={styles.container}>
     <h2 style={styles.heading}>Mailbox List</h2>
    
    <ul style={styles.list}>
       {props.mailboxes.map((currentMail) => (
        <li key={currentMail._id} style={styles.mailbox}> 
        <Link to={`/mailboxes/${currentMail._id}`} style={styles.link}> Mailbox: {currentMail._id}</Link></li>
       ))}
    </ul>
    </main>
    </>
  )
}


const styles = {
  container: {
  padding: '2rem',
  backgroundColor: '#f0f4f8', // لون خلفية فاتح وأنيق
  minHeight: '100vh',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  },
  heading: {
    marginBottom: '1.5rem',
    fontSize: '2rem',
    color: '#4c6daaff',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    listStyle: 'none',
    padding: 0,
  },
  mailbox: {
    backgroundColor: '#657eacff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 6px rgba(114, 203, 235, 0.1)',
    width: '120px',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#c2d8e1ff',
    fontWeight: 'bold',
  },
};

export default MailBoxList;
