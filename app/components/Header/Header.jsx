import React , {Component} from 'react';
import style from './Header.css';
import Close from '../Close/Close'
import ProgressBar from '../ProgressBar/ProgressBar';

export default class Header extends Component {

    showModal() {
        this.props.actions.showModal('AUTH_MODAL');
    }

    showRegister() {
    }

    logout() {
        const {actions} = this.props;
        actions.logout();
    }

    getLogin() {
        const {auth} = this.props;
        if (auth.id) {
            return (
                <div className={style.login_info}>
                    <div className={style.email}>{auth.email}</div>
                    <button className={style.btn} onClick={::this.logout}>Logout</button>
                </div>
            )
        } else {
            return (
                <div className={style.login_info}>
                    <button className={style.btn} onClick={::this.showModal}>Login</button>
                    <button className={style.btn} onClick={::this.showRegister}>Register</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className={style.header}>
                <ProgressBar progress={this.props.progress}/>
                <div className={style.wrapper}>
                    <div className={style.back}>
                        <Close />
                    </div>
                    {this.getLogin()}
                </div>
            </div>
        );
    }
}
