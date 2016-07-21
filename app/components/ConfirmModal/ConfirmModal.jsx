import React , {Component} from 'react'
import Modal from './../Modal/Modal.jsx';
import style from './ConfirmModal.css';

export default class ConfirmModal extends Component {
    constructor(props) {
        super(props);
    }

    onResolve() {
        this.props.actions.hideModal();
        this.props.promise && this.props.promise.resolve();
    }

    onReject() {
        this.props.actions.hideModal();
        this.props.promise && this.props.promise.reject();
    }

    render() {
        const {title} = this.props;

        const params = {
            title: title,
            resolve: {
                title: 'Yes',
                action: ::this.onResolve
            },
            reject: {
                title: 'No',
                action: ::this.onReject
            }
        };

        return (
            <Modal {...params}></Modal>
        );
    }
}
