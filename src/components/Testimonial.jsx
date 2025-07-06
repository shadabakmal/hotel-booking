import React from 'react';
import Title from './Title';
import { testimonials } from '../assets/assets';
/*const testimonials = [
  {
    id: 1,
    name: 'Donald Jackman',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    review: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    id: 2,
    name: 'Richard Nelson',
    role: 'Instagram Influencer',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    review: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    id: 3,
    name: 'James Washington',
    role: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    review: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  }
];*/

const renderStars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" fill="#FF532E" />
      </svg>
    ))}
  </div>
);

function Testimonial() {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-28">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodation around the world"
      />

      <div className="flex flex-wrap items-center justify-center gap-6 pt-14">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
            <div className="flex flex-col items-center px-5 py-4 relative">
              <img className="h-24 w-24 absolute -top-14 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
              <div className="pt-8 text-center">
                <h1 className="text-lg font-medium text-gray-800">{testimonial.name}</h1>
                <p className="text-gray-800/80">{testimonial.address}</p>
              </div>
            </div>
            <p className="text-gray-500 px-6 text-center">{testimonial.review}</p>
            <div className="flex justify-center pt-4">{renderStars()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
