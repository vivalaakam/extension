import React , {Component} from 'react';
import style from './Modal.css';

export default class Modal extends Component {
    button(type) {
        if (type) {
            return (
                <button className={style.btn} onClick={type.action}>{type.title}</button>
            )
        }
    }

    render() {
        const {title , resolve , reject} = this.props;
        return (
            <div className={style.modal}>
                <div className={style.wrapper}>
                    <div className={style.title}>
                        {title}
                    </div>
                    <div className={style.content}>
                        {this.props.children}
                    </div>
                    <div className={style.controls}>
                        {this.button(reject)}

                        {this.button(resolve)}
                    </div>
                </div>
            </div>
        );
    }
}
