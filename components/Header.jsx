import React, {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import { getCategories } from '../services';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => {
        setCategories(newCategories);
        });
    }, []);

  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-emerald-400 py-8'>
            <div className='md:float-left block ml-6 mt-3'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-indigo-900'>
                        Techno Maniac
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='transition duration-500 ease hover:bg-indigo-900 md:float-right align-middle bg-pink-600 p-4 rounded-full text-white ml-4 cursor-pointer'>
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