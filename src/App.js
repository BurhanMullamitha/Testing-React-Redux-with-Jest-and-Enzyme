import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';

import './App.scss';

const tempArr = [{
  fName: 'Burhan',
  lName: 'Mullamitha',
  email: 'burhan@gmail.com',
  age: 22,
  onlineStatus: true
}]

class App extends React.Component {
    fetchPosts = () => {
        this.props.fetchPosts();
    }
    
    render() {
        const { posts } = this.props;
        
        const buttonConfig = {
            buttonText: 'Get Posts',
            emitEvent: this.fetchPosts
        }
        
        return (
            <div className="App">
              <Header />
              <section className="main">
                <Headline header="Post" desc="Click the button to render posts" tempArr={tempArr} />
                <SharedButton {...buttonConfig} />
                
                {posts.length > 0 && 
                    
                    <div>
                        {posts.map((post, index) => {
                            const { title, body } = post;
                            const postConfig = {
                                title,
                                desc: body
                            };
                            
                            return (
                                <ListItem key={index} {...postConfig} />
                            )
                        })}
                    </div>
                    
                }
              </section>
            </div>
          );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPosts })(App);
