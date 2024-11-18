'use client'

import { useState } from 'react'

import { Button, Input } from '@/components/ui'
import { EnvelopeIcon, KeyIcon } from '@/icons'

export default function DemoComponents() {
  const [passwordType, setPasswordType] = useState<'text' | 'password'>(
    'password'
  )
  const togglePasswordType = () =>
    setPasswordType((prev) => (prev === 'text' ? 'password' : 'text'))

  return (
    <div className='container flex flex-col gap-4 py-6 md:gap-6'>
      <div className='flex flex-wrap gap-4'>
        <div className='h-28 w-28 rounded-default border bg-card shadow' />
        <div className='h-28 w-28 rounded-sm border bg-card shadow-sm' />
        <div className='h-28 w-28 rounded-sm border bg-card shadow-none' />
        <div className='h-28 w-28 rounded-md border bg-card shadow-md' />
        <div className='h-28 w-28 rounded-lg border bg-card shadow-lg' />
        <div className='h-28 w-28 rounded-xl border bg-card shadow-xl' />
        <div className='h-28 w-28 rounded-2xl border bg-card shadow-2xl' />
        <div className='h-28 w-28 rounded-full border bg-card shadow-inner' />
        <div className='h-28 w-28 rounded border bg-card shadow-top' />
      </div>

      <div className='flex flex-wrap gap-4'>
        <Button>Default</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='link'>Link</Button>
      </div>

      <div className='flex flex-wrap gap-4'>
        <Input
          label='Default Input'
          placeholder='Default'
          helperText='Helper text'
        />
        <Input label='Disabled Input' placeholder='Disabled' disabled />
        <Input
          label='Error Input'
          placeholder='Error'
          error='Error message'
          helperText='Helper text'
        />
        <Input
          label='Email Input'
          type='email'
          placeholder='Default'
          startAdornment={{ adornment: <EnvelopeIcon /> }}
        />
        <Input
          label='Password Input'
          type={passwordType}
          placeholder='Default'
          endAdornment={{
            adornment: <KeyIcon />,
            onClick: togglePasswordType,
          }}
        />
      </div>

      <div className='space-y-2'>
        <h1 className='h1'>H1 Hello World </h1>
        <h2 className='h2'>H2 Hello World </h2>
        <h3 className='h3'>H3 Hello World </h3>
        <h4 className='h4'>H4 Hello World </h4>
        <h5 className='h5'>H5 Hello World </h5>
        <h6 className='h6'>H6 Hello World </h6>
      </div>
    </div>
  )
}
