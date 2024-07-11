import Head from 'next/head';
import LoginForm from './Components/signup';
import './styles/globals.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sign up Form Modal</title>
      </Head>
      <LoginForm />
    </div>
  );
}
