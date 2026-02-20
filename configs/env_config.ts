// #region HEADER
// This file implements the environment configuration and validation registry.
// #endregion

// #region ENUMS
/**
 * Application environment modes.
 */
export enum E_App_Environment {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    TEST = 'test'
}
// #endregion

// #region TYPES
/**
 * Validated environment configuration interface.
 */
export interface I_Env_Config {
    APP_NAME_TEXT: string;
    ENV_MODE: E_App_Environment;
    API_BASE_URL_TEXT: string;
    IS_DEBUG_FLAG: boolean;
    APP_VERSION_TEXT: string;
}
// #endregion

// #region VALIDATION
/**
 * Validates the raw process environment against required keys.
 * Note: In a production scenario, use a library like Zod or Joi for this.
 */
function F_Validate_Env(): I_Env_Config {
    const node_env = process.env.NODE_ENV || 'development';

    return {
        APP_NAME_TEXT: "Halic Kahve",
        ENV_MODE: node_env as E_App_Environment,
        API_BASE_URL_TEXT: process.env.NEXT_PUBLIC_API_URL || "https://api.halic-kahve.test",
        IS_DEBUG_FLAG: node_env === 'development',
        APP_VERSION_TEXT: "1.0.0-phase3"
    };
}
// #endregion

// #region EXPORTS
/**
 * Global validated configuration instance.
 */
export const C_ENV_CONFIG = F_Validate_Env();
// #endregion
