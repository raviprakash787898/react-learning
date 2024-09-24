import logo from '/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header">
            <img src={ logo } alt="Logo money..." />
            <h1>Investment Calculator</h1>
        </header>
    );
}