/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './trending.css';
import axios from 'axios';
import api from './api';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';

const Trending = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api}&page=${page}`);
        setContent(data.results);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchTrending();
    }, [page])

    console.log(content);
    return (
        <div>
            <span className='pageTitle'>Trending</span>
            <div className="trending">
                {
                    content && content.map(c =>
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />
                    )
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    );
};

export default Trending;