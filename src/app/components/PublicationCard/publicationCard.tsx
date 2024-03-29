import React from "react";
import Image from 'next/image';
import { IconBadge, IconMessages, IconHeart } from '@tabler/icons-react';

const PublicationCard: React.FC = () => {
  // TODO falta dehacerlo funcional
  return (
    <div className="card text-center">
      <div className="card-header text-start d-flex align-items-center">
        <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>Toni kross</strong>
       <p className="m-0 ms-1 text-body-secondary fs-6">1 d</p>
      </div>
      <div className="card-body p-0"  >
        <Image src="https://place.dog/400/400" alt="image" width='400' height='400' />
      </div>
      <div className="card-footer">
        <div className="d-flex d-flex justify-content-between">
          <div className="d-flex gap-1">
            <IconHeart size={32}/>
            <IconMessages size={32}/>
          </div>
          <div>
            <IconBadge size={32}/>
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
