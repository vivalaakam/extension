import React , {Component} from 'react';
import style from './ProgressBar.css';

export default class ProgressBar extends Component {
    render() {
        const css = {
            width: `${this.props.progress}%`
        };

        return (
            <div className={style.progressbar}>
                <div style={css} className={style.progress}></div>
            </div>
        )
    }
}
