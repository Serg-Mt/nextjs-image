import Image from 'next/image';
import largePic from '../public/stephen-leonardi-iSM8Z82uxn8-unsplash.jpg';

export default function Home() {
  return <>

    <Image
      src={largePic}
      alt='Mountain landscape'
      placeholder="blur"
      style={{objectFit: 'cover'}}
      fill={true}
    />
    <div className='center'><h1>Example</h1></div>
    
  </>;

}
