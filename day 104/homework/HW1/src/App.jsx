import React from 'react';
import './index.css';

function App() {
    return (
        <div>
            <header>
                <h1>World of Parrots</h1>
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
                    <h2>About Parrots</h2>
                    <div className="images">
                      <img 
                          src="https://media.istockphoto.com/id/1410185884/photo/military-macaw-exotic-bird-perched-on-a-dry-tree-trunk.jpg?s=612x612&w=0&k=20&c=zkUvIVDy502u6jTeQPGzvisSShtpZBjvwLAk7pTui-0=" 
                          alt="Parrots in the wild"
                          className="section-image"
                      />
                      <img src="https://media.istockphoto.com/id/1407425699/photo/hungry-rainbow-lorikeet.jpg?s=612x612&w=0&k=20&c=-jR2QnqKupuLpnfnsAoVGUG2u7Pl3dmRS4tHH-zt6Mc=" 
                        alt="" 
                        className='section-image'
                      />
                      <img src="https://www.shutterstock.com/image-photo/blue-yellow-macaw-parrot-colorful-600nw-2135211303.jpg"
                        alt="" 
                        className='section-image'
                      />
                    </div>
                    <center><p>Parrots are beautiful and intelligent birds known for their ability to mimic speech and a variety of sounds.</p></center>
                </section>

                <section id="species">
                    <h2>Species</h2>
                    <div className="images">
                      <img 
                          src="https://media.istockphoto.com/id/1155034900/photo/the-rose-ringed-parakeet-also-known-as-the-ring-necked-parakeet.jpg?s=612x612&w=0&k=20&c=sNht3wdKXbe0Av_9QzMvVzNtuiKEomnJx_LHxtH_bcI=" 
                          alt="Different parrot species"
                          className="section-image i2"
                      />
                      <img src="https://images.unsplash.com/photo-1683971621047-63757447f680?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF1c3RyYWxpYW4lMjBwYXJyb3R8ZW58MHx8MHx8fDA%3D" alt="" className='section-image i2'/>
                    </div>
                    <ul>
                        <li>Indian Parrot</li>
                        <li>Australian Parrot</li>
                        <li>And many more fascinating species...</li>
                    </ul>
                </section>

                <section id="care">
                    <h2>Parrot Care</h2>
                    <div className="images">
                      <img src="https://t4.ftcdn.net/jpg/01/09/39/73/240_F_109397389_huBYRiES0sAHsYBHuo7XU9aRvD0I73if.jpg"
                        alt="" 
                        className='section-image i2'
                      />
                      <img src="https://t4.ftcdn.net/jpg/02/54/45/69/240_F_254456915_KYG3h71ZZAShYkyZEzxca6VcuVvEuCh5.jpg" alt="" className='section-image i2'/>
                    </div>
                    <p>Caring for parrots involves proper nutrition, a clean environment, and plenty of social interaction.</p>
                </section>
            </main>
        </div>
    );
}

export default App;
