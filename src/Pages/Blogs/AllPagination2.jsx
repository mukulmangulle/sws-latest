import React, { useEffect, useState, useRef } from 'react';
import { Box, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const AllPagination2 = ({ Api_url }) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(2); 
  const [exhausted, setExhausted] = useState(false);
  const observer = useRef();

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!loading && !exhausted) {
      const options = {
        root: null,
        rootMargin: '20px',
        threshold: 0.1
      };

      observer.current = new IntersectionObserver(handleObserver, options);
      if (observer.current) {
        observer.current.observe(document.getElementById('bottom-of-list'));
      }
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, exhausted]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const fetchPosts = () => {
    setLoading(true);
    fetch(`${Api_url}posts?per_page=10&page=${page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setBlog(prevBlog => (page === 2 ? [...data] : [...prevBlog, ...data])); 
        setLoading(false);
        if (data.length === 0) {
          setExhausted(true);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <CircularProgress sx={{ margin: "auto" }} />
      ) : (
        <>
          {blog.map((blogItem) => (
            <Card key={blogItem.id} id='blog-card'>
              <img className='blogsimg' src={blogItem.jetpack_featured_media_url} alt="" />
              <CardContent>
                <Link
                  to={`/${process.env.SLUG_URL}/${blogItem.slug}/`}
                  state={{ id: blogItem.id }}
                  style={{ textDecoration: "none" }}
                >
                  <Typography id='card-heading'>
                    {blogItem.title.rendered}
                  </Typography>
                </Link>
                <Typography
                  id='card-typography'
                  dangerouslySetInnerHTML={{ __html: blogItem.excerpt.rendered }}
                />
              </CardContent>
            </Card>
          ))}
          <Box id="bottom-of-list" />
        </>
      )}
    </>
  );
};

export default AllPagination2;
