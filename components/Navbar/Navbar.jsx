import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact Us</a></Link>
        </nav>
    )
}