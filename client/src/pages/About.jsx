import image from './assets/about.jpg';

export default function About() {
  return (
   
    <div className='min-h-screen flex items-center justify-center '>
      
      <div className='max-w-2xl mx-auto p-3 text-center'>
      <img 
  src={image} 
  alt="Description of the image" 
  className="w-full h-auto rounded-lg shadow-lg" 
/>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Travelling Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Travelling Blog! This blog was created by AI Trip Planner
              as a post to share his thoughts and ideas with the
              world. 
            </p>

            <p>
            But that's not all—join the Traveler's Post, a vibrant space where fellow travelers from around the world come together to share their unique experiences, memorable moments, and valuable recommendations. Whether you're looking for advice on budget-friendly travel, tips for luxury escapes, or unforgettable adventures, you'll find it all here.

Explore, connect, and share your love for travel with us as we uncover the beauty and excitement the world has to offer, one story at a time.
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
}
