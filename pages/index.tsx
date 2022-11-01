import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useForm, SubmitHandler} from 'react-hook-form'

interface IFormInputs{
  email: string,
  password:string
}


export default function Home() {

  const {register, handleSubmit, formState: {errors}} = useForm<IFormInputs>();

  const handleSubmitForm:SubmitHandler<IFormInputs> = (data:IFormInputs ) =>{
    console.log(data);
    
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <input type="text" defaultValue="binh@gmail.com" {...register('email')}/>
            <br />
            <input type="password" {...register('password')}/>
            <br />
            <input type="submit" value="submit"/>
          </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
