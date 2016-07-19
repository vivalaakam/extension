import React , {Component} from 'react';
import style from './Article.css';

export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    getArticle() {
        const {article} = this.props;
        return {__html: article.article};
    }

    render() {
        const {article} = this.props;
        return (
            <div className={style.article}>
                <h1 className={style.title}>{article.title}</h1>
                <div dangerouslySetInnerHTML={this.getArticle()}>
                </div>
            </div>
        );
    }
}