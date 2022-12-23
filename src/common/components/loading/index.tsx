import React from 'react'
import { connect } from 'react-redux';
import loader from '../../../assets/images/Loading.gif'
import "./styles.css"

function Loading(props: { isLoading: boolean } | any) {
    if (!props.isLoading) return null;

    return (
        <div className='LoaderCard'>
            <div>
                <img src={loader} alt='Loading' />
            </div>
        </div>
    )
}

export default connect(
    (state: any, ownProps) => {
        return { ...ownProps, ...state.loader };
    })(Loading);