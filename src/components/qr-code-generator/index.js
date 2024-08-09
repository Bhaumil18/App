import React, { useState } from 'react'
import QRCode from 'react-qr-code'

function QrCodeGenerator() {
    const [input,setInput] = useState('')
    const [qrCode,setQrCode] = useState('')

    function handleClick()
    {
        setQrCode(input)
    }
    
  return (
    <div className='container'>
        <h2>QR Code Generator</h2>
        <div className="input-container">
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
            <button className='button' disabled={input && input.trim() != '' ? false : true } onClick={handleClick}>Generate</button>
        </div>
        <br />
        <div className="qr-code-container">
            <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='#fff' />
        </div>
    </div>
  )
}

export default QrCodeGenerator