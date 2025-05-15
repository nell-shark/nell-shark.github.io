import { TimelineStep } from '@/components/About/TimelineStep';

const steps = [
  {
    year: 1998,
    title: '👶 Born',
    text: 'I arrived on the scene in 1998, ready to conquer the world (or at least the living room).'
  },
  {
    year: 2005,
    title: '🎒 School',
    text: 'Started school and quickly learned that recess was the most important part of the day.'
  },
  {
    year: 2014,
    title: '🏫 College',
    text: 'I went to college, where I learned that 8 a.m. classes are evil, and coffee is my best friend.'
  },
  {
    year: 2017,
    title: '🎓 University',
    text: 'University was like a real-life simulation of “How to Survive on Instant Noodles and Sleep Deprivation.'
  },
  {
    year: 2022,
    title: '💻 Programming',
    text: 'I became a professional programmer, spending my days fixing bugs and my nights Googling how to fix them.'
  }
];

export function About() {
  return (
    <section id='about' className='flex min-h-[80vh] items-center justify-center'>
      <div className='mx-4 grid gap-4 sm:grid-cols-12'>
        <div className='col-span-12 sm:col-span-3'>
          <div className='mb-14 text-center before:mx-auto before:mb-5 before:block before:h-3 before:w-24 before:rounded-md sm:text-left sm:before:mx-0 before:dark:bg-violet-600'>
            <h3 className='text-3xl font-semibold text-white'>About</h3>
          </div>
        </div>
        <div className='relative col-span-12 space-y-6 px-4 sm:col-span-9'>
          <div className='relative col-span-12 space-y-12 px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:-left-3 sm:before:w-0.5 before:dark:bg-gray-300'>
            {steps.map(step => (
              <TimelineStep key={step.year} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
