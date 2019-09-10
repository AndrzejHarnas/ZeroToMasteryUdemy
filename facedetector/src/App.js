import React, {Component} from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';




// initialize with your api key. This will also work in your browser via http://browserify.org/

const app = new Clarifai.App({
 apiKey: '08ca3a05454c47429e7e3034d61ecb16'
});


const particlesOptions = {
  particles: {
    number: {
      value:30,
      density: {
        enable: true,
        value_area:800,
      }
    }
    }
  }

class App extends Component {
  constructor(){
    super();
    this.state={
      input: '',
      imageUrl: '',
      box: {}

    }
  }

onInputChange=(event) => {
  this.setState({input: event.target.value});
}


claculateFaceLocation = (data) => {
  const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiface.left_col * width,
    topRow: clarifaiface.top_row * height,
    rightCol: width - (clarifaiface.right_col * width),
    bottomRow: height - (clarifaiface.bottom_row * height)
  }
}

displayFaceBox = (box) => {
  console.log(box);
  this.setState({box: box});
}



onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input});
  console.log(this.state.imageUrl);

  app.models.predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
    .then(response => this.displayFaceBox(this.claculateFaceLocation(response)))
    .catch(err => console.log(err));
}


render() {
  return (
    <div className="App">
    <Particles className='particles'
                  params={particlesOptions}
                />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition
        box={this.state.box}
        imageUrl={this.state.imageUrl}/>

    </div>
  );
}
}

export default App;
