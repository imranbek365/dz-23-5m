import './header.scss';

export default function Header() {
  return (
    <header>
        <div className="container row">
            <h2>MNTN</h2>
            <ul className="row">
                <li>Equipment</li>
                <li>About us</li>
                <li>Blog</li>
            </ul>
            <h2>Account</h2>
        </div>
    </header>
  )
}