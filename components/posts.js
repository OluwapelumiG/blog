import Image from "next/image";
import Link from "next/link";
import Author from "@/components/_child/author";

export default function Posts(props) {
 return (
    <section className={"container mx-auto md:px-20 py-10"}>
        <h1 className={"font-bold text-4xl py-12 text-center"}>Latest Post</h1>

    {/*    Grid cols*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            { Post() }
        </div>

    </section>
 );}


function Post(){
    return (
        <div className={'item'}>
            <div className="images">
                <Link href={'/'}>
                    <Image src={'/images/award-icon.jpg'} className={'rounded'} alt={"Image"} width={500} height={350} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className='category'>
                    <Link href={'/'} className='text-orange-600 hover:text-orange-800'>
                        Bussiness, Travel
                    </Link>
                    <Link href={'/'} className='text-gray-600 hover:text-gray-800'>
                        June, 2023
                    </Link>
                </div>
                <div className='title'>
                    <Link href={'#'} className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>
                        I'm really trying my best to learn something
                    </Link>
                </div>
                <p className='text-gray-500 py-3'>
                    This is a long description of my challenges and strengths when designing with Tailwind CSS and Next.js. You just gotta learn it even though you're not a front end developer
                </p>
                <Author />
            </div>
        </div>
    )
}