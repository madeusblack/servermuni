import React from 'react';
import axios from 'axios';
import '../../assets/styles/Post.scss';

/*This component is used to display content of the single post*/
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      title: '',
      content: '',
    };
  }

  componentDidMount = async () => {
    await axios.get(
      `https://madeusblack.000webhostapp.com/wp-json/wp/v2/posts/${this.props.match.params.id}`,
    ).then((post) => {
      console.log(post.data.title.rendered);
      this.setState({
        posts: post.data,
        title: post.data.title.rendered,
        content: post.data.content.rendered,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className='postContainer' >
        <h1>{this.state.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
    );
  }
}

export default Post;
