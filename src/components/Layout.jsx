import 'tailwindcss/tailwind.css'
import NavBar from '../components/NavBar'

export default function Layout({ page, children }) {

    return (
        <div>
            <NavBar page={page} user={null} />
            <div className="bg-gray-100">
                <div className="md:w-2/3 bg-gray-50 mx-auto rounded-b-2xl">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}