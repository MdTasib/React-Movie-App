import React from 'react';
import './single_content.css';
import Badge from '@material-ui/core/Badge';
import { img_300, unavailable } from '../../confiq/confiq';
import ContentModal from '../../components/ContentModal/ContentModal';

const SingleContent = ({ id, title, date, poster, media_type, vote_average }) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average ? vote_average : '00'} color={vote_average > 6 ? 'primary' : 'secondary'} />
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt="" />
            <b className='title'>{title}</b>
            <span className='subTitle'>
                {media_type === 'tv' ? 'TV Series' : 'Movies'}
                <span className='subTitle'>{date}</span>
            </span>
        </ContentModal>
    );
};

export default SingleContent;