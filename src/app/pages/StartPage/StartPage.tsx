import React from 'react'

const StartPage: React.FC = () => {
  return (
    <main className='vh-100 d-flex justify-content-center  align-items-center '>
      <article className='w-100 d-flex' style={{ height: "85%" }}>
        <div className='w-50 d-flex justify-content-end' style={{ maxWidth: "50%" }}>
          <video src="videos/puppies.mp4" className='me-3 rounded-4' controls={false} muted loop autoPlay={true} style={{maxHeight: "100%", width: "auto"}}>
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div className='bg-secondary w-50' style={{ maxWidth: "50%" }}>
          <form>
            <h1 className='h3 '>Adogtame</h1>

          </form>
        </div>
      </article>
    </main>
  )
}

export default StartPage