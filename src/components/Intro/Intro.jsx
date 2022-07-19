import './intro.scss';
import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      backSpeed: 80,
      strings: ['student', 'tech enthusiast', 'junior developer'],
    });
  }, []);

  return (
    <div className="intro" id="Intro">
      <div className="heading">
        <p>Hi, my name is</p>
        <p className="popout">
          <h1>Rohith J</h1>
          <h1>Nambiar</h1>
        </p>
        <span>
          I am a{' '}
          <span style={{ textDecoration: 'underline' }} ref={textRef}></span>
        </span>
        <span>
          Specialising in{' '}
          <span style={{ textDecoration: 'underline' }}>web development</span>
        </span>
      </div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      ></link>
      <div className="scroll">
        <p>Scroll down</p>
        <i class="arrow down"></i>
      </div>
    </div>
  );
}

export default Intro;
