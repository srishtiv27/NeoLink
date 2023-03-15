import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function LoginRegister() {
    return (
        <main className="login-register-main">
            <Navbar />
            <div className="login-register-content">
                <div className="login-register-healthcare">
                    <h1 className="">Healthcare Provider</h1>
                    <Button type="button" href="/login-healthcare" text="LOGIN" />
                    <Button type="button" href="/register-healthcare" text="REGISTER" />
                </div>
                <hr className="login-register-hr"/>
                <div className="login-register-SNCU">
                    <h1 className="">SNCU</h1>
                    <Button type="button" href="/login-sncu" text="LOGIN" />
                    <Button type="button" href="/register-sncu" text="REGISTER" />
                </div>
            </div>
        </main>
    );
}