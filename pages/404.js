import Link from 'next/link';
import Meta from "../components/Meta";

function Error() {
    return (
        <>
        <Meta title="404 | Page not found" />
        <div className="flex flex-col justify-center items-center h-screen w-screen text-secondary-700">
            <h2 className="text-5xl md:text-6xl font-bold">404</h2>
            <p className="my-1 text-md md:text-lg">Oops! nothing here...</p>
            <Link href="/"><button className="btn">Go Back</button></Link>
        </div>
        </>
    )
}

export default Error
