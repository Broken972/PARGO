import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../../public/icons/LogoPARGO.png'

// import components


const Main = styled.main`
background-color: #11cdef;
height: 100vh;
color: #fff;
nav{
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    display: flex;
    align-items: center;
    content-items: center;

    img{
      border-radius: 50%;
      margin: 1rem;
    }

  }
  ul{
    display: flex;

    li{
      font-size: 1.6rem;
      list-style: none;
      margin-right: 5rem;
      
      a{
        text-decoration: none;
        color: #fff;

        &:hover{
          color: #000;
          text-decoration: underline;
        }
      }
    }
  }
}
section{
  margin-left: 10rem;
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  margin-top: 5rem;

  h1{
    font-size: 7rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  h2{
    font-size: 5rem;
  }
  p{
    width: 50%;
    font-size: 3rem;
    margin-top: 5rem;
  }
}

`

export default function Home() {
  return (
    <>
      <Head>
        <title>PARGO</title>
        <meta name="description" content="app PARGO corporation " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <nav>
          <div>
            <Image src={Logo} alt="Logo" width={50} height={50} />
            <h1>PARGO</h1>
          </div>
          <ul>
            
            <li>
              <Link href="/login"  >
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link href="/login"  >
                <p>About</p>
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/login"  >
                <p>Linkdin</p>
              </Link>
            </li>
            <li>
              <Link href="/login"  >
                <p>Twitter</p>
              </Link>
            </li>
          </ul>
        </nav>
        <section>
          <h1>Succès et réalisations <br/> de PARGO</h1>
          <h2>Une approche créative et <br/> innovante pour votre entreprise</h2>
          <p>Chez PARGO, nous sommes une entreprise spécialisée dans la création web, le design et l'IA. Nous mettons notre expertise et notre expérience à votre service pour vous aider à réaliser vos projets en ligne et à améliorer l'expérience utilisateur de vos clients.</p>
        </section>

      </Main>
    </>
  )
}
