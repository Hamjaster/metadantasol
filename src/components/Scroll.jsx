"use client"
import React, { useEffect } from 'react'
import { Options } from 'smooth-scrollbar/options'
import Scrollbar from 'smooth-scrollbar'

export default function Scroll() {
    var options = {
        damping: 0.05,
    }
    useEffect(() => {
        Scrollbar.init(document.body, options)
    }, [])
    return null
}
