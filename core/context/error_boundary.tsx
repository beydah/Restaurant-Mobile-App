// #region HEADER
// This file implements a global React Error Boundary for the mobile application.
// #endregion

'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { C_LOG_SERVICE } from '@/core/utils/logging_utility';

// #region TYPES
interface I_Props {
    children: ReactNode;
    p_fallback_node?: ReactNode;
}

interface I_State {
    has_error_flag: boolean;
}
// #endregion

// #region CLASS
export class F_Error_Boundary extends Component<I_Props, I_State> {
    public state: I_State = {
        has_error_flag: false,
    };

    public static getDerivedStateFromError(_: Error): I_State {
        // Update state so the next render will show the fallback UI.
        return { has_error_flag: true };
    }

    public componentDidCatch(p_error: Error, p_error_info: ErrorInfo) {
        C_LOG_SERVICE.F_Error("Uncaught error caught by boundary", {
            error: p_error.toString(),
            info: p_error_info.componentStack
        });
    }

    public render() {
        if (this.state.has_error_flag) {
            return this.props.p_fallback_node || (
                <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50 text-center">
                    <div className="max-w-xs">
                        <div className="text-amber-600 mb-4">
                            <i className="ri-error-warning-line text-5xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Ops! Bir şeyler yanlış gitti</h2>
                        <p className="text-gray-600 mb-6 text-sm">
                            Uygulamada beklenmedik bir hata oluştu. Sorunu çözmeye çalışıyoruz.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl active:scale-95 transition-transform"
                        >
                            Tekrar Dene
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
// #endregion
