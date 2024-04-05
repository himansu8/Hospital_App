import React from 'react'

function MessagrForm() {
  return (
    <>
    <div className="container form-component message-form">
      <h2>Send Us A Message</h2>
      <form >
        <div>
          <input
            type="text"
            placeholder="First Name"
            // value={firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            // value={lastName}
          
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
        />
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Send</button>
        </div>
      </form>
      <img src="/Vector.png" alt="vector" />
    </div>
  </>
  )
}

export default MessagrForm