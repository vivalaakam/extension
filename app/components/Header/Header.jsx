import React , {Component} from 'react';
import style from './Header.css';
import Close from '../Close/Close'

export default class Header extends Component {
    render() {
        return (
            <div className={style.header}>
                <div className={style.wrapper}>
                    <Close />
                </div>
            </div>
        );
    }
}