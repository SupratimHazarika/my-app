import React, {useContext} from 'react'
import Link from 'next/link'

const categories = [{name: 'React', slug: 'react'}, {name: 'Web Development', slug: 'web-dev'}]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-emerald-400 py-8'>
            <div className='md:float-left block ml-6'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-2xl text-gray-700'>
                        Techno Mania
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md: float-right mt-2 align-middle bg-white p-1 rounded-full text-cyan-900 ml-4 cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header