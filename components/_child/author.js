import Image from "next/image";
import Link from "next/link";

export default function author (){
  return (
    <div className='author flex py-5'>
        <Image src={'/images/11.jpg'} alt={'Image'} className="rounded-full" width={60} height={60} />
        <div className="flex flex-col justify-center px-4">
            <Link href={'/'} className="text-md font-bold text-gray-800 hover:text-gray-600">Aina Oluwapelumi</Link>
            <span className="text-sm text-gray-500">C.E.O. / Founder</span>
        </div>
    </div>
  )
}
