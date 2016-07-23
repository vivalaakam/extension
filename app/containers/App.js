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

    static events = [
        'DOMContentLoaded', 'load', 'resize'
    ];

    constructor(props) {
        super(props);

        this.handler = ::this.handler;
        this.onScroll = ::this.onScroll
    }

    componentDidMount() {
        this.setSizes();
        window.addEventListener('scroll', this.onScroll, false);
        App.events.map((event) => {
            window.addEventListener(event, this.handler, false);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
        App.events.map((event) => {
            window.removeEventListener(event, this.handler, false);
        });
    }

    handler() {
        this.setSizes();
        this.trigger('scroll');
    }

    trigger(eventName) {
        const event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, true, false);
        window.dispatchEvent(event);
    }

    setSizes() {
        const {inner} = this.refs.article.refs;
        const wh = window.innerHeight;
        const h = inner.clientHeight;
        this.sHeight = h - wh;
    }

    onScroll() {
        const top = this.refs.scroll.scrollTop;
        const perc = Math.max(0, Math.min(1, top / this.sHeight));
        this.props.actions.progressArticle(Math.round(perc * 100));
    }

    render() {
        const { actions, article, auth } = this.props;
        return (
            <div className={style.app} onScroll={::this.onScroll} ref="scroll">
                <Header {...{actions, auth, progress: article.progress}}/>
                <Article {...{article, actions}} ref="article"/>
                <Modal />
            </div>
        );
    }
}
