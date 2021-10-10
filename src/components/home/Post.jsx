import React from 'react';
import axios from 'axios';
import '../../assets/styles/Post.scss';

/*This component is used to display content of the single post*/
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  componentDidMount = async () => {
    const { match } = this.props;
    await axios.get(
      `https://municipalidadnogales.000webhostapp.com/wp-json/wp/v2/posts/${match.params.id}`,
    ).then((post) => {
      this.setState({
        title: post.data.title.rendered,
        content: post.data.content.rendered,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { title, content } = this.state;
    return (
      <div className='postContainer'>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
}

export default Post;
