import { IconArrowRight } from "@tabler/icons-react"
import { useAuthContext } from "../context/AuthContext"

const Form = () => {

  const {register, handleSubmit, errors, onSubmit, isRegister} = useAuthContext()

  return (
    <form className="form" type="submit" onSubmit={handleSubmit(onSubmit)} >
      {isRegister ? (
        <>
      <input
      {...register("name", {required:"Name must be greater than 5 characters",minLength: 4 })}
      type="text"
      placeholder="Enter Your Name"
      name="name"
      />
     {errors.name && <p style={{ color: "red", fontSize: "12px" }}>
      {errors.name.message}
        <sup>*</sup>
      </p>}
      </>
      ) : null}
    
    <input
    {...register("email",{required:"Enter Valid email address",minLength: 6 })}
      type="text"
      // autoComplete="off"
      placeholder="Enter Your Email"
      name="email"
    />

      {errors.email && <p style={{ color: "red", fontSize: "12px" }}>
        {errors.email.message}
        <sup>*</sup>
      </p>}
    <input
    {...register("password", {required:"Password must be strong",minLength: 7})}
      type="password"
      placeholder="Enter Your Password"
      name="password"
      className="password"
    />
      {errors.password && <p style={{ color: "red", fontSize: "12px" }}>
        {errors.password.message}
        <sup>*</sup>
      </p>}
     
      <button className="button sign-up-btn">
      {isRegister ? "Create Account" : "Log In"}
      <IconArrowRight width={20} height={20} />
    </button>
  </form>
  )
}

export default Form
