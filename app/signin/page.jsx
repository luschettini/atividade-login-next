"use client";

import style from "./home.module.css"
import Input from "../../components/Input"
import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter();
    return (
        <div className={style.container}>
        <div className={style.login}>
            <h2>Sign In</h2>
            <Input type="text" text="Username or Email" />
            <Input id="password" type="password" text="Password" />
            <button className={style.button} onClick={() => router.push("/profile")}>Login</button>
            <p>Connect with</p>
                <div className={style.socialmedia}>
                    <div className={style.media}>
                        <img src="/google.png"/>
                    </div>
                    <div className={style.media}>
                        <img src="/firefoxx.png"/>
                    </div>
                    <div className={style.media}>
                        <img src="/apple.png"/>
                    </div>
                </div>
                    <p>Or</p>
                <nav>
                <p>Don't have an account? <button className={style.link} onClick={() => router.push("/signout")}>Sign Out</button></p>
                </nav>
        </div>
    </div>
    )
}