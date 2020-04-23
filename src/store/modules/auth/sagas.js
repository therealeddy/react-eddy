import { toast } from 'react-toastify';

import { takeLatest, all } from 'redux-saga/effects';

import api from '~/services/api';

export function* signIn() {
  try {
    // api.setHeaders({ Authorization: `Bearer ${token}` });
  } catch (err) {
    toast.error(
      ' Erro ao fazer o login, verifique seus dados e tente novamente!'
    );
    return yield true;
  }
}

export function* checkKeepAndSetToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  api.setHeaders({ Authorization: `Bearer ${token}` });

  return yield true;
}

export default all([
  takeLatest('persist/REHYDRATE', checkKeepAndSetToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
