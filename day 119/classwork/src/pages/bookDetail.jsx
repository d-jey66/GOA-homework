import React from 'react';
import { useParams } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();

  return <h1>Book Detail for Book {id}</h1>;
}

export default BookDetail;