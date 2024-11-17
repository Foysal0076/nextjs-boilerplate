import HomeHero from '@/features/home/home-hero'

export default function Home() {
  return (
    <div className='container'>
      <HomeHero />

      <div className='flex flex-wrap gap-4'>
        <div className='h-36 w-36 rounded-default border bg-card shadow' />
        <div className='h-36 w-36 rounded-sm border bg-card shadow-sm' />
        <div className='h-36 w-36 rounded-sm border bg-card shadow-none' />
        <div className='h-36 w-36 rounded-md border bg-card shadow-md' />
        <div className='h-36 w-36 rounded-lg border bg-card shadow-lg' />
        <div className='h-36 w-36 rounded-xl border bg-card shadow-xl' />
        <div className='h-36 w-36 rounded-2xl border bg-card shadow-2xl' />
        <div className='h-36 w-36 rounded-full border bg-card shadow-inner' />
        <div className='h-36 w-36 rounded border bg-card shadow-top' />
      </div>

      <h1 className='h1'>Hello World</h1>
      <h2 className='h2'>Hello World</h2>
      <h3 className='h3'>Hello World</h3>
      <h4 className='h4'>Hello World</h4>
      <h5 className='h5'>Hello World</h5>
      <h6 className='h6'>Hello World</h6>
    </div>
  )
}
