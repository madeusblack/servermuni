import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import '../../assets/styles/Buttons.scss';
import classes from '../../assets/styles/Posts.module.css';

export default function Posts() {
  // Track state for posts, current page and number of pages
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [nrofpages, setNumberofpage] = useState(1);

  // When the page number changes call the api for posts.
  useEffect(() => {
    axios.get(
      ' https://madeusblack.000webhostapp.com/wp-json/wp/v2/posts?_embed=true', {
        params: { page },
      },
    )
      .then((response) => {
      // Store the number of posible pages.
        setNumberofpage(response.headers['x-wp-totalpages']);
        // Store the posts from the response.
        setPosts(response.data);
      });
  }, [page, setPosts]);

  // Event handler: Decrease page count no lower then 1.
  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
  // Event handler: Increase page count no higher then nrofpages.
  const handleNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);
  return (
    <div className={classes.postsWrapper}>
      <h3 className={classes.news}>Noticias</h3>
      <div className={classes.postList}>
        {posts &&
          posts.length &&
          posts.map((post, index) => {
            const date = moment(post.date).format('ll');
            return (
              <Link key={`link-${post.id}`} className={classes.newsText} to={`/post/${post.id}`}>
                <div key={post.id} className={classes.postContainer}>

                  {post.featured_media ? (
                    <>
                      {' '}
                      <img
                        alt='example'
                        className={classes.postImage}
                        src={post.better_featured_image.source_url}
                        loading='lazy'
                      />
                    </>
                  ) :
                    null}
                  <h6 key={`date-${post.id}`} className={classes.date}>{date}</h6>

                  <h3 key={`title-${post.id}`} className={classes.postTitle}>{post.title.rendered}</h3>
                </div>

              </Link>
            );
          })}
      </div>
      <div className={classes.postNav}>
        <button className='pulse' type='button' onClick={handlePrevPage}>Noticias mas Recientes</button>
        <p>
          Página
          {' '}
          {page}
          {' '}
          de
          {' '}
          {nrofpages}
        </p>
        <button className='pulse' type='button' onClick={handleNextPage}>Noticias Anteriores</button>
      </div>
    </div>
  );
}
