
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/AndugalaPujitha" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/andugala-pujitha-abcd4502/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>portfolio designed & built by <a href="https://github.com/AndugalaPujitha" target="_blank" rel="noreferrer">Pujitha</a> with 💜</p>
    </footer>
  );
}

export default Footer;