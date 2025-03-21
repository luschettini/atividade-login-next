"use client";
import '../profile/profile.css';
import Card from '../../components/Card';
import { useRouter } from "next/navigation"

export default function Profile() {
    const router = useRouter();

    return (
    <div className="container">
            <div className="profile">
            <div className="image">
                <img src="/photo-profile.png"  alt="Profile" />
                <p>Luiza Nicoluci Schettini</p>
            </div>
            <Card title={"Descrição"} text={"Olá, meu nome é Luiza e sou uma desenvolvedora do curso de Desenvolvimento de Sistemas no SENAI;"} />
            <Card title={"Experiência"} text={"Desenvolvedora Full Stack;"} />
            <Card title={"Hobbies"} text={"No tempo livre adoro maratonar séries, brincar com minha sobrinha e sair com meus amigos."} />
            <Card title={"Habilidades"} text={
                    <div className="socialmedia">
                        <div className="media">
                            <img src="/google.png" alt="Google" />
                        </div>
                        <div className="media">
                            <img src="/firefoxx.png" alt="Firefox" />
                        </div>
                        <div className="media">
                            <img src="/apple.png" alt="Apple" />
                        </div>
                    </div>
                } />
            </div>
        </div>
    );
}