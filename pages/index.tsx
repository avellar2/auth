import { FormEvent, useContext, useState } from "react";
import styles from "../styles/Home.module.css";
import {AuthContext} from '../contexts/authContexts'

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn, isAuthenticated} = useContext(AuthContext)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const data = {
            email,
            password,
        };

        await signIn(data);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.main}>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}
