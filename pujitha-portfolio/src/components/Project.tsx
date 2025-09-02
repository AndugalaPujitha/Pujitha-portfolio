import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://puji-chatbot.streamlit.app/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://puji-chatbot.streamlit.app/" target="_blank" rel="noreferrer"><h2>Chat-bot</h2></a>
                    <p>A conversational AI chatbot built using Streamlit, Google Gemini API, and FAISS for intelligent response generation.</p>
                </div>
                <div className="project">
                    <a href="https://selfie-spot.netlify.app/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://selfie-spot.netlify.app/" target="_blank" rel="noreferrer"><h2>Selfie-Spot</h2></a>
                    <p>A stylish, interactive web-based photobooth built with React.Capture fun photo strips with filters, countdown, flash effects, and download your final collage!</p>
                </div>
                <div className="project">
                    <a href="https://crop-recommendation-systems.streamlit.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://crop-recommendation-systems.streamlit.app/" target="_blank" rel="noreferrer"><h2>Crop-Recomendation System</h2></a>
                    <p>Welcome to the Crop Recommendation System! Built with Python and Streamlit, it helps farmers choose the best crops based on environmental factors.</p>
                </div>
                <div className="project">
                    <a href="https://spellcheckersystem.streamlit.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://spellcheckersystem.streamlit.app/" target="_blank" rel="noreferrer"><h2>Spell-Checker</h2></a>
                    <p>This Python application checks the spelling of user-entered words using TextBlob and suggests corrections along with synonyms from NLTK's WordNet. It features a user-friendly GUI built with Tkinter.</p>
                </div>
                <div className="project">
                    <a href="https://doctorscaresystem.netlify.app/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://doctorscaresystem.netlify.app/" target="_blank" rel="noreferrer"><h2>Doctor's Care System</h2></a>
                    <p>This website bridges communication between medical campaign committees and village panchayats for efficient healthcare collaboration. It enables information sharing, campaign management, health data collection, and community engagement.</p>
                </div>
                <div className="project">
                <a href="https://vishnupeerconnects.netlify.app/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://vishnupeerconnects.netlify.app/" target="_blank" rel="noreferrer"><h2>Vishnu Peer Connects</h2></a>
                <p>Peer Connects is a web application that enables communication and interaction within the SVCEW community. It allows users to post updates, explore trending topics, and connect with students, alumni, and faculty.</p>
            </div>
            {/* <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
            </div>
        </div>
    );
}

export default Project;