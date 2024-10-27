import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      <header>
        <h1>guinea pigs</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#species">Species</a></li>
            <li><a href="#care">Care</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About guinea pigs</h2>
          <div className="images">
            <img
              src="https://media.istockphoto.com/id/865056024/photo/guinea-pig-walks-in-the-fresh-air-and-eating.jpg?s=612x612&w=0&k=20&c=OVfv8jQYpZnwRFz0S8U5b7uCEAJy85NNzaq4_Ty5ohA="
              alt=""
              className="section-image"
            />
            <img src="https://media.istockphoto.com/id/475728270/photo/guinea-fun.jpg?s=612x612&w=0&k=20&c=EFLFP3gU2OSbfEotMxTHyuojTIkNKy52GpDIQB5bwyM="
              alt=""
              className='section-image'
            />
          </div>
          <center><p>Guinea pigs are small, social rodents native to South America, commonly kept as pets for their gentle nature and ease of care.</p></center>
        </section>

        <section id="species">
          <h2>Species</h2>
          <div className="images">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/61454543/large.jpeg"
              alt=""
              className="section-image i2"
            />
            <img src="https://static.inaturalist.org/photos/226997449/medium.jpg" alt="" className='section-image i2' />
          </div>
          <ul>
            <li>Brazilian guinea pig</li>
            <li>Montane guinea pig</li>
          </ul>
        </section>

        <section id="care">
          <h2>Care</h2>
          <div className="images">
            <img src="https://media.istockphoto.com/id/1396607661/photo/guinea-pig.jpg?s=612x612&w=0&k=20&c=UQpdoLYiRy2Ra8CfBCRtrGL7sgS2SjWRNF0d0F6hN04="
              alt=""
              className='section-image i2'
            />
            <img src="https://media.istockphoto.com/id/1343474701/photo/domestic-guinea-pigs-in-their-house.jpg?s=612x612&w=0&k=20&c=k1vqOasz6QE2gUMOuZUVBwEl0y00yRZcRx5_trF1rBA=" alt="" className='section-image i2' />
          </div>
          <p>Caring for guinea pigs involves providing a balanced diet of hay, fresh vegetables, and pellets, maintaining a clean, spacious habitat, and ensuring regular social interaction and gentle handling.</p>
        </section>
      </main>
    </div>
  );
}

export default App;