import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function LoginRegister() {
    return (
        <main>
            <Navbar />
            <div className="login-register-content">
                <div className="login-register">
                    <h1 className="login-register-title">Healthcare Provider</h1>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Button type="button" href="/login-healthcare" text="LOGIN" />
                        <Button type="button" href="/register-healthcare" text="REGISTER" />
                    </div>
                </div>
                <div className="login-register">
                    <h1 className="login-register-title">SNCU</h1>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Button type="button" href="/login-sncu" text="LOGIN" />
                        <Button type="button" href="/register-sncu" text="REGISTER" />
                    </div>
                </div>
            </div>
        </main>
    );
}