import './BsignUp.css'


export default function BsignUp(){
    return(
       <div>
  <div className="col col-sm-2">
    <div className="row" id="logo1">
    <img id="logo" src="https://i.pinimg.com/originals/98/c0/eb/98c0ebc091adcda55323556c996e90bd.png" /></div>
    <div className="row" id="welcome"><h1>Welcome</h1></div>
    <div className="row" id="login1">
      <button className="btn btn-light ">Login</button>
    </div>
  </div>
  <div className="col" id>
    <form className="form w-100 h-100" id="border">
      <h2 className="title pt-5 pb-4" style={{textAlign: 'center'}}>Registration</h2>
      <div className="row rone">
        <div className="form-group col-md-6 fone py-3"> <input type="text" className="form-control" placeholder="First Name" required /> </div>
        <div className="form-group col-md-6 ffour py-3 pr-5"> <input type="email" className="form-control lm" placeholder="Your Email" /> </div>
      </div>
      <div className="row rone">
        <div className="form-group col-md-6 ftwo py-3"> <input type="text" className="form-control" placeholder="Last Name" /> </div>
        <div className="form-group col-md-6 fthree py-3 pr-5"> <input type="text" className="form-control jk" placeholder="Your Phone" /> </div>
      </div>
      <div className="row rtwo">
        <div className="form-group col-md-6 fseven py-3"> <input type="password" className="form-control" placeholder="Password" /> </div>
        <div className="form-group col-md-6 fsix py-3 pr-5"> <input type="password" className="form-control" placeholder="Confirm Password" /> </div>
      </div>
      <div className="row rfour" style={{paddingLeft: 16}}>
        <div className="radio">
          <label>
            <input type="radio" name="survey" id="Radios2" defaultValue="male" />
            Male
          </label>
          <label>
            <input type="radio" name="survey" id="Radios2" defaultValue="female" />
            Female
          </label>
        </div>
      </div>
      <div className="row rfour col ctwo " style={{paddingLeft: 800}}>
        <div className="text-left"> <button type="submit" className="btn btn-primary btn-lg btn-block"><span>Register</span></button> </div>
      </div>
    </form>
  </div>
</div>


    )
};