import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return (
    <main>
      <h1>Zachary Peterson</h1>
      
      <p>Ad in deserunt anim ad amet cupidatat ad in deserunt ex sint culpa. Dolor do nulla fugiat reprehenderit qui tempor veniam. Magna ex magna officia aliqua tempor ad laboris minim anim. Aute reprehenderit et dolor qui enim consequat non id ex laboris laborum. Officia irure aliqua officia incididunt in officia amet mollit.</p>

      <br/>

      <p>Irure velit minim dolore exercitation nulla qui tempor laborum elit excepteur. Veniam Lorem laboris dolor mollit anim proident ad veniam. Ipsum elit non aute irure ullamco nisi laboris aliquip veniam.</p>


      <p>
        <a
          href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        was bootstrapped with{' '}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{' '}
        and contains three directories, <code>/public</code> for static assets,{' '}
        <code>/src</code> for components and content, and <code>/api</code>{' '}
        which contains a serverless <a href="https://golang.org/">Go</a>{' '}
        function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
    </main>
  );
}

export default App;
