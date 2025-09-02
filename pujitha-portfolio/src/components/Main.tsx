import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" /> */}
          {/* <img src="C:/Users/Victus/Desktop/Portfolio/pujitha-portfolio/src/assets/images/puji_11zon.jpg" alt="Avatar" /> */}
          <img src="https://media.licdn.com/dms/image/v2/D5603AQG7a1mA6tIA7w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693239695964?e=1752710400&v=beta&t=jfYSr9PLBOMPnEbPjB_6f0B62_Y-Hm8kuBzbviLQtqY" alt="Avatar" />
          
          
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AndugalaPujitha" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/andugala-pujitha-abcd4502/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Pujitha Andugala</h1>
          <p>Aspiring Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AndugalaPujitha" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/andugala-pujitha-abcd4502/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;