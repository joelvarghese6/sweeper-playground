import Image from "next/image"

export const PlaygroundInitial = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-16 space-y-6">
            <Image
                src="/alien.svg"
                alt="Initial image for data"
                height={200}
                width={200}
            />
            <p className="text-neutral-700">Search an address</p>
        </div>
    )
}