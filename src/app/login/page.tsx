'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Caveat } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { userLogin } from '@/utils/userAPI';
import { AuthResponse, UserLogin } from '@/types/apiTypes';
import { useRouter } from 'next/navigation';
import { AxiosResponse } from 'axios';
// import "./globals.css";

const caveat = Caveat({ subsets: ["latin"] });

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const logUser: UserLogin = {
      email: email.trim(),
      password: password
    };
    try {
      const userAuth: AxiosResponse = await userLogin(logUser);
      //console.log(userAuth.data);
      setEmail("");
      setPassword("");
      localStorage.setItem('token', userAuth.data.token);
      const responseAuth: AuthResponse = userAuth.data;
      //console.log(responseAuth);
      setEmail("");
      setPassword("");
      router.push('/home');
      if (responseAuth.status == "success") {
        router.push("home");
      } else {
        throw new Error("Algo fallo");
      }
    } catch (error: any) {
      const errorMessage: string = (error.response?.data as { error: string })?.error;
      console.error('Error en la autenticación:', errorMessage);
      Swal.fire({
        title: "Error!",
        text: `Revise el correo, usuario o la contraseña`,
        icon: "error",
        confirmButtonColor: "#a08bc7",
      });
    }
  };

  return (
    <main className='vh-100 d-flex justify-content-center  align-items-center '>
      <article className='w-100 d-flex' style={{ height: "85%" }}>
        <div className='w-50 d-flex justify-content-end d-none d-lg-flex' style={{ minWidth: "50%" }}>
          <video src="videos/puppies.mp4" className='me-3 rounded-4' controls={false} muted loop autoPlay={true} style={{ maxHeight: "100%", width: "auto" }}>
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <div className='w-100 align-items-center align-items-lg-start d-flex flex-column'>
          <form className='card p-3 mb-3' onSubmit={handleLogin} style={{ width: 400, height: 450 }}>
            <div className='card-body text-center'>
              <h1 className={`${caveat.className} display-4 mb-5`}>Adogtame</h1>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="InputUser" value={email} onChange={handleEmailChange} placeholder="Usuario o Correo electronico" />
                <label>Usuario o Correo electronico</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="InputPassword" value={password} onChange={handlePasswordChange} placeholder="Contraseña" />
                <label>Contraseña</label>
              </div>

              <div className="mb-4">
                <button type="submit" className='btn w-100'>Iniciar Sesión</button>
              </div>

              <hr />
              <a href="" className='text-center text-decoration-none' style={{ color: "#6a8faf" }}>¿Olvidate tu Contraseña?</a>
            </div>
          </form>

          <div className="card text-center p-2 py-3 d-flex mb-3" style={{ width: 400 }}>
            <p className='m-0'>¿No tienes cuenta?  <Link href="/registrar" className='text-decoration-none'>Regístrate</Link></p>
          </div>

          <div className="text-center" style={{ width: 400 }}>
            <p className='mb-2'>Descarga la app</p>
            <div className="d-flex align-items-center justify-content-center">
              <Image src="/img/appstore.png" width={170} height={70} alt='' />
              <Image src="/img/google.png" width={170} height={55} alt='' />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Login;