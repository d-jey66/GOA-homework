import React from 'react';
import './index.css';

const SeaTurtles = () => {
    return (
        <div className='body'>
            <header>
                <h1>Sea Turtles</h1>
            </header>

            <main>
                
                
                <center><section id="information">
                    
                    
                    <h2 id='info'>information</h2>
                    
                    <p id='p1'>Sea turtles are large reptiles that inhabit the world's oceans. They are known for their distinctive shells and play a critical role in marine ecosystems.Many sea turtle species are threatened due to habitat loss, poaching, and pollution. Conservation efforts are crucial for their survival, and various organizations are working tirelessly to protect these magnificent creatures.</p>
                
                
                </section></center>

                <center><section id="species">


                  <a href="https://en.wikipedia.org/wiki/Green_sea_turtle"><div className="species">
                    <div className='i1'><img src="https://i.pinimg.com/564x/33/25/64/33256466c1d691a133db117d08f89185.jpg" alt="" /></div>
                        <div className='p2'><h2>Green Sea Turtle</h2><p>The green sea turtle (Chelonia mydas), also known as the green turtle, black (sea) turtle or Pacific green turtle,is a species of large sea turtle of the family Cheloniidae. It is the only species in the genus Chelonia.Its range extends throughout tropical and subtropical seas around the world, with two distinct populations in the Atlantic and Pacific Oceans, but it is also found in the Indian Ocean.The common name refers to the usually green fat found beneath its carapace, due to its diet strictly being seagrass,not to the color of its carapace, which is olive to black.</p></div>
                    </div>
                  </a>
                  


                  <a href="https://en.wikipedia.org/wiki/Leatherback_sea_turtle"><div className="species">
                    <div className='i1'><img src="https://i.pinimg.com/564x/33/c3/aa/33c3aadd509251ea2791fdf803d4e3f7.jpg" alt="" /></div>
                        <div className='p3'><h2>Leatherback Sea Turtle</h2><p>The leatherback sea turtle (Dermochelys coriacea), sometimes called the lute turtle, leathery turtle or simply the luth, is the largest of all living turtles and the heaviest non-crocodilian reptile, reaching lengths of up to 2.7 metres (8 ft 10 in) and weights of 500 kilograms (1,100 lb).It is the only living species in the genus Dermochelys and family Dermochelyidae. It can easily be differentiated from other modern sea turtles by its lack of a bony shell; instead, its carapace is covered by oily flesh and flexible, leather-like skin, for which it is named.Leatherback turtles have a global range, although there are multiple distinct subpopulations. The species as a whole is considered vulnerable, and some of its subpopulations are critically endangered.</p></div>
                    </div>
                  </a>


                  <a href="https://en.wikipedia.org/wiki/Loggerhead_sea_turtle"><div className="species">
                    <div className='i1'><img src="https://media.gettyimages.com/id/1214435893/photo/a-loggerhead-turtle-at-elafonissos-island-bay-of-laconia-peloponnese-greece-europe.jpg?s=612x612&w=0&k=20&c=IjGe-P4P5YFPXUVicZHBt4vtnMX0R1QqpFpbMNVfIJs=" alt="" /></div>
                        <div className='p3'><h2>Loggerhead Sea Turtle</h2><p>The loggerhead sea turtle (Caretta caretta) is a species of oceanic turtle distributed throughout the world. It is a marine reptile, belonging to the family Cheloniidae. The average loggerhead measures around 90 cm (35 in) in carapace length when fully grown. The adult loggerhead sea turtle weighs approximately 135 kg (298 lb), with the largest specimens weighing in at more than 450 kg (1,000 lb). The skin ranges from yellow to brown in color, and the shell is typically reddish brown. No external differences in sex are seen until the turtle becomes an adult, the most obvious difference being the adult males have thicker tails and shorter plastrons (lower shells) than the females.</p></div>
                    </div>
                  </a>


                </section></center>


            </main>

            {/* <footer>
                <p>&copy; 2024 Sea Turtles Wiki. All rights reserved.</p>
            </footer> */}
        </div>
    );
};

export default SeaTurtles;
