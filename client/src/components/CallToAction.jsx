import { Button } from 'flowbite-react';
import image from './assets/image.png';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-gray-100 p-4'>
        <div className="flex-1 justify-center flex flex-col ">
            <h2 className='text-2xl text-black'>
            Want to dive deeper into the world of travel?
            </h2>
            <p className='text-gray-500 my-2'>
            Checkout these resources packed with ideas and features for Travel Blogging Apps! 
            </p>
            <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://theworldtravelguy.com/" target='_blank' rel='noopener noreferrer'>
                Travel Blogging Apps!
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={image} />
        </div>
    </div>
  )
}