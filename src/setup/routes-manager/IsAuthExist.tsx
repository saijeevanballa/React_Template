import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from "react-redux";

function isAuthExist({ token }: { token: string }) {
    if (token) {
        return <Navigate to="/" replace />;
    }
    return <Outlet />;
}

export default connect((state: any, ownProps) => {
    const { token } = state.auth;
    return { ...ownProps, token };
})(isAuthExist);
