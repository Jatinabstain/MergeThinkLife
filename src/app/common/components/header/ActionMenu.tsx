import Link from "next/link";

export default function ActionMenu() {
    return (
        <>
            <Link href="http://portal.thinklife.com/" target="_blank" className="outline_btn_small">Login</Link>
            <Link href="https://quote.thinklife.com/" target="_blank" className="fill_btn_small">Get Started</Link>
        </>
    );
}