import React , {Component} from 'react';
import Modal from './../Modal/Modal.jsx';
import style from './AuthModal.css';

export default class ConfirmModal extends Component {
    constructor(props) {
        super(props);
    }

    onResolve(data) {
        this.props.actions.hideModal();
        this.props.promise && this.props.promise.resolve(data);
    }

    onReject() {
        this.props.actions.hideModal();
        this.props.promise && this.props.promise.reject();
    }

    onSubmit() {
        const {actions} = this.props;
        actions.login({
                email: this.refs.email.value,
                password: this.refs.password.value
            })
            .then((user) => {
                if (!user.errorMessage) {
                    this.onResolve(user);
                }
            });
    }

    render() {
        const params = {
            title: 'Login',
            resolve: {
                title: 'Login',
                action: ::this.onSubmit
            },
            reject: {
                title: 'Cancel',
                action: ::this.onReject
            }
        };

        return (
            <Modal {...params}>
                <div className={style.row}>
                    <input className={style.inp} ref="email" placeholder="Email"/>
                </div>
                <div className={style.row}>
                    <input className={style.inp} ref="password" placeholder="Password"/>
                </div>
            </Modal>
        );
    }
}
