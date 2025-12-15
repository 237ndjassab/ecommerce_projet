import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiResponse, ApiThunk } from "../../types/base";
import type {
  AuthInfo,
  AuthToken,
  ForgotPasswordDto,
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
  User,
  VerifyOtpDto,
} from "../../types/user";
import Utils from "../../helpers/Utils";

/**
 * =============================
 *  REGISTER ACTION
 * =============================
 * Cette action permet d’enregistrer un nouvel utilisateur.
 * Elle envoie les données du formulaire au backend.
 * En cas de succès, elle renvoie les informations de l'utilisateur créé.
 * En cas d’erreur, elle déclenche rejectWithValue pour gérer l’erreur dans le slice.
 */
export const registerAction = createAsyncThunk<ApiResponse<User>, RegisterDto>(
  "auth/registerAction",
  async (data, apiThunk) => {
    try {
      // Appel API d'inscription
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Vérifie si la requête a échoué
      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to ctreate user: ", error);
        return apiThunk.rejectWithValue("Failed to create user.");
      }

      // Récupère les données retournées par l'API
      const result = await response.json();

      console.log("Data on register: ", result);

      return result;
    } catch (error) {
      // Capture une erreur réseau ou autre exception
      return apiThunk.rejectWithValue(
        (error as { message: string }).message || "Failed to create user."
      );
    }
  }
);

/**
 * =============================
 *  LOGIN ACTION
 * =============================
 * Cette action permet de connecter un utilisateur.
 * Elle stocke les informations d'authentification dans localStorage via Utils.
 * Elle utilise "credentials: include" pour recevoir les cookies httpOnly.
 */
export const loginAction = createAsyncThunk<
  ApiResponse<AuthInfo>,
  LoginDto,
  ApiThunk
>("auth/loginAction", async (data, apiThunk) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include", // obligatoire pour les cookies httpOnly
    });

    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to login user: ", error);

      return apiThunk.rejectWithValue({
        message: "Failed to login user.",
        statusCode: response.status,
      });
    }

    const result = await response.json();

    // Stocke les informations de connexion localement
    if (result.data) {
      Utils.setAuthInfo(result.data);
    }

    return result;
  } catch (error) {
    console.log("Error on login request: ", error);
    return apiThunk.rejectWithValue({
      message:
        (error as { message: string }).message ||
        "Failed to login user due to network error.",
      statusCode: 500,
    });
  }
});

/**
 * =============================
 *  FORGOT PASSWORD ACTION
 * =============================
 * Permet de générer un OTP ou un lien de réinitialisation.
 */
export const forgotPasswordAction = createAsyncThunk<
  ApiResponse<User>,
  ForgotPasswordDto
>("auth/forgotPasswordAction", async (data, apiThunk) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to login user: ", error);
      return apiThunk.rejectWithValue("Failed to login user.");
    }

    const result = await response.json();

    // Certains backends renvoient un token après le forgot-password
    if (result.data) {
      Utils.setAuthInfo(result.data);
    }

    return result;
  } catch (error) {
    console.log("Error on login request: ", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message ||
        "Failed to login user due to network error."
    );
  }
});

/**
 * =============================
 *  VERIFY OTP ACTION
 * =============================
 * Vérifie que l’OTP ou le token envoyé à l'utilisateur est correct.
 */
export const verifyOtpAction = createAsyncThunk<
  ApiResponse<AuthInfo>,
  VerifyOtpDto
>("auth/verifyOtpAction", async (data, apiThunk) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/verify-otp`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to login user: ", error);
      return apiThunk.rejectWithValue("Failed to login user.");
    }

    const result = await response.json();

    // Stocke le token reçu après validation de l'OTP
    if (result.data) {
      Utils.setAuthInfo(result.data);
    }

    return result;
  } catch (error) {
    console.log("Error on login request: ", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message ||
        "Failed to login user due to network error."
    );
  }
});

/**
 * =============================
 *  RESET PASSWORD ACTION
 * =============================
 * Réinitialise le mot de passe de l'utilisateur à l'aide d'un OTP, token ou email.
 */
export const resetPasswordAction = createAsyncThunk<
  ApiResponse<User>,
  ResetPasswordDto
>("auth/resetPasswordAction", async (data, apiThunk) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/reset-password`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to reset user password: ", error);
      return apiThunk.rejectWithValue("Failed to reset user password.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error on login request: ", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message ||
        "Failed to reset user passsword."
    );
  }
});

/**
 * =============================
 *  REFRESH TOKEN ACTION
 * =============================
 * Récupère un nouveau jeton d'accès grâce au cookie refreshToken.
 * "credentials: include" est indispensable.
 */
export const refreshTokenAction = createAsyncThunk<
  ApiResponse<AuthToken>,
  void,
  ApiThunk
>("auth/refreshTokenAction", async (_, apiThunk) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/refresh`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to refresh user access token: ", error);
      return apiThunk.rejectWithValue({
        message: "Failed to refresh user access token.",
        statusCode: response.status,
      });
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error on login request: ", error);

    return apiThunk.rejectWithValue({
      message:
        (error as { message: string }).message ||
        "Failed to refresh user access token.",
      statusCode: 500,
    });
  }
});

/**
 * =============================
 *  LOGOUT ACTION
 * =============================
 * Déconnecte l'utilisateur en supprimant les cookies (server-side).
 */
export const logoutAction = createAsyncThunk<
  ApiResponse<User>,
  void,
  ApiThunk
>(
  "auth/logoutAction",
  async (_, apiThunk) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include", // important : permet au serveur de supprimer les cookies
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to logout the user: ", error);
        return apiThunk.rejectWithValue({
          message: "Failed to logout the user.",
          statusCode: response.status,
        });
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.log("Error on login request: ", error);

      return apiThunk.rejectWithValue({
        message:
          (error as { message: string }).message ||
          "Failed to logout the user.",
        statusCode: 500,
      });
    }
  }
);
