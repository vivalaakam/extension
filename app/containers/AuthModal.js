import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthModalWidget from '../components/AuthModal/AuthModal';
import * as AuthActions from '../actions/auth';
import * as ModalActions from '../actions/modal';

@connect(
    state => ({
        auth: state.auth
    }),
    dispatch => ({
        actions: bindActionCreators({...AuthActions, ...ModalActions}, dispatch)
    })
)
export default class AuthModal extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        return (
            <AuthModalWidget {...this.props} />
        );
    }
}
