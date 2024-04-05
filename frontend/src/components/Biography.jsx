import React from 'react'

function Biography({ imgUrl }) {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imgUrl} alt="about" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum suscipit non provident error. Perferendis a odit nobis ullam autem sed ipsam nulla repudiandae, sint illum accusantium eius fuga tenetur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi minus distinctio? Sunt architecto dignissimos neque repellendus aliquid, sint voluptatem beatae similique minima aliquam totam in eaque aperiam excepturi, dicta illo! Molestias voluptate tenetur veritatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi cum quidem.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography