import React , {Component} from 'react';
import Remarkable from 'remarkable'

import style from './Article.css';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.md = new Remarkable();
    }

    getArticle() {
        const {article} = this.props;
        return {__html: this.md.render(article.markdown)};
    }

    render() {
        const {article} = this.props;
        return (
            <div className={style.article}>
                <h1 className={style.title}>{article.title}</h1>
                <div dangerouslySetInnerHTML={this.getArticle()}></div>
            </div>
        );
    }
}