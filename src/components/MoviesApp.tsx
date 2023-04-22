import "../App.css";
import { GiFilmProjector } from "react-icons/gi";
import { WiStars } from "react-icons/wi";

const MoviesApp = () => {
  return (
    <div id="movies-section" className="menu-section">
      <div className="menu-section-title">
        <GiFilmProjector />
        <span className="menu-section-title-text">Popcorn time!</span>
      </div>
      <div className="scrollable-component menu-section-content">
        <div id="movie-card-1" className="movie-card">
          <div
            className="movie-card-background background-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            }}
          ></div>
          <div className="movie-card-content">
            <div className="movie-card-info">
              <span className="movie-card-title">Guardians of the Galaxy</span>
              <span className="movie-card-desc">
                A tale of some people watching over a large portion of space.
              </span>
            </div>
            <WiStars className="movie-icon" />
          </div>
        </div>
        <div id="movie-card-2" className="movie-card">
          <div
            className="movie-card-background background-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
            }}
          ></div>
          <div className="movie-card-content">
            <div className="movie-card-info">
              <span className="movie-card-title">Guardians of the Galaxy</span>
              <span className="movie-card-desc">
                A tale of some people watching over a large portion of space.
              </span>
            </div>
            <WiStars className="movie-icon" />
          </div>
        </div>
        <div id="movie-card-3" className="movie-card">
          <div
            className="movie-card-background background-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            }}
          ></div>
          <div className="movie-card-content">
            <div className="movie-card-info">
              <span className="movie-card-title">Guardians of the Galaxy</span>
              <span className="movie-card-desc">
                A tale of some people watching over a large portion of space.
              </span>
            </div>
            <WiStars className="movie-icon" />
          </div>
        </div>
        <div id="movie-card-4" className="movie-card">
          <div
            className="movie-card-background background-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            }}
          ></div>
          <div className="movie-card-content">
            <div className="movie-card-info">
              <span className="movie-card-title">Guardians of the Galaxy</span>
              <span className="movie-card-desc">
                A tale of some people watching over a large portion of space.
              </span>
            </div>
            <WiStars className="movie-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesApp;
