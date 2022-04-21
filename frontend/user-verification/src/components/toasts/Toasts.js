import React from 'react'
import Toast from 'react-bootstrap/Toast';
import "./Toasts.css"
function Toasts({message,setMessage}) {
  return (
    <div className="openModal">
<div className='proceeds-modal' >

<Toast className='mx-auto'>


<strong className="mr-auto ">
User Verification App
</strong>
 <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={() => setMessage("")}>
        <span aria-hidden="true">&times;</span>
      </button>
<hr/>
<Toast.Body>
{`${message.message}`}
</Toast.Body>
</Toast>
</div>

</div>
  )
}

export default Toasts