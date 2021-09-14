import React, { useEffect } from 'react';

import Spinner from 'react-spinkit';
import useLoading from '../store/state/loading-provider';

const Loading = () => {
    const { loading } = useLoading();

    return (
        loading ? (
            <div className='overlay-content'>
                <div className='wrapper'>
                    <Spinner
                        name='pacman'
                        fadeIn='none'
                        color='yellow'
                    />
                    <span className='message'>
                        {loading.message}
                    </span>
                </div>
            </div>) : null
    )
}

export default Loading;