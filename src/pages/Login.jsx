import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import team from "../assets/slider/team3.jpg"
import jeno from "../assets/slider/jeno.jpg"

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen border-0 border-red-400 "
  
   
  >
  
      <div className="container py-12 px-6 h-full" >
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"   >
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg ">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mt-1 mb-2 pb-1">
                        S&M Alkalmazásokss
                      </h3>
                      <p>Bejelentkezés</p>
                    </div>
                    <form>
                      <div className="mb-10">
                        <div className="max-w-[240px] m-auto py-4">
                          <GoogleButton onClick={handleGoogleSignIn} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="lg:w-6/12  h-1/2 flex items-start lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient border-0 border-red-500"
                  style={{
                    backgroundImage: `url("${jeno}")`,
                    backgroundSize: "cover", // Adjust as needed
                    backgroundRepeat: "no-repeat", // Adjust as needed
                    backgroundPosition: "center center",
                    height:"500px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <div className="text-white px-1 py-6 md:p-1 md:mx-1 my-10 border-red-400 border-2 flex flex-col justify-end items-end">
                
                    <h4 className="text-xl font-semibold mb-6 my-10">
                      Ön megálmodja mi megvalósítjuk!
                    </h4>
                    <p className="text-md mb-6">
                      Bútorgyártás, Lakberendezés, Belsőépítészet,<br></br>
                    </p>

                    <ul className="text-sm">
                      <li>- Pontos</li> <li>- Precíz</li> <li>- Gyors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;


/*
style={{
      backgroundImage: `url("${team}")`,
      backgroundSize: "cover", // Adjust as needed
      backgroundRepeat: "no-repeat", // Adjust as needed
      backgroundPosition: "center center",
      
      transition: "transform 0.3s ease-in-out",
    }}

*/

/*
<div className="flex items-center justify-between pb-6">
<button
  className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
  type="button"
  data-mdb-ripple="true"
  data-mdb-ripple-color="light"
  style={{
    background:
      "linear-gradient(to right,#000000,#ee7724)",
  }}
>
  Új fiók létrehozása
</button>
</div>*/
