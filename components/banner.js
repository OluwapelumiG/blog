'use client'
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';


// import swiper react components
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
//import swiper styles
import 'swiper/css'; 

export default function Banner () {

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/station1.jpg') no-repeat",
        backgroundPosition: "right"
    }
  return (
    
    <section className='py-16' style={bg}>
        <div className='container mx-auto md:px-20'>
            <h1 className='font-bold text-4xl pb-12 text-center'>
                Trending 59:10
            </h1>

            <Swiper slidesPerView={1} autoplay={{ delay:2000}} loop={true}>
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

function Slide(){
    return (
        <div className='grid md:grid-cols-2'>
            <div className='image'>
                <Link href={'/'}>
                    <Image src={'/images/award-icon.jpg'} alt={"Image"} width={600} height={600} />
                </Link>
            </div>
            <div className='info flex justify-center flex-col'>
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