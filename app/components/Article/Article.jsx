import React , {Component} from 'react';
import Remarkable from 'remarkable'

import style from './Article.css';

export default class Article extends Component {
    constructor(props) {
        super(props);
        //this.onScroll = ::this.onScroll;
        this.md = new Remarkable();
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            console.log(123);
        }, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    getArticle() {
        const {article} = this.props;
        return {__html: this.md.render(article.markdown)};
    }

    onScroll() {
        console.log('scroll');
    }

    render() {
        const {article} = this.props;
        return (
            <div className={style.article} ref="inner">
                <h1 className={style.title}>{article.title}</h1>
                <div dangerouslySetInnerHTML={this.getArticle()}></div>
            </div>
        );
    }
}
