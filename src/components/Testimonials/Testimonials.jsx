import React, { useEffect } from 'react'
import "./Testimonials.css"

import test1 from "../asset/img/test1.jpg"
import test2 from "../asset/img/test2.jpg"
import test3 from "../asset/img/test3.jpg"
import test4 from "../asset/img/test4.jpg"

const Testimonials = () => {




    return (
        <div className='Testmo' id='Testimonialss'>
            <div class="title-wrappers" >
                <div>
                    <h2 class="h2 section-title">
                        Our Clients' Voices
                    </h2>

                    <p class="section-text">
                        Take a look at what they have to say and see why they choose us!
                    </p>
                </div>
            </div>

            <div class="carrousel">
                <h2></h2>
                <input type="radio" name="slides" id="radio-1" checked />
                <input type="radio" name="slides" id="radio-2" />
                <input type="radio" name="slides" id="radio-3" />
                <input type="radio" name="slides" id="radio-4" />
                <ul class="slides">
                    <li class="slide">
                        <p>
                            <q>Kuwar provided top notch service and delivery. He made every change requested and in a timely manner. I would highly recommend his services to anyone looking to get a job done quick and efficiently.
                            </q>
                            <span class="author">
                                <img src={test1} />
                                Jayden Collins

                            </span>
                        </p>
                    </li>
                    <li class="slide">
                        <p>
                            <q>He is the one like Neo. He can tackle all of your website needs big or small. Save your self troubles and book this seller!!!</q>
                            <span class="author">
                                <img src={test2} />
                                Ronald Greene
                            </span>
                        </p>
                    </li>
                    <li class="slide">
                        <p>
                            <q>Kuwar did a fabulous job on redesigning my website and setting up/optimizing SEO. Communications were very clear and timely. Extremely easy to work with and very responsive to my needs.</q>
                            <span class="author">
                                <img src={test3} />
                                Denise Bartlett
                            </span>
                        </p>
                    </li>
                    <li class="slide">
                        <p>
                            <q>He went over and above the requirements for this project and really showed what he was made of. What a great developer!</q>
                            <span class="author">
                                <img src={test4} />
                                Kamar Coleman

                            </span>

                        </p>
                    </li>
                </ul>
                <div class="slidesNavigation">
                    <label for="radio-1" id="dotForRadio-1"></label>
                    <label for="radio-2" id="dotForRadio-2"></label>
                    <label for="radio-3" id="dotForRadio-3"></label>
                    <label for="radio-4" id="dotForRadio-4"></label>
                </div>
            </div>
        </div>
    )
}

export default Testimonials