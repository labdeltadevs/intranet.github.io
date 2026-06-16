import Header from './components/Header'
import NavCards from './components/NavCards'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:py-16">
        <NavCards />
      </main>
      <Footer />
    </>
  )
}
