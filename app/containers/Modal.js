import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ConfirmModal from '../components/ConfirmModal/ConfirmModal.jsx';
import AuthModal from './AuthModal';
import * as ModalActions from '../actions/modal';

const MODAL_COMPONENTS = {
    CONFIRM_MODAL: ConfirmModal,
    AUTH_MODAL: AuthModal
};

@connect(
    state => ({
        modal: state.modal
    }),
    dispatch => ({
        actions: bindActionCreators(ModalActions, dispatch)
    })
)
export default class Modal extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        modal: PropTypes.object.isRequired
    };

    render() {
        const { actions, modal } = this.props;
        if (!modal.type || !MODAL_COMPONENTS[modal.type]) {
            return null;
        }
        const Comp = MODAL_COMPONENTS[modal.type];
        return (
            <Comp {...modal.props} actions={actions} promise={modal.promise}></Comp>
        );
    }
}
