import Head from 'next/head';
import Login from '../Components/login';
import '../styles/globals.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login Form Modal</title>
      </Head>
      <Login />
    </div>
  );
}
