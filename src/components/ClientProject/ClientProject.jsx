import React from "react";

import "./ClientProject.css";
import header3 from "../asset/img/header3.jpg";
import cli6 from "../asset/img/cli6.png"
import cli3 from "../asset/img/cli3.png"
import cli4 from "../asset/img/cli4.png"
import cli5 from "../asset/img/cli5.png"
const ClientProject = () => {
    return (

        <div class="container1" id="Clients" >
            <div class="title-wrapper">
                <div>
                    <h2 class="h2 section-title">
                        Latest Projects
                    </h2>

                    <p class="section-text">
                        From idea to implementation – our client projects showcase our expertise.
                    </p>
                </div>
            </div>

            <div class="grid-list">
                <div
                    class="project-card project-card-1"

                >
                    <div class="card-content" >
                        <p class="card-tag" >
                            Web Development
                        </p>

                        <h3 class="h3 card-title">Green Sky Logistics</h3>

                        <p class="card-text">
                            The website for Green Sky Logistics showcases their transportation and logistics services with a modern and user-friendly design. It highlights their customer service and technology-driven operations, making it easy for potential clients to learn about their business.
                        </p>

                        <a href="https://greenskylogistics.ae/" class="btn-text" target="_blank" >
                            <span class="span">See Project</span>

                            <ion-icon
                                name="arrow-forward-outline"
                                aria-hidden="true"
                            ></ion-icon>
                        </a>
                    </div>

                    <div class="card-banner">
                        <img
                            src={cli6}

                            loading="lazy"
                            alt="Web Design"
                            class="w-100"
                        />
                    </div>
                </div>

                <div
                    class="project-card project-card-2"

                >
                    <div class="card-content" data-reveal="right">
                        <p class=" card-tag" >
                            Wordpress Development
                        </p>

                        <h3 class="h3 card-title">Germzie</h3>

                        <p class="card-text">
                            Germzie is a Florida-based cleaning company that provides professional cleaning services for residential and commercial properties. Their website, powered by WordPress, highlights their services and expertise.
                        </p>

                        <a href="https://germzie.com/" class="btn-text" target="_blank" >
                            <span class="span">See Project</span>

                            <ion-icon
                                name="arrow-forward-outline"
                                aria-hidden="true"
                            ></ion-icon>
                        </a>
                    </div>

                    <div class="card-banner" data-reveal="left">
                        <img
                            src={cli3}
                            width="600"
                            height="367"
                            loading="lazy"
                            alt="Web Design"
                            class="w-100"
                        />
                    </div>
                </div>
                <div className="project-column">
                    <div
                        class=" project-card-3"

                    >
                        <div class="card-content-3" >
                            <p class=" card-tag" >
                                Wordpress Development
                            </p>

                            <h3 class="h3 card-title">Corpus Christi</h3>

                            <p class="card-text">
                                Corpus Christi Home Inspections' website, developed using WordPress and Elementor, offers an easy-to-navigate interface and highlights their top-quality inspection services for home buyers and sellers.
                            </p>

                            <a href="https://corpuschristi-homeinspections.com/" class="btn-text" target="_blank">
                                <span class="span">See Project</span>


                            </a>
                        </div>

                        <div class="card-banner" >
                            <img
                                src={cli4}


                                alt="Web Design"

                            />
                        </div>
                    </div>

                    <div
                        class="project-card-4"

                    >
                        <div class="card-content-4">
                            <p class=" card-tag" >
                                Web Development
                            </p>

                            <h3 class="h3 card-title">Tec Gloves</h3>

                            <p class="card-text">
                                Tec Gloves' visually appealing website highlights their expertise in medical glove production, utilizing Elementor Pro and stock images to create an eye-catching platform for their products and services.
                            </p>

                            <a href="#" class="btn-text" >
                                <span class="span">See Project</span>


                            </a>
                        </div>

                        <div class="card-banner" >
                            <img
                                src={cli5}

                                loading="lazy"
                                alt="Mobile Design"
                                class="w-100"
                            />
                        </div>
                    </div>

                </div>
            </div >
        </div >

    );
};

export default ClientProject;
