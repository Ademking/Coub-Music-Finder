import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import 'bulma/css/bulma.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: ''
    };
  }


  getData = async (e) => {
    e.preventDefault();
    const link = e.target.link.value;
    try {
      const api_call = await fetch(`https://secret-ocean-49799.herokuapp.com/${link}`);
      const data = await api_call.text();
      //console.log(data);
      let musicAuthor_regex = /<h3 class='musicAuthor'[^>]*>([\s\S]*?)<\/h3>/;
      let musicTitle_regex = /<h3 class='musicTitle'[^>]*>([\s\S]*?)<\/h3>/;
      let music_Author = data.match(musicAuthor_regex)[1];
      let music_Title = data.match(musicTitle_regex)[1];

      music_Author = music_Author.replace(/(?:\r\n|\r|\n)/g, '');
      music_Title = music_Title.replace(/(?:\r\n|\r|\n)/g, '');

      this.setState({
        title: music_Title,
        author: music_Author
      })
    } catch (error) {
      this.setState({
        title: undefined,
        author: undefined
      })
    }
  }

  render() {
    let res;
    if (this.state.title === undefined && this.state.author === undefined)
      res = '❌\n No Result Found!'

    else if (this.state.title === '' && this.state.author === '')
      res = '';

    else
      res = `🎧\n ${this.state.title} - ${this.state.author}`;



    return (
      <div>
        <section className="section">

          <div className="container has-text-centered">
            <img className="image has-image-centered  is-128x128 has-text-centered" src="https://png2.kisspng.com/20180724/iw/kisspng-coub-video-clip-art-coub-5b5762093e81e7.743719721532453385256.png"/>
            <h1 className="title">Coub Music Finder</h1>
            <h1 className="subtitle">Recognize Coub.com Music - Copy/Paste URL to get Music name</h1>
            <Form getData={this.getData} />
            <p className="is-size-3 res">{res}</p>
          </div>


        </section>
        <div className="footer">
          <p className="is-size-6">Made with 💖☕🍪 By <a href="https://facebook.com/Ademkouki.Officiel">@AdemKouki</a></p>
        </div>


      </div>




    );
  }



}

export default App;
