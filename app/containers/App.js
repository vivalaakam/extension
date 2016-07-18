import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Article from '../components/Article.jsx';
import Close from '../components/Close';
import * as ArticleActions from '../actions/article';
import style from './App.css';

@connect(
    state => ({
        todos: state.todos,
        article: state.article
    }),
    dispatch => ({
        actions: bindActionCreators(ArticleActions, dispatch)
    })
)
export default class App extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const { actions, article } = this.props;
        return (
            <div className={style.app}>
                <Close />
                <Article {...{article, actions}}/>
            </div>
        );
    }
}
