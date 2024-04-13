import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="imageContainer">
        <img src="/images/logo.svg" alt="Image Description" width="700" height="120" />
      </div>
      <div className="whiteRectangle">
        <p className="poppins-semibold mb-4">Login to your account.</p>
        <div className="buttonContainer">
          <h1 className="poppins-regular mb-4">User name</h1> 
          <input type="text" placeholder="Username" className="textfield mb-4" style={{ width: '100%' }} /> 
          <div className="hstack">
            <h1 className="passwordText poppins-regular ">Password</h1>
            <h2 className="forgetPasswordText">Forgot?</h2>
            
          </div>
          <input type="password" placeholder="Password" className="textfield" style={{ width: '100%' }} />
          <button className="button">Login now</button>   
        </div>
      </div>
    </main>
  );
}


