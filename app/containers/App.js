import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from './Modal.js';
import Article from '../components/Article/Article.jsx';
import Header from '../components/Header/Header';
import * as ArticleActions from '../actions/article';
import {showModal} from '../actions/modal';
import {logout} from '../actions/auth';
import style from './App.css';

@connect(
    state => ({
        todos: state.todos,
        auth: state.auth,
        article: state.article
    }),
    dispatch => ({
        actions: bindActionCreators({...ArticleActions, showModal, logout}, dispatch)
    })
)
export default class App extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const { actions, article, auth } = this.props;
        return (
            <div className={style.app}>
                <Header {...{actions, auth}}/>
                <Article {...{article, actions}} />
                <Modal />
            </div>
        );
    }
}
