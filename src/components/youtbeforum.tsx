import '../App.css'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount =0;
type FormValues ={
  username :string
  email:string
  channel:string
}


const onSubmit = (data:FormValues) =>{
  console.log(data)
}
const Youtbeforum = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } =  useForm <FormValues>();

renderCount++
  return (
    <div>
      <h1>YouTube Form ({renderCount/2})</h1>
    <form onSubmit={handleSubmit(onSubmit)} noValidate> 
    <div className='form-control'>
      <label htmlFor='username' >Username</label>
      <input 
      type='text'
       id='username'  
        {...register("username",{required :{
          value:true,
          message:'username is required'}})}/>
   <p className='error'>{errors.username?.message}</p>
      <label htmlFor='email' >E-mail</label>
      <input type='email' id='email' {...register("email",{
        pattern:{
        value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message:"email is not valid"


      },
      validate:{
        Notadmin:(FieldValue)=>{
          return (
            FieldValue !== "Email123"  || 
            "Enter a different email address");
      },
      notBlacklisted:(fieldValue)=>{
         return !fieldValue.endsWith("baddomain.com") ||
         "This domain is not supported"
      }
     } , 
      required :{
        value:true,
        message:"email is required"
      }
      
      })}/>
    <p></p>
<p className='error'>{errors.email?.message}</p>
</div>
<div className='form-control'> 
      <label htmlFor='username' >Channel</label>
      <input type='text' id='Channel' {...register("channel",{required:{
        value:true,
        message:"Channel is required"
      }})}/>
 <p className='error'>{errors.channel?.message}</p>
 
      <button>Submit</button>
     
      </div>
    </form>
<DevTool control={control}/>
    </div>
  )
}

export default Youtbeforum;
