// #region HEADER
// This file implements the core logging utility for enterprise-grade error tracking and auditing.
// #endregion

import { C_ENV_CONFIG } from '@/configs/env_config';

// #region TYPES
export enum E_Log_Level {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    AUDIT = 'AUDIT'
}

interface I_Log_Payload {
    p_message_text: string;
    p_context_object?: any;
    p_timestamp_value?: string;
}
// #endregion

// #region FUNCTIONS
/**
 * Core logging function that handles environment-aware log steering.
 */
function F_Log(p_level: E_Log_Level, p_payload: I_Log_Payload) {
    const timestamp_text = new Date().toISOString();
    const log_output = `[${timestamp_text}] [${p_level}] ${p_payload.p_message_text}`;

    // Development: Console output with formatting
    if (C_ENV_CONFIG.IS_DEBUG_FLAG) {
        switch (p_level) {
            case E_Log_Level.INFO:
                console.info(log_output, p_payload.p_context_object || '');
                break;
            case E_Log_Level.WARN:
                console.warn(log_output, p_payload.p_context_object || '');
                break;
            case E_Log_Level.ERROR:
                console.error(log_output, p_payload.p_context_object || '');
                break;
            case E_Log_Level.AUDIT:
                console.log(`%c ${log_output}`, 'color: #007bff; font-weight: bold;', p_payload.p_context_object || '');
                break;
        }
    }

    // Production: Steer to external monitoring (e.g., Sentry, LogRocket, DataDog)
    if (!C_ENV_CONFIG.IS_DEBUG_FLAG) {
        // TODO: Integrate external monitoring sink
    }
}

/**
 * Enterprise logging service instance.
 */
export const C_LOG_SERVICE = {
    F_Info: (p_msg: string, p_ctx?: any) => F_Log(E_Log_Level.INFO, { p_message_text: p_msg, p_context_object: p_ctx }),
    F_Warn: (p_msg: string, p_ctx?: any) => F_Log(E_Log_Level.WARN, { p_message_text: p_msg, p_context_object: p_ctx }),
    F_Error: (p_msg: string, p_ctx?: any) => F_Log(E_Log_Level.ERROR, { p_message_text: p_msg, p_context_object: p_ctx }),
    F_Audit: (p_msg: string, p_ctx?: any) => F_Log(E_Log_Level.AUDIT, { p_message_text: p_msg, p_context_object: p_ctx })
};
// #endregion
