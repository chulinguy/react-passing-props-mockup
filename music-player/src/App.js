import React from 'react';
import './App.css';

const OneSong = props => <div>
  <button
    className="btn"
    style={{ borderWidth: "5px", borderColor: 'magenta', marginBottom:"2px" }}
    onClick={() => {
        props.updateSongToPlay(props.name)
      }
    }
  >{ props.name }</button>
</div>;

const Avatar = (props) => <div
  style={{
      borderWidth: "5px", 
      borderColor: "green", 
      borderStyle: "solid",
      height: "120px",
      marginBottom:"4px",
      marginTop: "4px"
    }}                          
  >
  <img 
    alt={ props.songToPlay } 
    class="img-thumbnail" 
  />
</div>

class AudioPlayer extends React.Component {
  state = {playing: true}
  render() {
    return (
      <div style={{
        borderWidth: "5px", 
        borderColor: 'purple', 
        borderStyle:"solid",
        height: "120px"
      }}>
        <p>Audio player is {this.state.playing? "playing" : "pausing"} {this.props.songToPlay}</p>
        <button className="btn" onClick={()=> this.setState({ playing: true })}>Play</button>
        <button className="btn" onClick={()=> this.setState({ playing: false })}>Pause</button>
      </div>
    )
  }
}

class PlayList extends React.Component {
  state = { allSongs: [] };  

  componentDidMount() {
    this.setState({
      allSongs: [
        "Window",
        "Dayvan Cowboy",
        "Adrift",
        "Arrival at Sydney Harbour",
        "The Backwards Step"
      ]
    });
  }
  render () {
    const that = this;  
    return (
      <div 
        className="col-6"
        style={{borderWidth: "5px", borderColor: 'orange', borderStyle:"solid"}}
      >
        <h6>Click on below songs</h6>
        {this.state.allSongs.map(song => (
          <OneSong 
            name={song}
            updateSongToPlay={that.props.updateSongToPlay}
          />)
        )} 
      </div>
    )
  }
}

class MusicPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = { songToPlay: "placeholder" };
    this.updateSongToPlay = this.updateSongToPlay.bind(this);  
  }
  updateSongToPlay (newSong) {
    this.setState({songToPlay: newSong})
  }
  render() {
    return (
      <div 
        className="container" 
        style={{borderWidth: "5px", borderColor: 'red', borderStyle:"solid"}}
      >
        <div className="row">
          <div className="col-6">
            <Avatar songToPlay={ this.state.songToPlay }/>
            <AudioPlayer songToPlay={ this.state.songToPlay }/>
          </div>
          <PlayList updateSongToPlay={ this.updateSongToPlay } />
        </div>
      </div>
    )
  }
};

export default MusicPlayer;
