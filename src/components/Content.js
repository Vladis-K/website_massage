import React from 'react';


const Content = () => (
    <div className="">
        <div className="content">Content</div>
        <TypeMsg/>
        <Certificate/>
        <Question/>
        <Charateristic/>
    </div>
);

const TypeMsg = () => (
    <div className="types">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
);

const Certificate = () => (
  <div className="certificate">
      Certificates
  </div>
);

const Question = () => (
    <div className="query">
        Question
    </div>
);

const Charateristic = () => (
    <div className="charateristic">
        Characteristic-slider
    </div>
);





export default Content;