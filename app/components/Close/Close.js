import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import style from './Close.css';


export default class Close extends Component {

    static contextTypes = {
        root: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    onClick() {
        this.context.root.remove()
    }

    render() {
        return (
            <div className={style.close}>
                <button className={style.back} onClick={::this.onClick}>
                    CLOSE
                </button>
            </div>
        )

    }
}