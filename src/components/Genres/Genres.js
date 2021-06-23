/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import axios from 'axios';
import api from '../../pages/Trending/api';
import { Chip } from '@material-ui/core';

const Genres = ({ selectedGenres, setSelectedGenres, genres, setGenres, type, setPage, }) => {
    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${api}&language=en-US`);

        setGenres(data.genres);
    };

    console.log(genres);

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        }
    }, []);

    // add selected Genres
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }

    // remove unselected Genres
    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((seleted) => seleted.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    }

    return (
        <div style={{ padding: '6px 0' }}>
            {
                selectedGenres && selectedGenres.map((genre) => (
                    <Chip
                        style={{ margin: 2 }}
                        key={genre.id}
                        label={genre.name}
                        size='small'
                        color='primary'
                        clickable
                        onDelete={() => handleRemove(genre)}
                    />
                ))
            }
            {
                genres && genres.map((genre) => (
                    <Chip
                        style={{ margin: 2 }}
                        key={genre.id}
                        label={genre.name}
                        size='small'
                        clickable
                        onClick={() => handleAdd(genre)}
                    />
                ))
            }
        </div>
    );
};

export default Genres;