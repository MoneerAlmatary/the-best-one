import './App.css';
import Confetti from './Confetti';

const shareMessage = 'I just want to tell you that you are the best'
const shareLink = 'https://docker.com/'

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>
          Securities Exchange Unit!!!
        </h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          You are all the best
        </p>
        <div>
          <a target="_blank" href={"https://twitter.com/intent/tweet?text=" + shareMessage + "&url=" + shareLink} class="fa fa-whatsapp" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://www.linkedin.com/sharing/share-offsite/?url=" + shareLink} class="fa fa-facebook" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://reddit.com/submit?title=" + shareMessage + "&url=" + shareLink} class="fa fa-youtube" rel="noopener noreferrer"> </a>
        </div>
      </header>
    </div>
  );
}

export default App;
