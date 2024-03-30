import React from "react";
import Image from 'next/image';
import { IconBadge, IconMessages, IconHeart } from '@tabler/icons-react';

const PublicationCard: React.FC = () => {
  // TODO falta dehacerlo funcional
  return (
    <div className="card text-center border-0" style={{width: 400}}>
      <div className="card-header text-start d-flex align-items-center bg-transparent">
        <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>Toni kross</strong>
       <p className="m-0 ms-1 text-body-secondary fs-6">1 d</p>
      </div>
      <div className="card-body p-0"  >
        <Image src="https://place.dog/400/400" alt="image" width='400' height='400' />
      </div>
      <div className="card-footer bg-transparent border-0">
        <div className="d-flex d-flex justify-content-between">
          <div className="d-flex gap-1">
            <IconHeart stroke={1.5} size={32}/>
            <IconMessages stroke={1.5} size={32}/>
          </div>
          <div>
            <IconBadge stroke={1.5}size={32}/>
          </div>
        </div>
        <div className="text-start d-flex gap-2 align-items-center mt-1">
          <strong>Toni kross</strong>
          <p className="m-0">Una chucho muy feo</p>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
