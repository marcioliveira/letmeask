<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../services/firebase';

=======
>>>>>>> d6c68b0ed5498c23a2420c1ec6c31a855201f8e9
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

<<<<<<< HEAD
import { Button } from '../components/Button';

import "../styles/auth.scss";

export function Home() {
    const history = useHistory();

    function handleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);

            history.push('/rooms/new');
        })        
    }

    return (
        <div id="page-auth">
=======
export function Home() {
    return (
        <div>
>>>>>>> d6c68b0ed5498c23a2420c1ec6c31a855201f8e9
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
<<<<<<< HEAD
            <main>                
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
=======
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
>>>>>>> d6c68b0ed5498c23a2420c1ec6c31a855201f8e9
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
<<<<<<< HEAD
                        <Button type="submit">
                            Entrar na sala
                        </Button>
=======
                        <button type="submit">
                            Entrar na sala
                        </button>
>>>>>>> d6c68b0ed5498c23a2420c1ec6c31a855201f8e9
                    </form>
                </div>
                
            </main>
        </div>
        
    )
}