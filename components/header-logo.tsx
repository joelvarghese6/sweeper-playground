import Link from "next/link"
import Image from "next/image"

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image 
                    src="/broom.svg"
                    alt="logo"
                    height={40}
                    width={40}
                />
                <p className="font-semibold text-white text-2xl ml-2.5">Dustooor</p>
            </div>
        </Link>
    )
}