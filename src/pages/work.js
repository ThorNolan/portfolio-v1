import * as React from "react"

import Seo from "../components/Wrapper/seo.js"
import "./work.scss"

const Projects = () => (
  <>
    <Seo title="Work" />
    <section className="section page-content" id="projects">
    <div className="container">
      <h4 className="header center"><span>SELECTED PROJECTS</span></h4>
    </div>

    <div className="container">
      <h5 className="header center">WEBSITES</h5>

      <div className="row">
        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/bp-demo-vid.mp4" type="video/mp4" />
              </video>
            </div>
          
            <div className="card-content">
              <span className="card-title activator">Buddha's Palm Tattoo<i className="material-icons right">search</i></span>
            </div>
          
            <div className="card-action">
              <p><a href="https://buddhaspalmtattoogallery.com/" target="_blank" rel="noreferrer">[visit the site]</a></p>
            </div>
          
            <div className="card-reveal black">
              <span className="card-title">Buddha's Palm Tattoo<i className="material-icons right">close</i></span>
                <p>A custom website I designed and developed for my client, Buddha's Palm Tattoo & Art Gallery. I made the site using HTML, CSS and JavaScript, and relied heavily on my knowledge of SCSS and flex-box grid to accomplish the design, animations, and responsiveness. I used a mobile-first approach to creating this site and designed a distinct mobile layout as well (my analytics have shown since that almost 70% of site visitors are using their mobile device!).</p>
                <br />
              </div>
            </div>
        </div>

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/spp-demo-vid.mp4" type="video/mp4" />
              </video>
            </div>
                    
            <div className="card-content">
              <span className="card-title activator">Staring Problem Press<i className="material-icons right">search</i></span>
            </div>
                    
            <div className="card-action">
              <p><a href="https://www.staringproblempress.com/" target="_blank" rel="noreferrer">[visit the site]</a></p>
            </div>
                    
            <div className="card-reveal black">
              <span className="card-title">Staring Problem Press<i className="material-icons right">close</i></span>
                <p>A site for user submitted chapbook creation and sale that I designed and customised using the Squarespace CMS, at the request of my client Staring Problem Press. My goal was to deliver them a customized theme that includes my own HTML and CSS, that would require no further maintanence on their part, which allowed them to focus solely on the commerce aspect of the site.</p>
                <br />
            </div>
          </div>
        </div>

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/vhoa-demo-vid.mp4" type="video/mp4" />
              </video>
            </div>
                      
              <div className="card-content">
                <span className="card-title activator">Vote! Heart of America.org<i className="material-icons right">search</i></span>
              </div>
                      
              <div className="card-action">
                <p><a href="https://voteheartofamerica.org/" target="_blank" rel="noreferrer">[visit the site]</a></p>
              </div>
                      
              <div className="card-reveal black">
                <span className="card-title">Vote! Heart of America<i className="material-icons right">close</i></span>
                  <p>A customised WordPress theme I created for my client Vote! Heart of America.org. Their goal was to create a national voter information website, with helpful links and useful tools to keep voters informed and prepared. My design philosophy for this site was centered on usability and simplicity, as my client was looking for a site that was simple and easy to use while still robust in its offerings.</p>
                  <br />
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className="container">
      <h5 className="header center">APPS & GAMES</h5>

      <div className="row">

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">

            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/gighub-demo-vid.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="card-content">
              <span className="card-title activator">GigHub.io<i className="material-icons right">search</i></span>
            </div>

            <div className="card-action">
              <p><a href="https://gighub-io.herokuapp.com/" target="_blank" rel="noreferrer">[deployed]</a><a href="https://github.com/ltcondon/Project-3" target="_blank" rel="noreferrer">[github repo]</a></p>
            </div>

            <div className="card-reveal black">
              <span className="card-title">GigHub.IO<i className="material-icons right">close</i></span>
              <p>A full-stack MERN app I created with a team as the final project for our bootcamp.
                GigHub lets users log in to the app with their LinkedIn account and track their job
                search progress. We utilized the LinkedIn OAuth API for user sign-in/sign-up, and store user data in a
                Mongo database. Users can add
                jobs they’re interested in applying for and track their application progress, as well as view analytics about their job search progress.</p>
              <br />
            </div>
          </div>
        </div>

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">

            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/eventpro-demo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="card-content">
              <span className="card-title activator">EventPRO<i className="material-icons right">search</i></span>
            </div>

            <div className="card-action">
              <p><a href="https://limitless-fortress-24134.herokuapp.com/"
                target="_blank" rel="noreferrer">[deployed]</a><a href="https://github.com/ThorNolan/EventPRO" target="_blank" rel="noreferrer">[github repo]</a></p>
            </div>

            <div className="card-reveal black">
              <span className="card-title activator">EventPRO<i className="material-icons right">close</i></span>
              <p>EventPRO is an event planning application that provides users with a centralized location
                to plan upcoming events and organize to-do's. I was part of a team that made this app
                for our full-stack bootcamp, and my responsibilities included setting up the MVC file
                structure, getting our server up and running, utilizing passport and express so that
                users could create accounts and log in (data persists in a MySQL database), and giving the app a consistent style with css.</p>
              <br />
            </div>
          </div>
        </div>

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">

            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/memory-color-demo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="card-content">
              <span className="card-title activator">Memory Color Clicker<i className="material-icons right">search</i></span>
            </div>

            <div className="card-action">
              <p><a href="https://thornolan.github.io/React-Memory-Game/"
                target="_blank" rel="noreferrer">[deployed]</a><a href="https://github.com/ThorNolan/React-Memory-Game" target="_blank" rel="noreferrer">[github repo]</a></p>
            </div>

            <div className="card-reveal black">
              <span className="card-title">Memory Color Clicker<i className="material-icons right">close</i></span>
              <p>This is a simple memory game I built for my full-stack coding bootcamp. It was built with
                React, which it uses it to serve up front-end content and manipulate the DOM. The game
                is built primarily around one stateful app component that keeps track of user clicks,
                user score and high score, and the position of content on the page which needs to be
                re-rendered every time the user clicks.</p>
              <br />
            </div>
          </div>
        </div>

      </div>

      <div className="row">

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">

            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/gif-me-space-video-demo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="card-content">
              <span className="card-title activator">GIF Me Some Space<i className="material-icons right">search</i></span>
            </div>

            <div className="card-action">
              <p><a href="https://thornolan.github.io/AJAX-Gif-Finder/"
                target="_blank" rel="noreferrer">[deployed]</a><a href="https://github.com/ThorNolan/AJAX-Gif-Finder" target="_blank" rel="noreferrer">[github repo]</a></p>
            </div>

            <div className="card-reveal black">
              <span className="card-title">Gif Me Some Space<i className="material-icons right">close</i></span>
              <p>A simple site I made for my full-stack coding bootcamp that populates the page with
                relevant gifs based on keyword searches from user input and button presses using the
                GIPHY API. The theme is space, so the first buttons that appear on the navbar are all
                space themed, but users are free to add any additional themes they would like using the
                form on the page. Upon adding a theme, it will appear as a new button, which the user
                can press for more gifs based on that theme.</p>
              <br />
            </div>
          </div>
        </div>

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">

            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/mern-book-search.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="card-content">
              <span className="card-title activator">MERN Google Books Search<i className="material-icons right">search</i></span>
            </div>

            <div className="card-action">
              <p><a href="https://stormy-badlands-29590.herokuapp.com/" target="_blank" rel="noreferrer">[deployed]</a><a href="https://github.com/ThorNolan/React-Reading-List" target="_blank" rel="noreferrer">[github repo]</a></p>
            </div>

            <div className="card-reveal black">
              <span className="card-title">MERN Google Books Search<i className="material-icons right">close</i></span>
              <p>This is a full-stack MERN application I built for my coding bootcamp, which allows users
                to search for book titles and retrieve information about them by utilizing the Google
                Books API. It relies on a MongoDB database for data persistence, Express for routing
                from my server, React for serving up and manipulating front-end content, and Node as its
                runtime environment. Users can navigate between the search page, where they can search
                for and examine different books, and the saved page, where they can see any books
                they've chosen to add to their collection.</p>
              <br />
            </div>
          </div>
        </div>

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">

            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/friend-finder-demo-vid.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="card-content">
              <span className="card-title activator">Existential Friend Finder<i className="material-icons right">search</i></span>
            </div>

            <div className="card-action">
              <p><a href="https://limitless-dawn-28902.herokuapp.com/" target="_blank" rel="noreferrer">[deployed]</a><a href="https://github.com/ThorNolan/Friend-Finder" target="_blank" rel="noreferrer">[github repo]</a></p>
            </div>

            <div className="card-reveal black">
              <span className="card-title">Existential Friend Finder<i className="material-icons right">close</i></span>
              <p>A full-stack "friend-finder" application I made for my bootcamp, it uses Node.js for its
                server environment and Express for routing and serving html. In the app, users are asked
                to provide their name and a link to a photo (any photo will do), and then fill out a short survey consisting
                of 10 existential statements that they can respond to. Upon submission, they will be matched with the person who
                has given the most similar responses to them, with that information being compared against everything in the provisioned database.</p>
              <br />
            </div>
          </div>
        </div>

      </div>

      <div className="row">

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">

            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/butter-bot-demo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="card-content">
              <span className="card-title activator">Pass the Butter<i className="material-icons right">search</i></span>
            </div>

            <div className="card-action">
              <p><a href="https://damp-oasis-43666.herokuapp.com/" target="_blank" rel="noreferrer">[deployed]</a><a href="https://github.com/ThorNolan/Pass-the-Butter" target="_blank" rel="noreferrer">[github repo]</a></p>
            </div>

            <div className="card-reveal black">
              <span className="card-title">Pass the Butter<i className="material-icons right">close</i></span>
              <p>This butter bot simulator is an exercise in futility! It utilizes Node.js for its server
                environment and Express for routing. as well as Handlebars for templating and serving
                HTML content. Data is persistent, as it is stored in a MySQL database that is
                dynamically updated based on user interaction. The site also utilizes MVC (Model View
                Controller) file structure.</p>
              <br />
            </div>
          </div>
        </div>

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">

            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/grandpas-pills-vid-demo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="card-content">
              <span className="card-title activator">Grandpa's Pills<i className="material-icons right">search</i></span>
            </div>

            <div className="card-action">
              <p><a href="https://thornolan.github.io/unit-4-game/" target="_blank" rel="noreferrer">[deployed]</a><a
                href="https://github.com/ThorNolan/unit-4-game" target="_blank" rel="noreferrer">[github
                repo]</a></p>
            </div>

            <div className="card-reveal  black">
              <span className="card-title">Grandpa's Pills<i className="material-icons right">close</i></span>
              <p>A "crystals collector" style number-guessing game that I made for my full-stack bootcamp.
                I used HTML and CSS to make and style the content of the page, Javascript to create my
                game functionality, and the jQuery library to dynamically update elements on the page. I
                also use a few css animations from the animate.css CDN.</p>
              <br />
            </div>
          </div>
        </div>

        <div className="col s12 m8 offset-m2 l4">
          <div className="card small black hoverable sticky-action">

            <div className="card-image waves-effect waves-block waves-light">
              <video className="activator responsive-video" autoPlay loop muted playsInline>
                <source src="../images/LIRI-Bot-vid-demo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="card-content">
              <span className="card-title activator">LIRI Bot<i className="material-icons right">search</i></span>
            </div>

            <div className="card-action">
              <p><a href="https://github.com/ThorNolan/liri-node-app" target="_blank" rel="noreferrer">[CLI app, repo
                only]</a></p>
            </div>

            <div className="card-reveal  black">
              <span className="card-title">LIRI Bot<i className="material-icons right">close</i></span>
              <p>A command line Node.js app I made for my full-stack coding bootcamp. It takes in
                parameters and returns data to users by using the axios package to make calls to the
                Bands in Town, Spotify or OMDB APIs. Users can search for movies, upcoming concerts, or
                songs, and will be given data about them in their command line. It utilizes NPM to
                manage various node packages such as fs, moment, chalk, and the Node-Spotify-API.</p>
              <br />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  </>
)

export default Projects
