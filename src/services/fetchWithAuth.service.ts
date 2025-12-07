import Utils from "../helpers/Utils";
import { logoutAction, refreshTokenAction } from "../store/auth/actions";

/**
 * fetchWithAuth
 * --------------
 * Wrapper autour de `fetch` pour gérer automatiquement :
 * - l’ajout du jeton d’authentification (accessToken)
 * - le rafraîchissement du token si il est expiré
 * - la déconnexion automatique si le refresh échoue
 *
 * Objectif :
 * → Éviter de répéter la logique de tokens dans chaque appel API.
 */
const fetchWithAuth = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> => {
  // On récupère le store Redux
  const { store } = await import("../store/store");
  const state = store.getState();

  // On récupère le token actuel
  let token = state.auth.token;

  /**
   * Vérification du token :
   * - Si pas de token → l'utilisateur n'est pas connecté
   * - Si le token est expiré → on tente de le rafraîchir
   */
  if (!token || Utils.isTokenExpired(token.accessToken)) {

    // On tente de rafraîchir le token via Redux
    const result = await store.dispatch(refreshTokenAction());

    /**
     * Si le refreshToken fonctionne :
     * - On récupère le NOUVEAU token
     * - L'utilisateur reste connecté
     */
    if (refreshTokenAction.fulfilled.match(result)) {
      token = result.payload.data;
    }

    /**
     * Si le refreshToken échoue :
     * - Le refresh token est probablement expiré
     * - L'utilisateur doit se reconnecter
     * - On déclenche un logout propre
     */
    if (refreshTokenAction.rejected.match(result)) {
      const result = await store.dispatch(logoutAction());

      if (logoutAction.fulfilled.match(result)) {
        // On redirige vers la page de login
        window.location.href = `${window.location.protocol}//${window.location.host}/login`;
      }
    }
  }

  /**
   * On exécute enfin la requête API
   * On ajoute automatiquement le header Authorization: Bearer <token>
   */
  return fetch(input, {
    ...init,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token?.accessToken}`,
      ...init?.headers, // permet de fusionner avec les headers fournis dans l'appel
    },
  });
};

export default fetchWithAuth;
