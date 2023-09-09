import * as React from 'react';
import Cube from 'react-3d-cube';
import react from './logos/react.png'
import mongo from './logos/mongodb.png'
import node from './logos/nodejs.png'
import hcj from './logos/hcj.png'
import express1 from './logos/express1.png'
import bootstrap from './logos/bootstrap.png'
const Ani = () =>{

    return (
       
      <div className='cubes' data-aos="fade-up"  data-aos-duration="1000">
        {/* <h1>react-3d-cube</h1>
        <h2>no children</h2> */}
        <div
          style={{
            width: 250,
            height: 250
          }}
        >
          {/* <Cube size={300} index="top" />
        </div>
        <h2>set children</h2>
        <div
          style={{
            width: 300,
            height: 300
          }}
        > */}
          <Cube size={250} index="back"  className='kube'>
            <div className='node sp'>
                <img src={node} alt="" />   
            </div>
            <div className='express sp'><img src={express1} alt="" />  </div>
            <div className='hcj sp'><img src={hcj} alt="" />  </div>
            <div className='react sp'><img className='imgre' src={react} alt="" />  </div>
            <div className='mongoDB sp'><img src={mongo} alt="" />  </div>
            <div className='bootstrap sp'><img src={bootstrap} alt="" />  </div>
          </Cube>
        </div>
      </div>
    );
  }


export default Ani