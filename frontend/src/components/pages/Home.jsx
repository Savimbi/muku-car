import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Home() {
  return (
    <>
    <Header/>
    <div className="hero min-h-screen bg-base-200 bg-cover bg-[url('https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzfGVufDB8fDB8fHww')]" >
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left  bg-base-100">
      <div className="join">
  <div>
    <div>
      <input className="input input-bordered join-item" placeholder="Search"/>
    </div>
  </div>
  <select className="select select-bordered join-item">
    <option disabled selected>Filter</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <div className="indicator">
    <span className="indicator-item badge badge-secondary">new</span> 
    <button className="btn join-item">Search</button>
  </div>
</div>
          </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}
