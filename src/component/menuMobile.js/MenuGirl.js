import React from 'react';
import './style.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuGirl({ handlerChangeRemote }) {
  return (
    <>
      <ul className='uls'>
        <li onClick={handlerChangeRemote}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>BÉ GÁI</span>
        </li>
        <li>Xem tất cả "BÉ GÁI"</li>
        <li>Sandal</li>
        <li>Giày Thể Thao</li>
        <li>Giày Búp Bê</li>
        <li>Dép</li>
      </ul>
    </>
  );
}

export default MenuGirl;
