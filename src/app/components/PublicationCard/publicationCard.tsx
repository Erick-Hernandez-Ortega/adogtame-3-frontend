import React from "react";
import Image from 'next/image';

const PublicationCard: React.FC = () => {
  return (
    <div className="card text-center">
      <div className="card-header text-start d-flex align-items-center">
        <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        Toni Kroos
       <p className="m-0 ms-1 text-body-secondary fs-6">1 d</p>
      </div>
      <div className="card-body">
      <Image src="https://placedog.net/360/480/pixelate" alt="" width="32" height="32" className="rounded-circle me-2" />
        {/* <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
        ola
      </div>
      <div className="card-footer text-body-secondary">2 days ago</div>
    </div>
  );
};

export default PublicationCard;
