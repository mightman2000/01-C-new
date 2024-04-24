import { Content, Hero, MailForm, Other } from "./sections"
import Nav from "./components/Nav"

export default function App() {
  return (
   
    <main>

    <section>
      <Nav />
    </section>

    <section>
      <Hero/>
    </section>

    <section>
      <Content />
    </section>

    <section>
      <MailForm />
    </section>

    <section>
      <Other />
    </section>

    </main>


  )
}