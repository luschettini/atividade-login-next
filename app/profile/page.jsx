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
                <img src="/author.png"  alt="Profile" />
                <p>Luiza Nicoluci Schettini</p>
            </div>
            
            <Card title={"Descrição"} text={"Olá, meu nome é Luiza e sou uma desenvolvedora do curso de Desenvolvimento de Sistemas no SENAI;"} />
            <Card title={"Experiência"} text={"Desenvolvedora Full Stack;"} />
            <Card title={"Hobbies"} text={"No tempo livre adoro maratonar séries, brincar com minha sobrinha e sair com meus amigos."} />
            <Card title={"Habilidades"} text={
                    <div className="socialmedia">
                        <div className="media">
                            <img src="/css.png" alt="CSS" />
                        </div>
                        <div className="media">
                            <img src="/html.png" alt="html" />
                        </div>
                        <div className="media">
                            <img src="/react.png" alt="react" />
                        </div>
                    </div>
                }
                />
            </div>
        </div>
    );
}