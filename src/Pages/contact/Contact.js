import {React , useState} from 'react';
import './contact.css';
import ContactMeicon from '../../assets/contactMeicon';
import emailjs from '@emailjs/browser';
import Alert from '../../component/alert/Alert';

const Contact = () =>{
  const [data,setData]=useState({
    name:"",
    email:"",
    message:""
  });
  const [error,setError]=useState("");
  const [sucessMessage,setSucessMessage]=useState("");
  const [loading,setLoading]=useState(false);


  const updateData= (e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setData({...data, [name]:value});
  }

  const handlesubmit= async (e)=>{
    e.preventDefault();

    if(loading)
    {
      return ;
    }

    if(data.name && data.email && data.message)
    {
      try{
          setError("");
          setSucessMessage("");
          setLoading(true);
          await emailjs.send('service_qrs9ki1', 'template_9kjw8ao',data,'-sYP4f7hujrwOlZfJ');
          setSucessMessage("Thank You For Reaching Out");
          setData({name:"",email:"",message:""});
      }catch(err){
        setError("The server is not responding, try again later.");
      }
    }
    else{
      setSucessMessage("");
      setLoading(true);
      setError("All fields are necessary, so fill and try again.");
    }

    setLoading(false);
  };

  return (
    <div id="myContact">
        <div className='contactContainer'>


          <div className='contactText'>
           <h1>Contact Me</h1>
           <ContactMeicon />
          </div>


          <div className='contactForm'>
            
            <form  className='formContainer'>
              {error && <Alert danger={true} message={error} updateErrorStateFunction={setError} />}
              {sucessMessage && <Alert danger={false} message={sucessMessage} updateSucessStateFunction={setSucessMessage}/>}
              <div className="floating-label-group">
			          <input type="text" id="name" className="form-control" autoComplete="off"  required name='name' value={data.name} onChange={updateData} />
				        <label htmlFor='name' className={data.name?"floating-label data":"floating-label"} >Name</label>
			        </div>

              <div className="floating-label-group">
			          <input type="email" id="email" className="form-control" autoComplete="off" required name='email' value={data.email} onChange={updateData}/>
				        <label htmlFor='email' className={data.email?"floating-label data":"floating-label"}>Email Address</label>
			        </div>

              <div className="floating-label-group-text-area">
			          <textarea id="message" name='message' className='form-control' value={data.message} onChange={updateData} />
                <label htmlFor='message' className={data.message?"floating-label data":"floating-label"}>Message</label>
			        </div> 

              <div className='submitbtn'>
                <button type='submit' onClick={handlesubmit} disabled={loading} >{loading?"Sending...":"Send"}</button>
              </div>
            </form>
          </div>

           
        </div>
    </div>  
  )
}

export default Contact;