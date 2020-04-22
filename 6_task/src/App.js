import React, { Component } from 'react';
import Post from './Post/Post';

const posts = [{
  id: 1,
  img: "https://source.unsplash.com/daily",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "John Smith",
  desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
{
  id: 2,
  img: "https://source.unsplash.com/1600x900/?nature,water",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "John Smith",
  desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
{
  id: 3,
  img: "https://source.unsplash.com/1600x900/?city",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "John Smith",
  desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
];

class App extends Component {
  state = {
    posts: posts,
  };

  removeHandler = (removeId) => {
    const oldArray = [...this.state.posts]; //... is preceed an original posts array
    oldArray.splice(removeId, 1); // remove 1 element at removeID position
    this.setState({ posts: oldArray }); // update the array after removal
    console.log('clicked');
  }

  addLikeHandler = (id) => { // to find which post you clicked
    const postId = this.state.posts.findIndex((p) => {
      return p.id === id;
    });
    const post = { ...this.state.posts[postId] }; // spread object
    post.likes += 1; // add new like to post object
    const posts = [...this.state.posts]; // take full array, spread it
    posts[postId] = post; // and add updated post to back array
    this.setState({
      posts: posts,
    });
  };

  render() {

    //mapping array
    const postsList = this.state.posts.map((post, index) => { // each element takes the parameter post
      return (
        <Post
          key={post.id}
          img={post.img}
          likes={post.likes}
          title={post.title}
          author={post.author}
          desc={post.desc}
          removeClick={this.removeHandler.bind(this, index)}
          likeClick={this.addLikeHandler.bind(this, post.id)} />
      )
    })


    return (
      <div className="cards" >
        {postsList}
        {/* <Post img={this.state.posts[0].img} title={this.state.posts[0].title} author={this.state.posts[0].author} desc={this.state.posts[0].desc} />
        <Post img={this.state.posts[1].img} title={this.state.posts[1].title} author={this.state.posts[1].author} desc={this.state.posts[1].desc} />
        <Post img={this.state.posts[2].img} title={this.state.posts[2].title} author={this.state.posts[2].author} desc={this.state.posts[2].desc} /> */}
      </div>
    );
  }
}

export default App;
