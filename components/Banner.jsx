import Image from 'next/image';

export default function Banner({ title, subtitle, image }) {
    return ( <
        div className = "relative h-[40vh] min-h-[300px] w-full" >
        <
        Image src = { image }
        alt = { title }
        fill className = "object-cover"
        priority /
        >
        <
        div className = "absolute inset-0 bg-gradient-to-b from-purple-900/50 to-purple-950/90" / >
        <
        div className = "absolute inset-0 flex flex-col items-center justify-center text-center px-4" >
        <
        h1 className = "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" > { title } </h1> {
            subtitle && ( <p className = "text-xl text-purple-200 max-w-2xl" > { subtitle } </p>
            )
        } </div> </div>
    );
}