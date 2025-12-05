import Utils from "../helpers/Utils";
import { logoutAction, refreshTokenAction } from "../store/auth/actions";

const fetchWithAuth = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> => {
  const { store } = await import("../store/store");
  const state = store.getState();
  let token = state.auth.token;

  if (!token || Utils.isTokenExpired(token.accessToken)) {
    const result = await store.dispatch(refreshTokenAction());

    if (refreshTokenAction.fulfilled.match(result)) {
      token = result.payload.data;
    }

    if (refreshTokenAction.rejected.match(result)) {
      const result = await store.dispatch(logoutAction());

      if (logoutAction.fulfilled.match(result)) {
        window.location.href = `${window.location.protocol}//${window.location.host}/login`;
      }
    }
  }

  return fetch(input, {
    ...init,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token?.accessToken}`,
      ...init?.headers,
    },
  });
};

export default fetchWithAuth;
